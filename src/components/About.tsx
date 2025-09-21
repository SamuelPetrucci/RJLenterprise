import ScrollAnimation from './ScrollAnimation'

export default function About() {
  const values = [
    {
      title: "Faith & Integrity",
      description: "We seek divine alignment in every decision.",
      icon: "🙏"
    },
    {
      title: "Precision & Excellence", 
      description: "We build with intention, never compromise.",
      icon: "⚡"
    },
    {
      title: "Restoration & Justice",
      description: "We prioritize underserved communities.",
      icon: "⚖️"
    },
    {
      title: "Community & Culture",
      description: "We honor the people and places we serve.",
      icon: "🌍"
    }
  ]

  const coreValues = [
    "Faith", "Alignment", "Change", "Precision", "Restoration"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Overview */}
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About Our Company
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-secondary-600 mb-6 leading-relaxed">
                RLJ Enterprise is a mission-driven real estate and investment firm committed to 
                building conscious communities where people, neighborhoods, and ecosystems thrive—not just survive.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We invest in and develop real estate, businesses, and infrastructure that prioritize 
                well-being, equity, and long-term sustainability.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Who We Are */}
        <ScrollAnimation animationType="scale" delay={200}>
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-secondary-900 mb-6 text-center">
                Who We Are
              </h3>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                RLJ Enterprise is a visionary real estate and investment company founded by 
                <span className="font-semibold text-primary-600"> Razul Wallace, Latisha Douglas, and Jah John</span>—three 
                leaders united by a shared commitment to community transformation, economic empowerment, and sustainable development.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                We specialize in developing and investing in real estate, businesses, and infrastructure that foster 
                conscious communities—places where people are not only housed but truly seen, respected, valued, and protected. 
                Rooted in cultural awareness and financial strategy, our work centers on creating environments where 
                well-being, innovation, and legacy thrive.
              </p>
              
              {/* Founder Photos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="relative group">
                  <img 
                    src="/propphoto/orgin(founder photos 1).webp" 
                    alt="RLJ Enterprise Founders" 
                    className="w-full h-64 object-contain rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-gray-50"
                  />
                </div>
                <div className="relative group">
                  <img 
                    src="/propphoto/orgin(founder photos 2).webp" 
                    alt="RLJ Enterprise Leadership" 
                    className="w-full h-64 object-contain rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-gray-50"
                  />
                </div>
                <div className="relative group">
                  <img 
                    src="/propphoto/orgin(founder photos 3).webp" 
                    alt="RLJ Enterprise Partnership" 
                    className="w-full h-64 object-contain rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Our Origin Story */}
        <ScrollAnimation animationType="fade-up" delay={400}>
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Our Origin Story
                </h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  RLJ Enterprise was born from deep friendship, trust, and the shared belief that 
                  Black and Brown communities deserve better — better housing, better opportunity, and better futures.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  The initials RLJ represent not just our names — Razul, Latisha, and Jah — but a divine alignment of purpose. 
                  Together, we bring decades of experience in finance, real estate, data strategy, and community development.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/propphoto/faith.avif.avif" 
                  alt="Faith and community building" 
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-end">
                  <div className="p-8 text-white w-full">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                      <h4 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">Our Mission</h4>
                      <p className="text-white text-lg leading-relaxed drop-shadow-md font-medium">
                        Building conscious communities through faith, alignment, and strategic development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Our Approach */}
        <ScrollAnimation animationType="fade-up" delay={500}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Approach
              </h3>
              <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
                Our approach is rooted in clarity, alignment, and integrity. Every decision we make is guided by 
                sound information, community needs, and a shared vision for inclusive, regenerative growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <img 
                  src="/propphoto/faith.avif.avif" 
                  alt="Faith & Integrity" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  Faith & Integrity
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  We seek divine alignment in every decision.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <img 
                  src="/propphoto/stratigic planning(chess).avif" 
                  alt="Precision & Excellence" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  Precision & Excellence
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  We build with intention, never compromise.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <img 
                  src="/propphoto/restorationnjustice.webp" 
                  alt="Restoration & Justice" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  Restoration & Justice
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  We prioritize underserved communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                <img 
                  src="/propphoto/communitynculture.webp" 
                  alt="Community & Culture" 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  Community & Culture
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  We honor the people and places we serve.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>


        {/* Why Partner With RLJ */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-secondary-900 mb-6 text-center">
            Why Partner With RLJ?
          </h3>
          <p className="text-lg text-secondary-600 mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            Partnering with RLJ means aligning with a company that is deeply committed to purpose-driven 
            development and transformational impact. We don't just build properties—we cultivate ecosystems 
            where people, culture, and commerce flourish together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-secondary-600">Visionary leadership with real-world experience</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-secondary-600">Transparent collaboration rooted in trust and shared values</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-secondary-600">Creative, data-informed solutions that uplift communities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-secondary-600">Commitment to conscious growth—economically, socially, and environmentally</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-primary-600">
              Join us in shaping the future of neighborhoods that thrive with integrity, intention, and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
