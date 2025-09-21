import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Log environment variables (without exposing sensitive data)
console.log('Supabase Configuration:')
console.log('- URL:', supabaseUrl ? 'Set' : 'NOT SET')
console.log('- Anon Key:', supabaseAnonKey ? 'Set' : 'NOT SET')
console.log('- Service Key:', supabaseServiceKey ? 'Set' : 'NOT SET')

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables!')
}

// Client for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Test connection
;(async () => {
  try {
    const { data, error } = await supabaseAdmin
      .from('rlj_contact')
      .select('count')
    
    if (error) {
      console.error('Supabase connection test failed:', error)
    } else {
      console.log('Supabase connection test successful:', data)
    }
  } catch (err: any) {
    console.error('Supabase connection test error:', err)
  }
})()

// Database types
export interface RLJContact {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  interest: string
  message: string
  status: 'new' | 'contacted' | 'in_progress' | 'closed'
  source: string
  form_type: 'contact' | 'partnership'
  created_at: string
  updated_at: string
}

export interface ContactSubmission {
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  interest: string
  message: string
  form_type: 'contact' | 'partnership'
}
