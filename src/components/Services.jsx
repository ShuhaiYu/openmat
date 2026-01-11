import SpotlightCard from './SpotlightCard'

function Services() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center md:items-start"
      id="services"
      data-scroll-section
    >
      <p
        className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12 text-center md:text-left"
        data-scroll
        data-scroll-speed="0.5"
      >
        What We Do
      </p>
      <div data-scroll data-scroll-speed="1.2">
        <SpotlightCard className="w-[88vw] md:w-[45vw] md:max-w-[520px] min-h-[300px]">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
            We Bridge The Gap
          </h2>
          <p className="text-base text-neutral-600">
            Between international brands and the Chinese market
          </p>
        </SpotlightCard>
      </div>
    </section>
  )
}

export default Services
