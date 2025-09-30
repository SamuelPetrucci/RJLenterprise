'use client'

import { useState } from 'react'
import Link from 'next/link'
import PartnerModal from './PartnerModal'

export default function Hero() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false)
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 lg:pt-32">
      {/* Background video with gradient overlay */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white/50 to-primary-100/60"></div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-float-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary-300 rounded-full animate-float-particle-1 opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-400 rounded-full animate-float-particle-2 opacity-15"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-primary-500 rounded-full animate-float-particle-3 opacity-25"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary-300 rounded-full animate-float-particle-4 opacity-18"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary-400 rounded-full animate-float-particle-5 opacity-22"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary-500 rounded-full animate-float-particle-6 opacity-16"></div>
        <div className="absolute top-3/4 right-1/2 w-1 h-1 bg-primary-300 rounded-full animate-float-particle-7 opacity-20"></div>
        <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-primary-400 rounded-full animate-float-particle-8 opacity-24"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
            <span className="animate-fade-in-up">Building{' '}</span>
            <span className="gradient-text animate-fade-in-up animation-delay-200">Conscious Communities</span>{' '}
            <span className="animate-fade-in-up animation-delay-400">Where People Thrive</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Excellence in real estate, restoration, and impact. We develop and invest in 
            real estate, businesses, and infrastructure that prioritize well-being, equity, 
            and long-term sustainability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-800">
            <Link
              href="#services"
              className="bg-primary-600 hover:bg-primary-700 text-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-gentle"
            >
              Explore Our Services
            </Link>
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Partner With Us
            </button>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">🏢</div>
              <div className="text-black font-bold">Real Estate Excellence</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">🤝</div>
              <div className="text-black font-bold">Strategic Partnerships</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary-600 mb-2">🌱</div>
              <div className="text-black font-bold">Community Growth</div>
            </div>
          </div>
        </div>
      </div>



      {/* Partner Modal */}
      <PartnerModal 
        isOpen={isPartnerModalOpen} 
        onClose={() => setIsPartnerModalOpen(false)} 
      />
    </section>
  )
}
