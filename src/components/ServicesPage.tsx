import Link from 'next/link'
import ScrollAnimation from './ScrollAnimation'

export default function ServicesPage() {
  const featuredServices = [
    {
      title: "Commercial & Residential Real Estate Acquisition",
      description: "We identify, acquire, and manage high-potential real estate assets across Connecticut and beyond, including office spaces, mixed-use buildings, and multifamily housing.",
      details: [
        "Market analysis and property identification",
        "Due diligence and risk assessment", 
        "Acquisition strategy and negotiation",
        "Asset management and optimization",
        "Portfolio diversification planning"
      ],
      image: "/propphoto/realestatesear.png.jpg"
    },
    {
      title: "Real Estate Development & Consulting",
      description: "From concept to community, we work with architects, civil engineers, and planners to transform underutilized spaces into vibrant, regenerative neighborhoods.",
      details: [
        "Site analysis and feasibility studies",
        "Architectural design coordination",
        "Permitting and regulatory compliance",
        "Construction management oversight",
        "Community integration planning"
      ],
      image: "/propphoto/skyscrapers.jpg.jpg"
    },
    {
      title: "Investment Partnerships",
      description: "We offer mission-aligned investors the opportunity to join us in creating long-term value through strategic property acquisitions, business ventures, and development funds.",
      details: [
        "Investment opportunity evaluation",
        "Partnership structure design",
        "Risk management strategies",
        "Return optimization planning",
        "Exit strategy development"
      ],
      image: "/propphoto/partnership.webp"
    },
    {
      title: "Business Venture Development",
      description: "We incubate and scale culturally rooted and socially impactful businesses—like Tooth Bear-y and wellness brands—providing capital, strategy, and leadership.",
      details: [
        "Business plan development",
        "Capital raising and funding",
        "Strategic planning and execution",
        "Brand development and marketing",
        "Operational scaling support"
      ],
      image: "/propphoto/stratigic planning(chess).avif"
    },
    {
      title: "Property & Asset Management",
      description: "Through RLJ Property Management, we ensure our assets are maintained with excellence—supporting both tenant wellbeing and investor returns.",
      details: [
        "Tenant relations and retention",
        "Property maintenance and repairs",
        "Financial reporting and analysis",
        "Lease management and optimization",
        "Compliance and risk management"
      ],
      image: "/propphoto/assetMngmnt.webp"
    },
    {
      title: "Nonprofit & Community Anchoring",
      description: "RLJ builds ecosystems by investing in and housing purpose-driven nonprofits such as Abbah, House of Changes, and Changes Compost—fostering holistic community care.",
      details: [
        "Nonprofit partnership development",
        "Community impact assessment",
        "Program integration planning",
        "Resource coordination and support",
        "Long-term sustainability planning"
      ],
      image: "/propphoto/communitynculture.webp"
    }
  ]

  const otherServices = [
    {
      title: "Strategic Partnerships & Deal Structuring",
      description: "RLJ helps organizations, municipalities, and mission-aligned developers structure deals that align financial success with social good. From public-private partnerships to nonprofit collaborations, we bring precision and creativity to every table.",
      benefits: [
        "Custom deal structures tailored to your needs",
        "Public-private partnership facilitation",
        "Nonprofit collaboration frameworks",
        "Financial modeling and analysis",
        "Risk mitigation strategies"
      ]
    },
    {
      title: "Business Incubation & Coaching",
      description: "We support Black and Brown entrepreneurs through mentorship, capital access, brand incubation, and strategic consulting — helping launch and scale community-rooted businesses like Tooth Bear-y and wellness ventures.",
      benefits: [
        "One-on-one mentorship and guidance",
        "Access to capital and funding networks",
        "Brand development and positioning",
        "Strategic business planning",
        "Market entry and scaling support"
      ]
    },
    {
      title: "Contractor & Vendor Coordination",
      description: "We coordinate licensed professionals — including architects, engineers, and general contractors — to ensure high-quality execution on every RLJ project. Our trusted network operates with integrity and transparency.",
      benefits: [
        "Vetted professional network",
        "Project coordination and management",
        "Quality assurance and oversight",
        "Cost optimization strategies",
        "Timeline and milestone tracking"
      ]
    },
    {
      title: "Workforce Development Integration",
      description: "In partnership with House of Changes and other nonprofits, RLJ integrates workforce housing and job training into our real estate projects — closing the gap between housing access and economic mobility.",
      benefits: [
        "Workforce housing development",
        "Job training program integration",
        "Community skill development",
        "Economic mobility initiatives",
        "Long-term resident support"
      ]
    },
    {
      title: "Grant Strategy & Government Relations",
      description: "Through our work with nonprofits and local agencies, we help communities tap into grant funding, municipal partnerships, and local/state economic tools to support housing and commercial development.",
      benefits: [
        "Grant research and application support",
        "Municipal partnership development",
        "Government funding optimization",
        "Compliance and reporting assistance",
        "Strategic advocacy and lobbying"
      ]
    },
    {
      title: "Executive & Leadership Coaching",
      description: "Led by Jah and team, we offer mindset development, strategic clarity sessions, and faith-based executive coaching for business leaders and emerging changemakers.",
      benefits: [
        "Personalized coaching sessions",
        "Strategic clarity and vision development",
        "Faith-based leadership principles",
        "Mindset transformation programs",
        "Goal setting and achievement planning"
      ]
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animationType="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
              Our Services
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Excellence in real estate, restoration, and impact. We offer comprehensive 
              solutions for building conscious communities where people thrive.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured-services"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Featured Services
              </Link>
              <Link
                href="#other-services"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Additional Services
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Services */}
      <section id="featured-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our core offerings that drive community transformation and sustainable growth.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <ScrollAnimation key={index} animationType="fade-up" delay={index * 200}>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="mb-6">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-48 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                    What We Provide:
                  </h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section id="other-services" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                "We don't just offer services. We offer transformation."
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherServices.map((service, index) => (
              <ScrollAnimation key={index} animationType="fade-up" delay={index * 150}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-secondary-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animationType="fade-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Community?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={200}>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Whether you're planning a site, activating capital, or seeking a trusted operator — 
              we're ready to build with you.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
