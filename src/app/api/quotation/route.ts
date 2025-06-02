import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";


const appendToSheet=async(name:string, phone:string)=>{
   const base64Credentials = process.env.GOOGLE_CREDENTIALS_BASE64;

  if (!base64Credentials) {
    throw new Error("Missing GOOGLE_CREDENTIALS_BASE64 environment variable");
  }

  const credentials = JSON.parse(
    Buffer.from(base64Credentials, "base64").toString("utf-8")
  );

  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[name, phone, new Date().toLocaleString()]],
    },
  });
}

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
      to: `${process.env.ADMIN_MAIL}`,
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

    appendToSheet(name,phone)

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quotation API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
