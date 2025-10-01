import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  console.log('=== PARTNERSHIP API ROUTE CALLED ===')
  console.log('Timestamp:', new Date().toISOString())
  
  try {
    const body = await request.json()
    console.log('✅ Request body received:', JSON.stringify(body, null, 2))
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'partnershipType', 'message']
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
      first_name: body.name.trim(),
      last_name: '', // Partnership form doesn't separate first/last name
      email: body.email.trim(),
      phone: body.phone.trim(),
      company: body.company?.trim() || null,
      interest: body.partnershipType.trim(),
      message: body.message.trim(),
      form_type: 'partnership' as const,
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
        { error: 'Failed to submit partnership form', details: error.message },
        { status: 500 }
      )
    }

    console.log('✅ Successfully saved to database! Partnership ID:', data.id)

    // Send email notifications asynchronously (don't wait for completion)
    console.log('⏳ Triggering email notifications...')
    
    // Send emails in background (fire and forget)
    sendPartnershipEmails(body).catch(err => console.error('Background email error:', err))

    console.log('=== PARTNERSHIP FORM SUBMISSION COMPLETE ===')
    return NextResponse.json({
      success: true,
      message: 'Partnership form submitted successfully',
      id: data.id
    })

  } catch (error) {
    console.error('❌ CRITICAL ERROR in partnership API:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Helper function to send partnership form emails
async function sendPartnershipEmails(body: any) {
  console.log('=== SENDING PARTNERSHIP EMAILS ===')
  
  const firstName = body.name.split(' ')[0]
  
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
          <div style="background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🤝 New Partnership Inquiry</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">RLJ Enterprise Website</p>
          </div>
          <div style="padding: 30px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">You have received a new partnership inquiry:</p>
            <div style="background-color: #ffffff; border: 2px solid #d946ef; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700; width: 120px;">👤 NAME</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 600;">${body.name}</td></tr>
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">📧 EMAIL</td><td style="padding: 10px 0;"><a href="mailto:${body.email}" style="color: #c026d3; text-decoration: none; font-size: 16px; font-weight: 500;">${body.email}</a></td></tr>
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">📞 PHONE</td><td style="padding: 10px 0;"><a href="tel:${body.phone}" style="color: #c026d3; text-decoration: none; font-size: 16px; font-weight: 500;">${body.phone}</a></td></tr>
                ${body.company ? `<tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">🏢 COMPANY</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 500;">${body.company}</td></tr>` : ''}
                <tr><td style="padding: 10px 0; color: #374151; font-size: 14px; font-weight: 700;">🤝 TYPE</td><td style="padding: 10px 0; color: #111827; font-size: 16px; font-weight: 500;">${body.partnershipType}</td></tr>
              </table>
            </div>
            <div style="margin: 25px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 700; margin-bottom: 12px;">💬 Partnership Vision</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border: 2px solid #d1d5db;">
                <p style="color: #1f2937; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap; font-weight: 400;">${body.message}</p>
              </div>
            </div>
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${body.email}" style="background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(217, 70, 239, 0.3);">📧 Reply to ${firstName}</a>
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
          <div style="background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">🤝 Welcome, Partner!</h1>
            <p style="color: rgba(255, 255, 255, 0.95); margin: 12px 0 0 0; font-size: 18px; font-weight: 500;">Let's Build Something Amazing Together</p>
          </div>
          <div style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 17px; line-height: 1.8; margin-top: 0;">Dear <strong>${firstName}</strong>,</p>
            <p style="color: #374151; font-size: 16px; line-height: 1.8;">We're truly excited about the possibility of partnering with you! Your partnership inquiry has been received and our team is already reviewing the details.</p>
            <div style="background: linear-gradient(135deg, #fae8ff 0%, #fdf2f8 100%); border-left: 4px solid #d946ef; padding: 25px; border-radius: 10px; margin: 30px 0; box-shadow: 0 2px 4px rgba(217, 70, 239, 0.1);">
              <h3 style="color: #111827; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; text-align: center;">🌟 Our Commitment to You</h3>
              <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0; text-align: center;">A member of our partnership team will reach out within <strong>1-2 business days</strong> to discuss how we can work together to build conscious communities and create lasting impact.</p>
            </div>
            <div style="background-color: #ffffff; border: 2px solid #d946ef; border-radius: 10px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 700; margin: 0 0 15px 0;">📋 Your Partnership Inquiry</h3>
              <div style="margin-bottom: 15px;">
                <p style="color: #374151; font-size: 13px; font-weight: 700; margin: 0 0 5px 0; text-transform: uppercase;">Partnership Type</p>
                <p style="color: #111827; font-size: 16px; margin: 0; font-weight: 600;">${body.partnershipType}</p>
              </div>
              <div>
                <p style="color: #374151; font-size: 13px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase;">Your Vision</p>
                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border: 2px solid #d1d5db;">
                  <p style="color: #1f2937; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${body.message}</p>
                </div>
              </div>
            </div>
            <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); border-radius: 10px; padding: 30px; margin: 30px 0; text-align: center;">
              <h3 style="color: #ffffff; font-size: 20px; font-weight: 600; margin: 0 0 15px 0;">💡 Building Conscious Communities</h3>
              <p style="color: #d1d5db; font-size: 15px; line-height: 1.7; margin: 0;">Together, we'll create opportunities, empower communities, and make a meaningful difference in people's lives.</p>
            </div>
            <div style="background-color: #f9fafb; border: 2px solid #e5e7eb; border-radius: 10px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; text-align: center;">📞 Questions? We're Here!</h3>
              <p style="color: #374151; font-size: 15px; line-height: 1.7; text-align: center; margin: 0 0 20px 0;">For immediate inquiries, feel free to reach out:</p>
              <div style="text-align: center;">
                <a href="tel:+18604977160" style="display: inline-block; background: linear-gradient(135deg, #d946ef 0%, #ec4899 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 5px; box-shadow: 0 4px 6px rgba(217, 70, 239, 0.3);">📞 (860) 497-7160</a>
                <p style="color: #6b7280; font-size: 14px; margin: 10px 0 0 0;">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <p style="color: #374151; font-size: 16px; line-height: 1.8; margin: 30px 0 10px 0; text-align: center;">We look forward to exploring this partnership opportunity with you!</p>
            <p style="color: #1f2937; font-size: 16px; line-height: 1.8; margin: 0; text-align: center;">
              <strong style="color: #111827;">With excitement,</strong><br>
              <strong style="color: #c026d3; font-size: 17px;">The RLJ Enterprise Partnership Team</strong>
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
    subject: 'New Partnership Inquiry - RLJ Enterprise',
    html: adminEmailHtml,
    replyTo: body.email
  })

  await sendEmail({
    to: body.email,
    subject: 'Thank You for Your Partnership Inquiry - RLJ Enterprise',
    html: userEmailHtml
  })

  console.log('✅ Partnership emails sent successfully!')
}