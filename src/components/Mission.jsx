import FadeInText from './FadeInText'
import ChinaWaveBackground from './ChinaWaveBackground'

function Mission() {
  return (
    <section
      className="relative min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center overflow-hidden"
      data-scroll-section
    >
      {/* China Wave Background */}
      <ChinaWaveBackground />

      {/* Top transition - fade from white */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
          zIndex: 6
        }}
      />

      {/* Bottom transition - fade to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)',
          zIndex: 6
        }}
      />

      {/* Content with z-index above background */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

        {/* Content card - frosted glass for readability */}
        <div
          className="relative px-8 py-12 md:px-16 md:py-16"
          style={{
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            borderRadius: '4px'
          }}
          data-scroll
          data-scroll-speed="0.5"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: '#BF9950' }} />
          <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2" style={{ borderColor: '#BF9950' }} />
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2" style={{ borderColor: '#BF9950' }} />
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: '#BF9950' }} />

          {/* Subtitle */}
          <FadeInText direction="up" delay={0}>
            <p
              className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
              style={{ color: '#BF9950' }}
            >
              The Reclamation Project
            </p>
          </FadeInText>

          {/* Main heading */}
          <FadeInText direction="up" delay={0.1}>
            <h2
              className="text-3xl md:text-5xl font-semibold tracking-tight mb-6"
              style={{ color: '#1a1a1a' }}
            >
              Bridge to the East
            </h2>
          </FadeInText>

          {/* Decorative divider */}
          <div
            className="w-16 h-[2px] mx-auto mb-6"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #BF9950 50%, transparent 100%)',
            }}
          />

          {/* Description text */}
          <FadeInText direction="up" delay={0.2}>
            <p
              className="text-base md:text-lg leading-relaxed max-w-lg mx-auto"
              style={{ color: '#444' }}
            >
              We bridge the gap between global influence and local monetization —
              <span className="font-medium" style={{ color: '#BF9950' }}> creating pathways </span>
              for talent to thrive in the world's largest market.
            </p>
          </FadeInText>
        </div>
      </div>
    </section>
  )
}

export default Mission
