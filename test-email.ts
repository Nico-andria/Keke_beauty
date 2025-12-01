// test-email.ts
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  console.log("📨 Initialisation du test d'envoi d'email...");

  // --- Transporteur Gmail ---
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL obligatoire pour Gmail
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // mot de passe d'application Gmail
    },
    logger: true, // logs détaillés Nodemailer
    debug: true, // debug complet
  });

  // --- Vérifier la connexion avant envoi ---
  transporter.verify((err, success) => {
    if (err) {
      console.error("❌ Erreur de connexion SMTP :", err);
    } else {
      console.log("✅ Connexion SMTP OK :", success);
    }
  });

  try {
    console.log("📤 Envoi de l'email de test...");

    const info = await transporter.sendMail({
      from: `"Test App" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "🚀 Test d'envoi Gmail avec Nodemailer",
      text: "Si tu reçois cet email, tout fonctionne ! 🔥",
      html: "<p>Si tu vois ce message, ton <strong>SMTP Gmail</strong> fonctionne 🔥</p>",
    });

    console.log("✅ Email envoyé !");
    console.log("📩 Message ID :", info.messageId);
    console.log("➡️ Réponse SMTP :", info.response);
  } catch (err) {
    console.error("❌ Erreur lors de l'envoi :", err);
  }
}

main();
