import TiltedCard from './TiltedCard'

function Problem() {
  const overlayContent = (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-900/90 to-black/90 rounded-[15px]">
      <span className="text-5xl md:text-6xl font-bold text-white">85%</span>
      <span className="text-lg md:text-xl text-white/80 mt-2">Revenue Lost</span>
      <p className="text-sm text-white/60 mt-4 text-center px-4">Without proper market positioning in China</p>
    </div>
  )

  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center md:items-end"
      data-scroll-section
    >
      <p
        className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12 text-center md:text-right"
        data-scroll
        data-scroll-speed="0.5"
      >
        The Problem
      </p>
      <div data-scroll data-scroll-speed="1">
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop"
          altText="Market statistics"
          captionText="85% Revenue Lost"
          containerHeight="400px"
          containerWidth="100%"
          imageHeight="400px"
          imageWidth="400px"
          rotateAmplitude={14}
          scaleOnHover={1.08}
          showMobileWarning={false}
          displayOverlayContent={true}
          overlayContent={overlayContent}
        />
      </div>
    </section>
  )
}

export default Problem
