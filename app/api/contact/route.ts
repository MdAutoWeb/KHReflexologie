import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { naam, email, bericht } = body;

    // Validate required fields
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Check API key
    if (!resend) {
      console.error('RESEND_API_KEY is niet ingesteld in .env.local');
      return NextResponse.json(
        { error: 'Emailservice is niet geconfigureerd. Contacteer de beheerder (RESEND_API_KEY ontbreekt).' },
        { status: 500 }
      );
    }

    // Create email content
    const subject = `Nieuw contactformulier bericht van ${naam}`;
    const emailBody = `
Nieuw bericht ontvangen via het contactformulier:

Naam: ${naam}
Email: ${email}

Bericht:
${bericht}

---
Dit bericht is verzonden via het contactformulier op de website.
    `.trim();

    // Probeer echt te mailen met Resend
    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'kimberley.hwong@outlook.be',
        subject,
        text: emailBody,
        replyTo: email,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Fout bij versturen van email via Resend. Controleer je Resend-configuratie.' },
          { status: 500 }
        );
      } else {
        console.log('Resend email sent, id:', data?.id);
      }
      return NextResponse.json(
        {
          success: true,
          message: 'Bericht verzonden! We nemen zo snel mogelijk contact met je op.',
          emailId: data?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van de email. Probeer het later opnieuw.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
