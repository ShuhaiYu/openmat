import SpotlightCard from './SpotlightCard'
import AnimatedLogo from './AnimatedLogo'

function Hero() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-32 md:py-60 flex items-center justify-center md:justify-start"
      id="home"
      data-scroll-section
    >
      <div className="w-full max-w-[600px]" data-scroll data-scroll-speed="0.5">
        <AnimatedLogo className="mb-6" />
        <SpotlightCard className="hero-card w-full min-h-[280px] md:min-h-[350px]">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            Open Mat Agency
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-3">
            Own Your Brand.
          </h1>
          <p className="text-base text-neutral-400 mb-4">
            In the World's Largest Market.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500">
            Talent Management · IP Protection · Brand Localization
          </p>
        </SpotlightCard>
      </div>
    </section>
  )
}

export default Hero
