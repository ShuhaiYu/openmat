import TiltedCard from './TiltedCard'

function Founder() {
  const overlayContent = (
    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 bg-gradient-to-t from-black/80 to-transparent rounded-[15px]">
      <span className="text-xl md:text-2xl font-bold text-white">JD + Black Belt</span>
      <span className="text-base md:text-lg text-white/80">Attorney & Martial Artist</span>
      <p className="text-sm text-white/60 mt-2 text-center">Bridging legal expertise with combat sports passion</p>
    </div>
  )

  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center md:items-start"
      id="founder"
      data-scroll-section
    >
      <p
        className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12 text-center md:text-left"
        data-scroll
        data-scroll-speed="0.5"
      >
        The Founder
      </p>
      <div data-scroll data-scroll-speed="1.2">
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop"
          altText="Founder portrait"
          captionText="JD + Black Belt"
          containerHeight="420px"
          containerWidth="100%"
          imageHeight="420px"
          imageWidth="350px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          displayOverlayContent={true}
          overlayContent={overlayContent}
        />
      </div>
    </section>
  )
}

export default Founder
