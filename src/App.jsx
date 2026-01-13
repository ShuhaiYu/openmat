import { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollContext } from './context/ScrollContext'

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mission from './components/Mission'
import About from './components/About'
import Founder from './components/Founder'
import TalentManagement from './components/TalentManagement'
import BrandExpansion from './components/BrandExpansion'
import Intel from './components/Intel'
import Contact from './components/Contact'
import LiquidEther from './components/LiquidEther'

// Mobile detection helper
const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 768

function App() {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)
  const [isMobile, setIsMobile] = useState(getIsMobile)

  // Handle resize for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0)

    // Disable smooth scroll on mobile for better performance
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: !isMobile,
      lerp: isMobile ? 1 : 0.06,
      multiplier: isMobile ? 1 : 0.8,
      class: 'is-inview',
      smartphone: { smooth: false },
      tablet: { smooth: false, breakpoint: 768 }
    })

    // Scroll to top after Locomotive Scroll initializes
    locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true })

    // GSAP entrance animations (simplified on mobile)
    const animationDuration = isMobile ? 0.8 : 1.4
    const animationDelay = isMobile ? 0.1 : 0.3

    gsap.fromTo(
      '.hero-card',
      { scale: isMobile ? 1 : 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: animationDuration, ease: 'power3.out', delay: animationDelay }
    )

    gsap.fromTo(
      '.header',
      { y: isMobile ? -15 : -30, opacity: 0 },
      { y: 0, opacity: 1, duration: isMobile ? 0.6 : 1, ease: 'power2.out', delay: isMobile ? 0.3 : 0.6 }
    )

    // Update scroll after components mount
    setTimeout(() => {
      locomotiveScrollRef.current?.update()
    }, 500)

    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [isMobile])

  return (
    <ScrollContext.Provider value={locomotiveScrollRef}>
      {/* Background - WebGL on desktop, gradient on mobile */}
      <div className="fixed inset-0 -z-10 pointer-events-auto">
        {isMobile ? (
          // Static gradient fallback for mobile (better performance)
          <div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 50%, #e8e8e8 100%)'
            }}
          />
        ) : (
          // Full WebGL effect on desktop
          <LiquidEther
            colors={['#f5f5f5', '#e8e8e8', '#d4d4d4']}
            mouseForce={15}
            cursorSize={80}
            resolution={0.5}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.5}
          />
        )}
      </div>

      <Nav />
      <main data-scroll-container ref={scrollRef}>
        <Hero />
        <Mission />
        <About />
        <Founder />
        <TalentManagement />
        <BrandExpansion />
        <Intel />
        <Contact />
      </main>
    </ScrollContext.Provider>
  )
}

export default App
