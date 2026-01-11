import { useEffect, useRef, useState } from 'react'

/**
 * FadeInText - A component that fades in text when scrolled into view
 * Uses Intersection Observer for better compatibility with Locomotive Scroll
 *
 * @param {string} direction - Animation direction: 'up', 'down', 'left', 'right'
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Content to animate
 */
function FadeInText({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = ''
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Calculate initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(30px)'
      case 'down': return 'translateY(-30px)'
      case 'left': return 'translateX(30px)'
      case 'right': return 'translateX(-30px)'
      default: return 'translateY(30px)'
    }
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
  }

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  )
}

export default FadeInText
