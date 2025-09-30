import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-28 lg:pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8">
              RLJ Enterprise Privacy Policy
            </h1>
            
            <div className="text-sm text-gray-600 mb-8">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Introduction</h2>
              <p className="text-secondary-600 leading-relaxed">
                At RLJ Enterprise, we are committed to protecting your privacy. This policy explains how we collect, use, and protect the information we gather from our users, particularly as it relates to our SMS messaging campaigns and compliance with The Campaign Registry (TCR) requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Information We Collect</h2>
              <p className="text-secondary-600 leading-relaxed mb-4">
                When you engage with us via our website or other online platforms, we may collect:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Your phone number</li>
                <li>Your name</li>
                <li>The content of your messages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">How We Use Your Information</h2>
              <p className="text-secondary-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                <li>Send you messages and alerts that you have opted into, such as promotional offers, appointment reminders, and order updates</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our services and website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">SMS Data Sharing</h2>
              <p className="text-secondary-600 leading-relaxed mb-4">
                We do not sell, share, or trade your phone number or SMS consent data with third parties for marketing or promotional purposes under any circumstances.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                We may share your data with trusted third-party service providers (such as our SMS platform provider) only as necessary to operate our business and fulfill the services you have requested. These providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Opt-Out Instructions</h2>
              <p className="text-secondary-600 leading-relaxed">
                You may opt out of receiving SMS messages from us at any time. To do so, reply STOP to any message you receive. You will then receive one final message confirming your opt-out.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Data Security</h2>
              <p className="text-secondary-600 leading-relaxed">
                We implement a variety of security measures to protect your personal information. Our website is secured with HTTPS encryption, and we employ industry-standard security practices to prevent unauthorized access, disclosure, or destruction of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Your Consent</h2>
              <p className="text-secondary-600 leading-relaxed">
                By providing your phone number and opting into SMS messages, you consent to our collection and use of your information as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Changes to This Policy</h2>
              <p className="text-secondary-600 leading-relaxed">
                We may update this privacy policy from time to time. Updates will be posted on this page, and the "Last Updated" date will be revised accordingly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Contact Us</h2>
              <p className="text-secondary-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">RLJ Enterprise</h3>
                <div className="space-y-2 text-secondary-600">
                  <p><strong>📧 Email:</strong> <a href="mailto:partners@rljenterprisect.com" className="text-primary-600 hover:text-primary-700">partners@rljenterprisect.com</a></p>
                  <p><strong>📞 Phone:</strong> <a href="tel:+18604977160" className="text-primary-600 hover:text-primary-700">(860) 497-7160</a></p>
                  <p><strong>🏢 Address:</strong> 75 Brace Road, West Hartford, CT 06107</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
