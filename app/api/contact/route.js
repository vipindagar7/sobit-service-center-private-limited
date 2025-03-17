import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, mobile, message } = await req.json();

        // Step 1: Create Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail", // You can use another service like SMTP, Outlook, etc.
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App password
            },
        });

        // Step 2: Define Email Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "vipindagar.code@gmail.com", // Change this to the email where you want to receive messages
            subject: "New Contact Form Submission",
            html: `
                <h2>New Message from Contact Form</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${mobile}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        // Step 3: Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
