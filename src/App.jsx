import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

function App() {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0)

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.06,
      multiplier: 0.8,
      class: 'is-inview'
    })

    // Scroll to top after Locomotive Scroll initializes
    locomotiveScrollRef.current.scrollTo(0, { duration: 0, disableLerp: true })

    // GSAP entrance animations
    gsap.fromTo(
      '.hero-card',
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.3 }
    )

    gsap.fromTo(
      '.header',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
    )

    // Update scroll after components mount
    setTimeout(() => {
      locomotiveScrollRef.current?.update()
    }, 500)

    return () => {
      locomotiveScrollRef.current?.destroy()
    }
  }, [])

  return (
    <>
      {/* LiquidEther Background */}
      <div className="fixed inset-0 -z-10 pointer-events-auto">
        <LiquidEther
          colors={['#f5f5f5', '#e8e8e8', '#d4d4d4']}
          mouseForce={15}
          cursorSize={80}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
        />
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
    </>
  )
}

export default App
