// Email utility using nodemailer
import nodemailer from 'nodemailer'

export async function sendEmail(options: {
  to: string
  subject: string
  html: string
  replyTo?: string
}) {
  try {
    // Get and trim credentials to avoid whitespace issues
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPassword = process.env.SMTP_PASSWORD?.trim()
    const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT?.trim() || '587')

    console.log('📧 Creating transporter with:', {
      host: smtpHost,
      port: smtpPort,
      user: smtpUser,
      passwordLength: smtpPassword?.length || 0,
      passwordSet: !!smtpPassword
    })

    // Verify we have credentials
    if (!smtpUser || !smtpPassword) {
      throw new Error('SMTP_USER or SMTP_PASSWORD environment variables are not set')
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // Use TLS (STARTTLS for port 587)
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        rejectUnauthorized: false // Allow self-signed certificates (for development)
      },
      // Add debug logging
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    })

    // Verify connection before sending
    console.log('🔍 Verifying SMTP connection...')
    await transporter.verify()
    console.log('✅ SMTP connection verified successfully!')

    const mailOptions = {
      from: process.env.SMTP_FROM?.trim() || smtpUser,
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
    
    // Provide more specific error information
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('535')) {
        console.error('🔐 Authentication failed. Possible causes:')
        console.error('  1. App Password may have been revoked in Google Account settings')
        console.error('  2. 2FA was disabled/re-enabled (invalidates all App Passwords)')
        console.error('  3. Gmail temporarily blocked due to too many failed attempts')
        console.error('  4. Check: https://myaccount.google.com/apppasswords')
      }
    }
    
    throw error
  }
}

