import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  console.log('=== TESTING SUPABASE CONNECTION ===')
  
  try {
    // Test 1: Check environment variables
    console.log('Environment variables:')
    console.log('- NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'NOT SET')
    console.log('- SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Set' : 'NOT SET')
    
    // Test 2: Try to connect to Supabase
    console.log('Testing Supabase connection...')
    
    // Test 3: Check if table exists
    const { data: tableData, error: tableError } = await supabaseAdmin
      .from('rlj_contact')
      .select('*')
      .limit(1)
    
    console.log('Table test - Data:', tableData)
    console.log('Table test - Error:', tableError)
    
    // Test 4: Try a simple insert (then delete it)
    const testData = {
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      phone: '555-0123',
      interest: 'Test Interest',
      message: 'This is a test submission',
      form_type: 'contact' as const,
      source: 'API Test'
    }
    
    console.log('Testing insert with data:', testData)
    
    const { data: insertData, error: insertError } = await supabaseAdmin
      .from('rlj_contact')
      .insert([testData])
      .select()
      .single()
    
    console.log('Insert test - Data:', insertData)
    console.log('Insert test - Error:', insertError)
    
    // Clean up test data
    if (insertData?.id) {
      const { error: deleteError } = await supabaseAdmin
        .from('rlj_contact')
        .delete()
        .eq('id', insertData.id)
      
      console.log('Delete test - Error:', deleteError)
    }
    
    return NextResponse.json({
      success: true,
      message: 'Supabase connection test completed',
      results: {
        envVars: {
          urlSet: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          serviceKeySet: !!process.env.SUPABASE_SERVICE_ROLE_KEY
        },
        tableTest: {
          success: !tableError,
          error: tableError?.message
        },
        insertTest: {
          success: !insertError,
          error: insertError?.message,
          insertedId: insertData?.id
        }
      }
    })
    
  } catch (error) {
    console.error('Supabase test error:', error)
    return NextResponse.json({
      success: false,
      error: 'Supabase connection test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
