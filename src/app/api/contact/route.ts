import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import serviceAccount from "@/lib/google-service-account.json";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();

    const savedContact = await Contact.create(body); // Save to MongoDB

    // --- Send email ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // --- Send email to admin ---
    const adminMailOptions = {
      from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: body.email,
      subject: `🔔 New Service Request from ${body.name}`,
      html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Mobile:</strong> ${body.mobile}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Service:</strong> ${body.service}</p>
    <p><strong>Address:</strong> ${body.address}</p>
    <p><strong>Pincode:</strong> ${body.pincode}</p>
    <p><strong>Date:</strong> ${body.date}</p>
    <p><strong>Time Slot:</strong> ${body.timeSlot}</p>
  `,
    };

    // --- Send email to client ---
    const clientMailOptions = {
      from: `"Quadra Booking" <${process.env.GMAIL_USER}>`,
      to: body.email,
      subject: "✅ Your Service Request Was Received",
      html: `
    <h2>Thank you, ${body.name}!</h2>
    <p>We've received your service request and our team will get in touch with you within 24 hours.</p>
    <p>Here's a summary of your request:</p>
    <ul>
      <li><strong>Service:</strong> ${body.service}</li>
      <li><strong>Date:</strong> ${body.date}</li>
      <li><strong>Time Slot:</strong> ${body.timeSlot}</li>
      <li><strong>Address:</strong> ${body.address}</li>
    </ul>
    <p>Need to reach us sooner? Just reply to this email.</p>
    <p>– The Quadra Booking Team</p>
  `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(clientMailOptions);

    // --- Google Sheets integration ---
    const auth = new google.auth.JWT(
      serviceAccount.client_email,
      undefined,
      serviceAccount.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID!; // Place your Sheet ID in .env
    const values = [
      [
        body.name,
        body.mobile,
        body.email,
        body.service,
        body.address,
        body.pincode,
        body.date,
        body.timeSlot,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2", // Assuming headers in row 1
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json({
      success: true,
      message: "Contact saved, email sent, and logged to Google Sheet!",
    });
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process contact form." },
      { status: 500 }
    );
  }
}
