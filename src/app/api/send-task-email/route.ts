import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, description } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: ["ambroladzeirakli@gmail.com", "tinatin.gvaramia.1@gmail.com"],
    subject: "შეიქმნა ახალი დავალება",
    text: `სათაური: ${name}\nაღწერა: ${description || "არ არის"}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
