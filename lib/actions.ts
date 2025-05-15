"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export async function sendEmail(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    // Validate the form data
    const result = formSchema.safeParse(formData)

    if (!result.success) {
      return { success: false, error: "Validation failed" }
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

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
