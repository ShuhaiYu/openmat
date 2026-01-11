import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Intel from './components/Intel'
import Founder from './components/Founder'
import Contact from './components/Contact'
import LiquidEther from './components/LiquidEther'

function App() {
  const scrollRef = useRef(null)
  const locomotiveScrollRef = useRef(null)

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.06,
      multiplier: 0.8,
      class: 'is-inview'
    })

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
        <Problem />
        <Services />
        <Intel />
        <Founder />
        <Contact />
      </main>
    </>
  )
}

export default App
