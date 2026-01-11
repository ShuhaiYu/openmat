import TiltedCard from './TiltedCard'
import FadeInText from './FadeInText'

function Founder() {
  const founderOverlay = (
    <p className="tilted-card-demo-text">
      Shen Li
    </p>
  )

  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center relative overflow-hidden"
      id="founder"
      data-scroll-section
    >
      {/* Left Side Vertical Text */}
      <div
        className="absolute left-4 md:left-[6%] top-1/4 hidden md:block"
        data-scroll
        data-scroll-speed="1.5"
        data-scroll-direction="horizontal"
      >
        <FadeInText direction="left" delay={0.2}>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300 [writing-mode:vertical-lr] rotate-180">
            JD + Black Belt
          </p>
        </FadeInText>
      </div>

      {/* Right Side Vertical Text */}
      <div
        className="absolute right-4 md:right-[6%] top-1/2 hidden md:block"
        data-scroll
        data-scroll-speed="-1.5"
        data-scroll-direction="horizontal"
      >
        <FadeInText direction="right" delay={0.3}>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300 [writing-mode:vertical-lr]">
            Attorney & Martial Artist
          </p>
        </FadeInText>
      </div>

      {/* Left Horizontal Description */}
      <div
        className="absolute left-[6%] md:left-[10%] bottom-1/3 hidden md:block max-w-[180px]"
        data-scroll
        data-scroll-speed="1.2"
      >
        <FadeInText direction="left" delay={0.4}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Legal professional with deep expertise in cross-border transactions.
          </p>
        </FadeInText>
      </div>

      {/* Right Horizontal Description */}
      <div
        className="absolute right-[6%] md:right-[10%] top-1/3 hidden md:block max-w-[180px] text-right"
        data-scroll
        data-scroll-speed="-1.2"
      >
        <FadeInText direction="right" delay={0.6}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Brazilian Jiu-Jitsu Black Belt with championship-level experience.
          </p>
        </FadeInText>
      </div>

      {/* Section Label */}
      <FadeInText direction="up" delay={0}>
        <p
          className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12"
          data-scroll
          data-scroll-speed="0.5"
        >
          Founder
        </p>
      </FadeInText>

      {/* Founder Card */}
      <FadeInText direction="up" delay={0.1}>
        <div data-scroll data-scroll-speed="1">
          <TiltedCard
            imageSrc="/ShenLi.png"
            altText="Shen Li - Founder"
            containerHeight="420px"
            containerWidth="100%"
            imageHeight="420px"
            imageWidth="320px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={founderOverlay}
          />
        </div>
      </FadeInText>
    </section>
  )
}

export default Founder
