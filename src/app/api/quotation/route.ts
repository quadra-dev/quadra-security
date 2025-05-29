import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: `"Quadra Quotation" <${process.env.GMAIL_USER}>`,
      to: "quadradev04@gmail.com",
      subject: "🔔 New Quotation Request",
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    // // Email to client
    // await transporter.sendMail({
    //   from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
    //   to: `${name} <${"quadradev04@gmail.com"}>`,
    //   subject: "✅ Quotation Request Received",
    //   html: `
    //     <h2>Thank you, ${name}!</h2>
    //     <p>We've received your request and will contact you shortly at ${phone}.</p>
    //     <p>– The Quadra Booking Team</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quotation API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
