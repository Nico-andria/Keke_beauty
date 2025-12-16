import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import path from "path";

export const dynamic = "force-dynamic";

// --- SMTP configuration ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// --- Client email HTML ---
const clientHtmlEmail = (
  customerName: string,
  courseTitle: string,
  amount: string,
  currency: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Order Confirmation</title>
<style>
  body { font-family: 'Inter', sans-serif; margin:0; padding:0; background:#f5f5f7; color:#333; }
  .container { max-width:600px; margin:20px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg,#fbb6ce,#c084fc); padding:30px; text-align:center; color:white; }
  .header img { height:50px; margin-bottom:10px; }
  .header h1 { margin:0; font-size:26px; }
  .body { padding:30px; }
  .body h2 { margin-top:0; color:#9d174d; }
  .body p { margin:8px 0; }
  .button { display:inline-block; margin-top:20px; padding:12px 24px; background: linear-gradient(135deg,#fbb6ce,#c084fc); color:white; text-decoration:none; border-radius:12px; font-weight:bold; }
  .footer { text-align:center; font-size:12px; color:#999; padding:20px; border-top:1px solid #eee; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:keke-logo" alt="Keke Academy" />
      <h1>Thank you for your purchase!</h1>
    </div>
    <div class="body">
      <h2>Hello ${customerName},</h2>
      <p>Your order has been successfully confirmed.</p>
      <p><strong>Course:</strong> ${courseTitle}</p>
      <p><strong>Amount Paid:</strong> ${amount} ${currency}</p>
      <a href="#" class="button">Access Your Course</a>
    </div>
    <div class="footer">© 2025 Keke Academy. All rights reserved.</div>
  </div>
</body>
</html>
`;

// --- Admin email HTML ---
const adminHtmlEmail = (
  customerName: string,
  customerEmail: string,
  customerPhone: string,
  courseTitle: string,
  amount: string,
  currency: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>New Order</title>
<style>
  body { font-family: 'Inter', sans-serif; margin:0; padding:0; background:#f0f0f3; color:#333; }
  .container { max-width:600px; margin:20px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08); border:2px solid #c084fc; }
  .header { background: linear-gradient(135deg,#c084fc,#fbb6ce); padding:25px; text-align:center; color:white; }
  .header img { height:50px; margin-bottom:10px; }
  .header h1 { margin:0; font-size:24px; }
  .body { padding:25px; }
  .body h2 { color:#9d174d; margin-bottom:10px; }
  .body p { margin:6px 0; }
  .footer { text-align:center; font-size:12px; color:#999; padding:15px; border-top:1px solid #eee; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:keke-logo" alt="Keke Academy" />
      <h1>New Order Received</h1>
    </div>
    <div class="body">
      <h2>Customer Details:</h2>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${customerEmail}</p>
      <p><strong>Phone:</strong> ${customerPhone || "N/A"}</p>
      <h2>Course Details:</h2>
      <p><strong>Course:</strong> ${courseTitle}</p>
      <p><strong>Amount:</strong> ${amount} ${currency}</p>
    </div>
    <div class="footer">© 2025 Keke Academy. All rights reserved.</div>
  </div>
</body>
</html>
`;
// --- Helper pour récupérer le raw body ---
async function getRawBody(req: NextRequest): Promise<string> {
  const arrayBuffer = await req.arrayBuffer();
  return Buffer.from(arrayBuffer).toString("utf8");
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");

  if (!sig)
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  // const body = await req.text();
  const body = await getRawBody(req);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("❌ Invalid Stripe signature:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("✅ Payment completed:", session);

    const customerEmail = session.customer_email;
    if (!customerEmail) {
      console.error("❌ No customer email in Stripe session");
      return NextResponse.json({ received: true });
    }

    const amount = (session.amount_total! / 100).toFixed(2);
    const currency = session.currency?.toUpperCase() ?? "USD";
    const courseTitle = session.metadata?.courseName || "Online Course";
    const customerName = session.metadata?.customerName || "Customer";
    const customerPhone = session.metadata?.customerPhone || "";

    try {
      // Send email to client
      await transporter.sendMail({
        from: `"Keke Academy" <${process.env.SMTP_USER}>`,
        to: customerEmail,
        subject: `Your Order Confirmation: ${courseTitle}`,
        html: clientHtmlEmail(customerName, courseTitle, amount, currency),
        attachments: [
          {
            filename: "keke-logo.jfif",
            path: path.join(process.cwd(), "public/keke-logo.jfif"),
            cid: "keke-logo", // same cid as in HTML img src
          },
        ],
      });

      // Send email to admin
      await transporter.sendMail({
        from: `"Keke Academy" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL!,
        subject: `New Order: ${courseTitle}`,
        html: adminHtmlEmail(
          customerName,
          customerEmail,
          customerPhone,
          courseTitle,
          amount,
          currency
        ),
        attachments: [
          {
            filename: "keke-logo.jfif",
            path: path.join(process.cwd(), "public/keke-logo.jfif"),
            cid: "keke-logo",
          },
        ],
      });

      console.log("📧 Emails sent successfully");
    } catch (err) {
      console.error("❌ Email sending error:", err);
    }
  }

  return NextResponse.json({ received: true });
}
