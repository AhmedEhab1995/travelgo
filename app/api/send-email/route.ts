import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export async function POST(request: Request) {
  try {
    console.log("USER:", process.env.EMAIL_USER);
    console.log("PASS LENGTH:", process.env.EMAIL_PASSWORD?.length); // should be 16

    // Parse the request body
    const body = await request.json()

    // Validate the form data
    const result = formSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Validation failed", details: result.error.format() }, { status: 400 })
    }

    const { name, email, message } = result.data

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com", // Use environment variable
        pass: process.env.EMAIL_PASSWORD || "your-app-password", // Use environment variable
      },
    })


    await transporter.verify()
  .then(() => {
    console.log("✅ Server is ready to send emails")
  })
  .catch((err) => {
    console.error("❌ Transporter verification failed:", err)
    throw err // Make sure to rethrow to trigger the catch block
  })
  
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: "ahmed.ehab.younes@gmail.com", // Your email address
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error sending email:", error, error?.message)
    return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 })
  }
}
