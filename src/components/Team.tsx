'use client'

import { useState, useEffect } from 'react'

/** Seconds each team member stays visible before auto-advance */
const TEAM_ROTATION_SECONDS = 30

export default function Team() {
  const [currentMember, setCurrentMember] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(TEAM_ROTATION_SECONDS)

  const teamMembers = [
    {
      name: "Razul Wallace",
      title: "Founder & Managing Member | Co-Founder",
      initials: "RW",
      headshot: "/headshots/razul.png",
      bio: "Razul is a Brooklyn-born entrepreneur and real estate investor based in Connecticut, with over 20 years of experience in real estate investing and acquisition. As Founder and Managing Member of RLJ Enterprise, he oversees a growing rental portfolio, development projects, and investment strategy — with a focus on creating ownership and equity through conscious, community-centered development.\n\nHe is also the driving force behind House of Changes (HOC), a community organization dedicated to expanding access to stable, quality housing and creating pathways to long-term stability for the people and neighborhoods it serves.\n\nRazul brings operational depth, deal structuring expertise, and mission clarity to every project — building enterprises that generate wealth while creating meaningful opportunity for the communities he serves.",
      expertise: ["Investment & Acquisition", "Community-Centered Development", "House of Changes (HOC)", "Operational Leadership"],
      education: "B.A. Economics, University of Connecticut"
    },
    {
      name: "Latisha Douglas", 
      title: "President | Co-Founder",
      initials: "LD",
      headshot: "/headshots/latisha.png",
      bio: "A seasoned real estate investor with 20 years of experience acquiring and repositioning properties across multiple states. As President, Latisha leverages her extensive background in data analytics and technology to drive commercial property acquisitions and ground-up developments. She's also Vice President of CMWP Foundation, supporting Black and brown entrepreneurs.",
      expertise: ["Real Estate Development", "Data Analytics", "Commercial Acquisitions", "Nonprofit Leadership"],
      education: "MBA Technology, M.S. Data Analytics, UConn"
    },
    {
      name: "Javil 'Jah' John",
      title: "Chief Relationship Architect | Co-Founder",
      initials: "JJ", 
      headshot: "/headshots/jah.png",
      bio: "A visionary leader and community builder with 20+ years in sales management and nonprofit leadership. Jah leads with faith, love, and precision, bridging economic development with community restoration. He's the founder of Abbah: Fathering for Good, a nonprofit committed to ending fatherlessness through advocacy and healing-centered engagement.",
      expertise: ["Strategic Partnerships", "Community Building", "Nonprofit Leadership", "Relationship Strategy"],
      education: "Extensive Leadership & Community Development"
    },
    {
      name: "Theresa Palma Gil",
      title: "Admin & Execution Partner",
      initials: "TP",
      headshot: "/headshots/theresa.png",
      bio: "Theresa ensures smooth operations and execution across all RLJ initiatives. Her organizational skills and attention to detail support the team in delivering exceptional results on every project, from initial planning through successful completion.",
      expertise: ["Administrative Management", "Project Execution", "Process Optimization", "Team Coordination"],
      education: "Bachelor's in Business Administration, Project Management Certified"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentMember((prev) => (prev + 1) % teamMembers.length)
        setIsTransitioning(false)
        setTimeRemaining(TEAM_ROTATION_SECONDS)
      }, 500) // Brief loading state before transition
    }, TEAM_ROTATION_SECONDS * 1000)

    return () => clearInterval(interval)
  }, [])

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          return TEAM_ROTATION_SECONDS
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const nextMember = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentMember((prev) => (prev + 1) % teamMembers.length)
      setIsTransitioning(false)
      setTimeRemaining(TEAM_ROTATION_SECONDS)
    }, 500)
  }

  const prevMember = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
      setIsTransitioning(false)
      setTimeRemaining(TEAM_ROTATION_SECONDS)
    }, 500)
  }

  const goToMember = (index: number) => {
    if (index === currentMember || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentMember(index)
      setIsTransitioning(false)
      setTimeRemaining(TEAM_ROTATION_SECONDS)
    }, 500)
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Four leaders united by a shared commitment to community transformation, 
            economic empowerment, and sustainable development.
          </p>
        </div>

        {/* Team Member Display */}
        <div className="max-w-6xl mx-auto">
          

              {/* Main Team Member Card */}
              <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 transition-all duration-500 ${
                isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}>
                {isTransitioning && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 rounded-3xl">
                    <div className="flex flex-col items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mb-2"></div>
                      <p className="text-sm text-gray-600">Loading next team member...</p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
              
              {/* Profile Section */}
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-12 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white">
                  <img 
                    src={teamMembers[currentMember].headshot} 
                    alt={teamMembers[currentMember].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-primary-600 rounded-full flex items-center justify-center hidden">
                    <span className="text-4xl font-bold text-white">
                      {teamMembers[currentMember].initials}
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                  {teamMembers[currentMember].name}
                </h3>
                <p className="text-xl text-primary-700 font-semibold mb-4">
                  {teamMembers[currentMember].title}
                </p>
                <div className="text-center">
                  <div className="text-sm text-secondary-600">
                    {teamMembers[currentMember].education}
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="p-12">
                <div className="mb-8 space-y-4">
                  {teamMembers[currentMember].bio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-secondary-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Expertise Tags */}
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers[currentMember].expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button
              onClick={prevMember}
              disabled={isTransitioning}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                isTransitioning 
                  ? 'bg-gray-100 cursor-not-allowed' 
                  : 'bg-white hover:bg-primary-50 hover:scale-110'
              }`}
            >
              {isTransitioning ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
              ) : (
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              )}
            </button>

            {/* Circular Progress Indicator */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                {/* Background circle */}
                <path
                  className="stroke-gray-200"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Progress circle */}
                <path
                  className="stroke-primary-600 transition-all duration-1000 ease-linear"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${((TEAM_ROTATION_SECONDS - timeRemaining) / TEAM_ROTATION_SECONDS) * 100}, 100`}
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary-600">
                  {currentMember + 1}
                </span>
              </div>
            </div>

            <button
              onClick={nextMember}
              disabled={isTransitioning}
              className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 ${
                isTransitioning 
                  ? 'bg-gray-100 cursor-not-allowed' 
                  : 'bg-white hover:bg-primary-50 hover:scale-110'
              }`}
            >
              {isTransitioning ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
              ) : (
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToMember(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentMember 
                    ? 'bg-primary-600 w-8' 
                    : isTransitioning
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Team Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Our Leadership Philosophy
            </h3>
            <p className="text-lg text-secondary-600 leading-relaxed max-w-4xl mx-auto">
              Our diverse team of four leaders combines deep experience in finance, technology, relationship building,
              and execution excellence. Together, we deliver projects with integrity, precision, 
              and long-term vision. We are building more than buildings—we are building pathways to equity, prosperity, and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
