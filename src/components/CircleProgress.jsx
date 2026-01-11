import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function CircleProgress({
  value = 85,
  size = 240,
  strokeWidth = 8,
  color = '#171717',
  label = ''
}) {
  const circleRef = useRef(null)
  const numberRef = useRef(null)
  const containerRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            // Animate circle stroke
            gsap.fromTo(
              circleRef.current,
              { strokeDashoffset: circumference },
              {
                strokeDashoffset: circumference - (value / 100) * circumference,
                duration: 2,
                ease: 'power2.out'
              }
            )

            // Animate number counter
            const counter = { value: 0 }
            gsap.to(counter, {
              value: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                if (numberRef.current) {
                  numberRef.current.textContent = Math.round(counter.value) + '%'
                }
              }
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, circumference, value])

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center"
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#e5e5e5"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            ref={circleRef}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
          />
        </svg>
        {/* Center number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            ref={numberRef}
            className="text-5xl md:text-7xl font-bold text-neutral-900"
          >
            0%
          </span>
        </div>
      </div>
      {label && (
        <span className="text-sm md:text-base text-neutral-500 mt-4 uppercase tracking-wider">
          {label}
        </span>
      )}
    </div>
  )
}

export default CircleProgress
