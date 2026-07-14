import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "kimberley.hwong@outlook.be";
const SMTP_HOST = process.env.SMTP_HOST ?? "smtp-mail.outlook.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_USER = process.env.SMTP_USER ?? CONTACT_TO;
const SMTP_PASS = process.env.SMTP_PASS;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { naam, email, bericht } = body;

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Gelieve een geldig e-mailadres in te vullen" },
        { status: 400 },
      );
    }

    if (!SMTP_PASS) {
      console.error("SMTP_PASS is niet ingesteld");
      return NextResponse.json(
        {
          error:
            "Het contactformulier is nog niet geactiveerd. Mail ons rechtstreeks via kimberley.hwong@outlook.be of bel +32 (0) 476 51 42 48.",
        },
        { status: 503 },
      );
    }

    const subject = `Nieuw contactformulier bericht van ${naam}`;
    const text = `
Nieuw bericht ontvangen via het contactformulier:

Naam: ${naam}
Email: ${email}

Bericht:
${bericht}

---
Dit bericht is verzonden via het contactformulier op de website.
    `.trim();

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"KH Reflexologie website" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Bericht verzonden! We nemen zo snel mogelijk contact met je op.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error:
          "Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw of mail rechtstreeks naar kimberley.hwong@outlook.be.",
      },
      { status: 500 },
    );
  }
}
