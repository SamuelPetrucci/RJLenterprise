'use client'

import { useState } from 'react'

export default function TestEmailPage() {
  const [testing, setTesting] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [testEmail, setTestEmail] = useState('partners@rljenterprisect.com')

  const testEmailAPI = async () => {
    setTesting(true)
    setResult(null)
    
    try {
      const response = await fetch(`/api/test-email?to=${encodeURIComponent(testEmail)}`)
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setTesting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">
            📧 Email Configuration Test
          </h1>
          <p className="text-secondary-600 mb-8">
            Test your email configuration to make sure form submissions will send emails correctly.
          </p>

          <div className="space-y-6">
            <div>
              <label htmlFor="testEmail" className="block text-sm font-medium text-secondary-700 mb-2">
                Send Test Email To:
              </label>
              <input
                type="email"
                id="testEmail"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="test@example.com"
              />
            </div>

            <button
              onClick={testEmailAPI}
              disabled={testing}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
            >
              {testing ? '🔄 Sending Test Email...' : '📧 Send Test Email'}
            </button>
          </div>

          {result && (
            <div className={`mt-6 p-6 rounded-lg ${result.success ? 'bg-green-50 border-2 border-green-500' : 'bg-red-50 border-2 border-red-500'}`}>
              <h3 className={`text-xl font-bold mb-4 ${result.success ? 'text-green-800' : 'text-red-800'}`}>
                {result.success ? '✅ Success!' : '❌ Error'}
              </h3>
              
              {result.success ? (
                <div className="space-y-2 text-green-900">
                  <p className="font-semibold">✉️ Test email sent successfully!</p>
                  <p>📬 Sent to: <span className="font-mono bg-green-100 px-2 py-1 rounded">{result.sentTo}</span></p>
                  <p className="mt-4 text-sm">
                    Check the inbox for <strong>{result.sentTo}</strong> and also check the spam folder if you don't see it.
                  </p>
                </div>
              ) : (
                <div className="space-y-2 text-red-900">
                  <p className="font-semibold">Error Details:</p>
                  <pre className="bg-red-100 p-3 rounded overflow-auto text-sm font-mono">
                    {result.error}
                  </pre>
                </div>
              )}

              {result.config && (
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="font-semibold text-sm mb-2">Configuration:</p>
                  <pre className="bg-gray-100 p-3 rounded overflow-auto text-xs font-mono">
                    {JSON.stringify(result.config, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            📋 What This Tests
          </h2>
          <ul className="space-y-3 text-secondary-700">
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Email server connection (SMTP)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Authentication with Gmail App Password</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Email sending functionality</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-2">✓</span>
              <span>Environment variable configuration</span>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> If the test is successful, your contact and partnership forms will also send emails correctly!
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-secondary-900 mb-3">
              Next Steps:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-secondary-700">
              <li>Click "Send Test Email" above</li>
              <li>Check the email inbox (and spam folder)</li>
              <li>If successful, test the actual <a href="/contact" className="text-primary-600 hover:underline font-semibold">contact form</a></li>
              <li>Verify both admin and user confirmation emails are received</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

