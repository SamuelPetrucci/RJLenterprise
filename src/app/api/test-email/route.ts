import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function GET(request: NextRequest) {
  console.log('=== EMAIL TEST ENDPOINT ===')
  
  // Check environment variables
  const config = {
    SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
    SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
    SMTP_USER: process.env.SMTP_USER || 'NOT SET',
    SMTP_PASSWORD: process.env.SMTP_PASSWORD ? '✅ SET (hidden)' : '❌ NOT SET',
    SMTP_FROM: process.env.SMTP_FROM || 'NOT SET',
  }
  
  console.log('Environment Variables:', config)
  
  try {
    // Send test email
    const testEmail = request.nextUrl.searchParams.get('to') || process.env.SMTP_USER || 'test@example.com'
    
    console.log('Sending test email to:', testEmail)
    
    await sendEmail({
      to: testEmail,
      subject: '🎉 Test Email from RLJ Enterprise',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ec4899;">Email Test Successful! 🎉</h2>
          <p>Congratulations! Your email configuration is working correctly.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Configuration Details:</h3>
            <p><strong>SMTP Host:</strong> ${config.SMTP_HOST}</p>
            <p><strong>SMTP Port:</strong> ${config.SMTP_PORT}</p>
            <p><strong>SMTP User:</strong> ${config.SMTP_USER}</p>
            <p><strong>From Address:</strong> ${config.SMTP_FROM}</p>
          </div>
          
          <p>Your form submissions will now send email notifications to both the company and the users!</p>
          
          <p style="color: #666; font-size: 12px;">
            Test sent at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
          </p>
        </div>
      `
    })
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      sentTo: testEmail,
      config: config
    })
    
  } catch (error) {
    console.error('❌ Email test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      config: config
    }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to } = body
    
    if (!to) {
      return NextResponse.json({
        success: false,
        error: 'Email address required'
      }, { status: 400 })
    }
    
    await sendEmail({
      to: to,
      subject: '🎉 Test Email from RLJ Enterprise',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #ec4899;">Email Test Successful! 🎉</h2>
          <p>This is a test email from the RLJ Enterprise website.</p>
          <p>Your email configuration is working correctly!</p>
          <p style="color: #666; font-size: 12px;">
            Test sent at: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST
          </p>
        </div>
      `
    })
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      sentTo: to
    })
    
  } catch (error) {
    console.error('❌ Email test failed:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

