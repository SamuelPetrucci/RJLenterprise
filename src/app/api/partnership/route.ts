import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'partnershipType', 'message']
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

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

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('rlj_contact')
      .insert([contactData])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit partnership form' },
        { status: 500 }
      )
    }

    // TODO: Send email notification when SMTP is configured
    // await sendPartnershipNotification(data)

    return NextResponse.json({
      success: true,
      message: 'Partnership form submitted successfully',
      id: data.id
    })

  } catch (error) {
    console.error('Partnership API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
