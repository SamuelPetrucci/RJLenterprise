'use client'

import { useState } from 'react'
import ContactModal from './ContactModal'

import ScrollAnimation from './ScrollAnimation'

export default function Contact() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <section id="contact" className="py-12 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollAnimation animationType="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Interested in working together? We can't wait to hear from you!
            </p>
            
            {/* Contact Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </ScrollAnimation>


        {/* Contact Modal */}
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </section>
  )
}
