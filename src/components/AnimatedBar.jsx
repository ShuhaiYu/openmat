import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedBar({
  value = 50,
  maxValue = 100,
  label = '',
  detail = '',
  description = '',
  color = '#171717',
  height = 160,
  delay = 0
}) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const percentage = (value / maxValue) * 100

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center"
    >
      {/* Value */}
      <motion.span
        className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {value}%
      </motion.span>

      {/* Bar container */}
      <div
        className="w-16 md:w-20 bg-neutral-100 rounded-full overflow-hidden"
        style={{ height }}
      >
        <motion.div
          className="w-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ height: 0 }}
          animate={isVisible ? { height: `${percentage}%` } : {}}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.34, 1.56, 0.64, 1] // spring-like easing
          }}
        />
      </div>

      {/* Label */}
      <motion.span
        className="text-sm font-medium text-neutral-700 mt-3 text-center"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        {label}
      </motion.span>

      {/* Detail */}
      {detail && (
        <motion.span
          className="text-xs text-neutral-400 mt-1 text-center max-w-[100px]"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.6 }}
        >
          {detail}
        </motion.span>
      )}

      {/* Description */}
      {description && (
        <motion.span
          className="text-[10px] text-neutral-300 mt-1 text-center max-w-[100px]"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.7 }}
        >
          {description}
        </motion.span>
      )}
    </div>
  )
}

export default AnimatedBar
