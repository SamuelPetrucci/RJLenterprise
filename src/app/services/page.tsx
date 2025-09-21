import Navigation from '@/components/Navigation'
import ServicesPage from '@/components/ServicesPage'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services - RLJ Enterprise',
  description: 'Explore our comprehensive real estate, investment, and community development services.',
}

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesPage />
      <Footer />
    </main>
  )
}
