import { useState, useEffect } from 'react'

// High-quality China imagery from Unsplash
const CHINA_IMAGES = [
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80', // Great Wall
  'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=1920&q=80'  // Zhangjiajie mountains
]

export default function ChinaWaveBackground({ className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Crossfade between images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % CHINA_IMAGES.length)
        setIsTransitioning(false)
      }, 2000) // 2 second transition
    }, 10000) // Change every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Photo layers with Ken Burns effect */}
      {CHINA_IMAGES.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <img
            src={src}
            alt={`China landscape ${index + 1}`}
            className="absolute w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%) sepia(30%) brightness(0.9) contrast(1.1)',
              animation: `kenburns${index % 2 === 0 ? 'A' : 'B'} 25s ease-in-out infinite alternate`
            }}
          />
        </div>
      ))}

      {/* Gold tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(191, 153, 80, 0.15) 0%, rgba(191, 153, 80, 0.05) 100%)',
          mixBlendMode: 'overlay',
          zIndex: 2
        }}
      />

      {/* Mist layer 1 - drifting left to right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 50% 70%, rgba(255,255,255,0.25) 0%, transparent 50%)
          `,
          animation: 'mistDrift1 35s ease-in-out infinite',
          zIndex: 3
        }}
      />

      {/* Mist layer 2 - drifting right to left (opposite direction) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 40% at 70% 40%, rgba(255,255,255,0.35) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(ellipse 80% 30% at 60% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)
          `,
          animation: 'mistDrift2 45s ease-in-out infinite',
          zIndex: 4
        }}
      />

      {/* Mist layer 3 - subtle vertical drift */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 30% at 50% 20%, rgba(255,255,255,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 100% 40% at 50% 90%, rgba(255,255,255,0.25) 0%, transparent 60%)
          `,
          animation: 'mistDrift3 50s ease-in-out infinite',
          zIndex: 5
        }}
      />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes kenburnsA {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.08) translate(-1.5%, -1%);
          }
        }

        @keyframes kenburnsB {
          0% {
            transform: scale(1.05) translate(-1%, 0.5%);
          }
          100% {
            transform: scale(1) translate(1%, -0.5%);
          }
        }

        @keyframes mistDrift1 {
          0% {
            transform: translateX(-15%) translateY(0);
            opacity: 0.5;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(15%) translateY(-5%);
            opacity: 0.5;
          }
        }

        @keyframes mistDrift2 {
          0% {
            transform: translateX(10%) translateY(5%);
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(-10%) translateY(-3%);
            opacity: 0.4;
          }
        }

        @keyframes mistDrift3 {
          0% {
            transform: translateY(-5%);
            opacity: 0.3;
          }
          50% {
            transform: translateY(5%);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-5%);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  )
}
