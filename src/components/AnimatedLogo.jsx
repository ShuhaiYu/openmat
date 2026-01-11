import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function AnimatedLogo({ className }) {
  const svgRef = useRef(null)

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('path, polygon')

    // Timeline: 描边动画 -> 填充实心
    const tl = gsap.timeline({ delay: 0.3 })

    // 1. 描边绘制动画
    tl.fromTo(
      paths,
      { drawSVG: '0%' },
      {
        drawSVG: '100%',
        duration: 1.5,
        stagger: 0.1,
        ease: 'power2.inOut'
      }
    )

    // 2. 填充为实心
    tl.to(
      paths,
      {
        fill: '#BF9950',
        duration: 0.5,
        ease: 'power2.out'
      },
      '-=0.3' // 提前 0.3 秒开始填充，与描边动画重叠
    )
  }, [])

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        viewBox="0 0 226 226"
        className="w-20 h-20 md:w-28 md:h-28"
      >
        {/* D Icon paths - stroke version for DrawSVG animation */}
        <path
          stroke="#BF9950"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M225.42,42.15v123.32h-44.26v-24.44h19.83V24.43H84.38v45.92H59.95V0h123.32C206.55,0,225.42,18.87,225.42,42.15z"
        />
        <polygon
          stroke="#BF9950"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="155.06,141.03 155.06,165.47 59.95,165.47 59.95,100.08 84.38,100.08 84.38,141.03"
        />
        <path
          stroke="#BF9950"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M148.92,93.76l-7.88,7.88v39.38h24.42v-63.8L148.92,93.76z M0,59.95v123.32c0,23.28,18.87,42.15,42.15,42.15h123.31V59.95H0z M141.04,200.98H24.43V84.38h116.61V200.98z"
        />
        <polygon
          stroke="#BF9950"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="218.88,23.81 190.11,23.81 190.11,18.02 134.02,74.11 148.92,74.11 148.92,93.76"
        />
        <polygon
          stroke="#BF9950"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="18.58,211.28 31.4,211.28 101.66,141.03 84.38,141.03 84.38,123.76 7.03,201.11 18.58,201.11"
        />
      </svg>
    </div>
  )
}

export default AnimatedLogo
