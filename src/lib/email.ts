// Email utility using nodemailer
import nodemailer from 'nodemailer'

export async function sendEmail(options: {
  to: string
  subject: string
  html: string
  replyTo?: string
}) {
  try {
    console.log('📧 Creating transporter with:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passwordSet: !!process.env.SMTP_PASSWORD
    })

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates (for development)
      }
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    }

    console.log('📧 Sending email to:', options.to)
    const info = await transporter.sendMail(mailOptions)
    console.log('✅ Email sent successfully! Message ID:', info.messageId)
    
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('❌ Email sending error:', error)
    throw error
  }
}

