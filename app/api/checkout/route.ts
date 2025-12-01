import { NextRequest, NextResponse } from "next/server";
import { stripe, COURSE_PRICES, COURSE_NAMES, CourseId } from "@/lib/stripe";
import * as dotenv from "dotenv";
dotenv.config();

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { courseId, customerName, customerEmail, customerPhone } = body;

    if (!courseId || !customerName || !customerEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!(courseId in COURSE_PRICES)) {
      return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
    }

    const coursePrice = COURSE_PRICES[courseId as CourseId];
    const courseName = COURSE_NAMES[courseId as CourseId];
    const origin = request.headers.get("origin") || "http://localhost:3000";

    // --- Créer session Stripe ---
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: courseName },
            unit_amount: coursePrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      customer_email: customerEmail,
      metadata: {
        courseId,
        courseName,
        customerName,
        customerPhone: customerPhone || "",
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
