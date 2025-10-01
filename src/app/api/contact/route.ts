import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

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

    // Send email notifications asynchronously (don't wait for completion)
    console.log('⏳ Triggering email notifications...')
    
    // Fire and forget - send emails in background
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/email/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).catch(err => console.error('Background email error:', err))

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