import Navigation from '@/components/Navigation'
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us - RLJ Enterprise',
  description: 'Get in touch with RLJ Enterprise for real estate, investment, and community development partnerships.',
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactPage />
      <Footer />
    </main>
  )
}
