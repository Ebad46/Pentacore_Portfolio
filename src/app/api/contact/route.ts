import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, phone, service, message } = await request.json();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured. Add it to your environment." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pentacoresolutions6@gmail.com",
      subject: `New contact request from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Request submitted successfully." });
  } catch (error) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: "Failed to send message via Resend.", details: (error as Error).message },
      { status: 500 }
    );
  }
}
