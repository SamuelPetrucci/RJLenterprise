// Simple script to verify email configuration
// Run with: node scripts/check-email-config.js

require('dotenv').config({ path: '.env.local' })

console.log('\n=== RLJ Enterprise Email Configuration Check ===\n')

const requiredVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'SMTP_FROM'
]

const optionalVars = [
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY'
]

let allGood = true

console.log('Required Email Variables:')
requiredVars.forEach(varName => {
  const value = process.env[varName]
  const status = value ? '✅' : '❌'
  const display = value 
    ? (varName.includes('PASSWORD') ? '✅ SET (hidden for security)' : value)
    : '❌ NOT SET'
  
  console.log(`  ${status} ${varName}: ${display}`)
  
  if (!value) allGood = false
})

console.log('\nOptional Variables:')
optionalVars.forEach(varName => {
  const value = process.env[varName]
  const status = value ? '✅' : '⚠️'
  const display = value 
    ? (varName.includes('KEY') ? '✅ SET (hidden for security)' : value)
    : '⚠️ NOT SET'
  
  console.log(`  ${status} ${varName}: ${display}`)
})

console.log('\n' + '='.repeat(50))

if (allGood) {
  console.log('✅ All required email variables are configured!')
  console.log('\nNext steps:')
  console.log('1. Start your dev server: npm run dev')
  console.log('2. Test the email: http://localhost:3000/api/test-email')
  console.log('3. Or submit a contact form: http://localhost:3000/contact')
} else {
  console.log('❌ Missing required email variables!')
  console.log('\nPlease update your .env.local file with the missing values.')
  console.log('See EMAIL_TEST_GUIDE.md for detailed setup instructions.')
}

console.log('='.repeat(50) + '\n')

