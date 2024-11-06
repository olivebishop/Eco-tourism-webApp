import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL?.trim(),
    pass: process.env.EMAIL_PASS?.trim(),
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL?.trim(),
      to: process.env.RECIPIENT_EMAIL?.trim() || process.env.EMAIL?.trim(),
      subject: `New Contact Form Message from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Message</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="padding: 30px 20px;">
                <h1 style="color: #047857; margin-bottom: 20px; text-align: center; font-size: 24px;">New Contact Form Message</h1>
                <table width="100%" cellpadding="10" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="border-bottom: 1px solid #e5e7eb;">
                      <strong style="color: #047857;">Name:</strong> ${fullName}
                    </td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid #e5e7eb;">
                      <strong style="color: #047857;">Email:</strong> ${email}
                    </td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid #e5e7eb;">
                      <strong style="color: #047857;">Phone:</strong> ${phone || 'Not provided'}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong style="color: #047857;">Message:</strong>
                      <p style="white-space: pre-wrap; margin-top: 10px;">${message}</p>
                    </td>
                  </tr>
                </table>
                <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
                  <p>This message was sent from the contact form on your Mazingira Tours an Travel website.</p>
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}