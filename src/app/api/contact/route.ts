import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  console.log('=== CONTACT API ROUTE CALLED ===')
  console.log('Timestamp:', new Date().toISOString())
  
  try {
    const body = await request.json()
    console.log('✅ Request body received:', JSON.stringify(body, null, 2))
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'interest', 'message']
    console.log('⏳ Validating required fields...')
    
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        console.error(`❌ Missing required field: ${field}`)
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    console.log('✅ All required fields validated')

    // Prepare data for database
    const contactData = {
      first_name: body.firstName.trim(),
      last_name: body.lastName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      company: body.company?.trim() || null,
      interest: body.interest.trim(),
      message: body.message.trim(),
      form_type: 'contact' as const,
      source: 'RLJ Enterprise Website'
    }

    console.log('📝 Prepared data for database:', JSON.stringify(contactData, null, 2))

    // Check Supabase connection
    console.log('🔍 Checking Supabase configuration...')
    console.log('  - Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ NOT SET')
    console.log('  - Service Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✅ Set' : '❌ NOT SET')

    // Insert into Supabase
    console.log('⏳ Inserting into Supabase database...')
    const { data, error } = await supabaseAdmin
      .from('rlj_contact')
      .insert([contactData])
      .select()
      .single()

    if (error) {
      console.error('❌ Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit contact form', details: error.message },
        { status: 500 }
      )
    }

    console.log('✅ Successfully saved to database! Contact ID:', data.id)

    // Send email notifications (wait for completion to ensure delivery in serverless)
    console.log('⏳ Sending email notifications...')
    
    try {
      await sendContactEmails(body)
      console.log('✅ Emails sent successfully!')
    } catch (emailError) {
      console.error('⚠️ Email sending failed (but form was saved):', emailError)
      // Continue anyway - form is saved
    }

    console.log('=== CONTACT FORM SUBMISSION COMPLETE ===')
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: data.id
    })

  } catch (error) {
    console.error('❌ CRITICAL ERROR in contact API:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Helper function to send contact form emails
async function sendContactEmails(body: any) {
  console.log('=== SENDING CONTACT EMAILS ===')
  
  // Admin notification email HTML
  const adminEmailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🎯 New Contact Submission</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">RLJ Enterprise Website</p>
          </div>
          <div style="padding: 30px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">You have received a new contact form submission:</p>
            <div style="background-color: #ffffff; border: 2px solid #ec4899; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700; width: 120px;">👤 NAME</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 600;">${body.firstName} ${body.lastName}</td></tr>
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">📧 EMAIL</td><td style="padding: 10px 0;"><a href="mailto:${body.email}" style="color: #db2777; text-decoration: none; font-size: 16px; font-weight: 500;">${body.email}</a></td></tr>
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">📞 PHONE</td><td style="padding: 10px 0;"><a href="tel:${body.phone}" style="color: #db2777; text-decoration: none; font-size: 16px; font-weight: 500;">${body.phone}</a></td></tr>
                ${body.company ? `<tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">🏢 COMPANY</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 500;">${body.company}</td></tr>` : ''}
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">🎯 INTEREST</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 500;">${body.interest}</td></tr>
              </table>
            </div>
            <div style="margin: 25px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 700; margin-bottom: 12px;">💬 Message</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border: 2px solid #d1d5db;">
                <p style="color: #1f2937; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap; font-weight: 400;">${body.message}</p>
              </div>
            </div>
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${body.email}" style="background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(236, 72, 153, 0.3);">📧 Reply to ${body.firstName}</a>
            </div>
            <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e5e7eb;">
              <p style="color: #4b5563; font-size: 14px; margin: 0; font-weight: 600;">⏰ Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })} EST</p>
            </div>
          </div>
          <div style="background-color: #1f2937; padding: 25px 30px; text-align: center;">
            <p style="color: #d1d5db; font-size: 13px; margin: 0; line-height: 1.8;">
              <strong style="color: #ffffff; font-size: 16px;">RLJ Enterprise</strong><br>
              <span style="color: #e5e7eb;">Building Conscious Communities</span><br>
              <span style="color: #d1d5db;">75 Brace Road, West Hartford, CT 06107</span><br>
              <a href="tel:+18604977160" style="color: #f472b6; text-decoration: none; font-weight: 600;">(860) 497-7160</a> | 
              <a href="mailto:partners@rljenterprisect.com" style="color: #f472b6; text-decoration: none; font-weight: 600;">partners@rljenterprisect.com</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `

  // User confirmation email HTML
  const userEmailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">✨ Thank You, ${body.firstName}!</h1>
            <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">We've received your message</p>
          </div>
          <div style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 17px; line-height: 1.8; margin-top: 0;">Dear <strong>${body.firstName}</strong>,</p>
            <p style="color: #374151; font-size: 16px; line-height: 1.8;">Thank you for reaching out to RLJ Enterprise! We've received your message and truly appreciate you taking the time to contact us. Our team is reviewing your inquiry and will get back to you within <strong>1-2 business days</strong>.</p>
            <div style="background-color: #ffffff; border: 2px solid #ec4899; border-radius: 8px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 700; margin: 0 0 15px 0;">📋 Your Submission Summary</h3>
              <div style="margin-bottom: 15px;">
                <p style="color: #374151; font-size: 13px; font-weight: 700; margin: 0 0 5px 0; text-transform: uppercase;">Service Interest</p>
                <p style="color: #111827; font-size: 16px; margin: 0; font-weight: 600;">${body.interest}</p>
              </div>
              <div>
                <p style="color: #374151; font-size: 13px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase;">Your Message</p>
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border: 2px solid #d1d5db;">
                  <p style="color: #1f2937; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${body.message}</p>
                </div>
              </div>
            </div>
            <div style="background-color: #f9fafb; border: 2px solid #e5e7eb; border-radius: 10px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; text-align: center;">📞 Need Immediate Assistance?</h3>
              <p style="color: #374151; font-size: 15px; line-height: 1.7; text-align: center; margin: 0 0 20px 0;">For urgent questions, feel free to contact us directly:</p>
              <div style="text-align: center;">
                <a href="tel:+18604977160" style="display: inline-block; background: linear-gradient(135deg, #ec4899 0%, #d946ef 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 5px; box-shadow: 0 4px 6px rgba(236, 72, 153, 0.3);">📞 (860) 497-7160</a>
                <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 30px 0 10px 0;">We look forward to connecting with you soon!</p>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.8; margin: 0;">
              <strong style="color: #111827;">Best regards,</strong><br>
              <strong style="color: #db2777; font-size: 17px;">The RLJ Enterprise Team</strong>
            </p>
          </div>
          <div style="background-color: #1f2937; padding: 30px; text-align: center;">
            <div style="margin-bottom: 15px;">
              <p style="color: #ffffff; font-size: 18px; font-weight: 700; margin: 0 0 5px 0;">RLJ Enterprise</p>
              <p style="color: #e5e7eb; font-size: 14px; font-style: italic; margin: 0;">Building Conscious Communities</p>
            </div>
            <div style="border-top: 2px solid #374151; padding-top: 15px; margin-top: 15px;">
              <p style="color: #d1d5db; font-size: 13px; margin: 0; line-height: 1.8;">
                📍 75 Brace Road, West Hartford, CT 06107<br>
                📞 <a href="tel:+18604977160" style="color: #f472b6; text-decoration: none; font-weight: 600;">(860) 497-7160</a><br>
                📧 <a href="mailto:partners@rljenterprisect.com" style="color: #f472b6; text-decoration: none; font-weight: 600;">partners@rljenterprisect.com</a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `

  // Send both emails
  await sendEmail({
    to: process.env.SMTP_FROM || 'partners@rljenterprisect.com',
    subject: 'New Contact Form Submission - RLJ Enterprise',
    html: adminEmailHtml,
    replyTo: body.email
  })

  await sendEmail({
    to: body.email,
    subject: 'Thank You for Contacting RLJ Enterprise',
    html: userEmailHtml
  })

  console.log('✅ Contact emails sent successfully!')
}