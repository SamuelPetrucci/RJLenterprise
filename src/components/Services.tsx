import Link from 'next/link'

import ScrollAnimation from './ScrollAnimation'

export default function Services() {
  const coreServices = [
    {
      title: "Real Estate Acquisition",
      summary: "Strategic property identification and acquisition across Connecticut and beyond, including commercial, residential, and mixed-use developments.",
      image: "/propphoto/realestatesear.png.jpg",
      highlights: ["Market Analysis", "Due Diligence", "Portfolio Management"]
    },
    {
      title: "Development & Consulting",
      summary: "End-to-end development services from concept to community, transforming underutilized spaces into vibrant neighborhoods.",
      image: "/propphoto/skyscrapers.jpg.jpg",
      highlights: ["Architectural Design", "Construction Management", "Community Integration"]
    },
    {
      title: "Investment Partnerships",
      summary: "Mission-aligned investment opportunities that create long-term value through strategic property acquisitions and business ventures.",
      image: "/propphoto/partnership.webp",
      highlights: ["Strategic Planning", "Risk Management", "Return Optimization"]
    },
    {
      title: "Property Management",
      summary: "Professional property and asset management services ensuring optimal performance, tenant satisfaction, and long-term value creation.",
      image: "/propphoto/assetMngmnt.webp",
      highlights: ["Tenant Relations", "Maintenance Management", "Financial Reporting"]
    }
  ]


  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Services Header */}
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              "Excellence in real estate, restoration, and impact."
            </p>
          </div>
        </ScrollAnimation>

        {/* Core Services Grid */}
        <ScrollAnimation animationType="fade-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover"
              >
                <div className="mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed mb-6 text-center">
                  {service.summary}
                </p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {service.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/services"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>


        {/* Additional Services Preview */}
        <ScrollAnimation animationType="fade-up" delay={600}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Plus Additional Services
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto mb-6">
              Business incubation, nonprofit partnerships, executive coaching, and more specialized services.
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Additional Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollAnimation>

        {/* Conscious Community Showcase */}
        <ScrollAnimation animationType="fade-up" delay={800}>
          <div className="mb-12">
            <div className="relative group">
              <img 
                src="/propphoto/consious comunity.webp" 
                alt="Conscious Community Development" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Building Conscious Communities
                  </h3>
                  <p className="text-xl text-gray-200 max-w-3xl">
                    Where people, neighborhoods, and ecosystems thrive—not just survive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animationType="fade-up" delay={1000}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Community?
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Whether you're planning a site, activating capital, or seeking a trusted operator — 
                we're ready to build with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Services
                </Link>
                <a
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
