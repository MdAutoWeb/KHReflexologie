import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SMTP_PASS,
  SMTP_USER,
} from "@/lib/contact";
import { validateContactSubmission, type ContactSubmission } from "@/lib/contactSpam";

export const runtime = "nodejs";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createGmailTransport() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactSubmission;
    const { naam, email, bericht } = body;

    const spamCheck = validateContactSubmission(body, request);
    if (!spamCheck.ok) {
      if (spamCheck.silent) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Bericht verzonden! We nemen zo snel mogelijk contact met je op.",
          },
          { status: 200 },
        );
      }

      return NextResponse.json({ error: spamCheck.message }, { status: 429 });
    }

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

    if (!SMTP_PASS || !SMTP_USER) {
      console.error("SMTP_USER of SMTP_PASS is niet ingesteld");
      return NextResponse.json(
        {
          error: `Het contactformulier is nog niet geactiveerd. Mail ons rechtstreeks via ${CONTACT_EMAIL} of bel ${CONTACT_PHONE}.`,
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

    const transporter = createGmailTransport();
    await transporter.sendMail({
      from: `"KH Reflexologie website" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
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
    const message = error instanceof Error ? error.message : String(error);
    console.error("Contact form SMTP error:", message);

    return NextResponse.json(
      {
        error: `Er is een fout opgetreden bij het verzenden. Probeer het later opnieuw of mail rechtstreeks naar ${CONTACT_EMAIL}.`,
      },
      { status: 500 },
    );
  }
}
