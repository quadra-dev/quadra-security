import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

// Helper function for sending email (called in background)
async function sendEmail({
  name,
  phone,
  service,
  area,
}: Record<string, string>) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || "quadradev04@gmail.com",
      subject: "New Site Visit Booking",
      text: `New Booking:\nName: ${name}\nPhone: ${phone}\nService: ${service}\nArea: ${area}`,
    };

    await transporter.sendMail(adminMailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const {
    name = "Not specified",
    phone = "Not specified",
    service = "Not specified",
    area = "Not specified",
    email = "Not specified",
    message = "Not specified",
  } = body;

  // Validate phone number
  const phoneRegex = /^\+?[0-9\s\-]{9,}$/;
  if (!phoneRegex.test(phone)) {
    return NextResponse.json(
      { success: false, error: "Invalid phone number" },
      { status: 400 }
    );
  }

  // 1. Append to Google Sheet
  try {
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
        values: [
          [
            name,
            phone,
            service,
            area,
            email,
            message,
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    // Fire and forget email
    // possibly env variable errors . For now removing this functionaity
    // sendEmail({ name, phone, service, area });

    return NextResponse.json({
      success: true,
      message: "Submitted successfully",
    });
  } catch (error) {
    console.error("Sheet error:", error);
    return NextResponse.json(
      { success: false, error: "Sheet append failed" },
      { status: 500 }
    );
  }
}
