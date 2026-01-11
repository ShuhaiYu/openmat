import TiltedCard from './TiltedCard'
import FadeInText from './FadeInText'

function Mission() {
  const overlayContent = (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800/95 to-black/95 rounded-[15px]">
      <span className="text-5xl md:text-6xl font-bold text-white">360°</span>
      <span className="text-lg md:text-xl text-white/80 mt-2">Ecosystem</span>
      <p className="text-sm text-white/60 mt-4 text-center px-4">for talent management in the East</p>
    </div>
  )

  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center md:items-end"
      data-scroll-section
    >
      <FadeInText direction="up" delay={0}>
        <p
          className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12 text-center md:text-right"
          data-scroll
          data-scroll-speed="0.5"
        >
          The Reclamation Project
        </p>
      </FadeInText>
      <div data-scroll data-scroll-speed="1">
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1545324418-cc6a8b6347e3?w=400&h=400&fit=crop"
          altText="Mission ecosystem"
          containerHeight="400px"
          containerWidth="100%"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={14}
          scaleOnHover={1.08}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={overlayContent}
        />
      </div>
      <FadeInText direction="up" delay={0.3}>
        <p className="text-lg md:text-xl font-medium text-neutral-900 mt-8 text-center md:text-right max-w-lg">
          We don't just stop the leakage. We bridge the gap between global influence and local monetization.
        </p>
      </FadeInText>
    </section>
  )
}

export default Mission
