'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale'
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-left':
        return 'scroll-animate-left'
      case 'fade-right':
        return 'scroll-animate-right'
      case 'scale':
        return 'scroll-animate-scale'
      default:
        return 'scroll-animate'
    }
  }

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'animate-in' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
