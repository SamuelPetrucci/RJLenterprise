import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  console.log('=== CONTACT API ROUTE CALLED ===')
  console.log('Request method:', request.method)
  console.log('Request headers:', Object.fromEntries(request.headers.entries()))
  
  try {
    const body = await request.json()
    console.log('Request body received:', body)
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'interest', 'message']
    console.log('Validating required fields:', requiredFields)
    
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        console.error(`Missing required field: ${field}`, body[field])
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }
    
    console.log('All required fields validated successfully')

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

    console.log('Prepared contact data for Supabase:', contactData)

    // Check Supabase connection
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'NOT SET')
    console.log('Supabase Service Key:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'NOT SET')

    // Insert into Supabase
    console.log('Attempting to insert into Supabase...')
    const { data, error } = await supabaseAdmin
      .from('rlj_contact')
      .insert([contactData])
      .select()
      .single()

    console.log('Supabase response - Data:', data)
    console.log('Supabase response - Error:', error)

    if (error) {
      console.error('Supabase error details:', error)
      return NextResponse.json(
        { error: 'Failed to submit contact form', details: error.message },
        { status: 500 }
      )
    }

    // TODO: Send email notification when SMTP is configured
    // await sendContactNotification(data)

    console.log('Success! Contact form submitted with ID:', data.id)
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: data.id
    })

  } catch (error) {
    console.error('Contact API error:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
