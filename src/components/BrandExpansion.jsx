import SpotlightCard from './SpotlightCard'
import FadeInText from './FadeInText'

const phases = [
  {
    number: '01',
    title: 'Audit & Shield',
    subtitle: 'IP Protection',
    description: 'Stop unauthorized use of your brand'
  },
  {
    number: '02',
    title: 'Cultural Synthesis',
    subtitle: 'Content Localization',
    description: 'Adapt your voice for Chinese platforms'
  },
  {
    number: '03',
    title: 'Commercial Arbitrage',
    subtitle: 'Monetization',
    description: 'Sponsorships, e-commerce & licensing'
  }
]

const services = [
  {
    pillar: 'Digital Sovereignty',
    focus: 'Channel Management'
  },
  {
    pillar: 'Commercial Strategy',
    focus: 'Partnership'
  },
  {
    pillar: 'Physical Footprint',
    focus: 'Tours & Masterclasses'
  },
  {
    pillar: 'E-Commerce IP',
    focus: 'Merchandising'
  }
]

function BrandExpansion() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48"
      id="brand"
      data-scroll-section
    >
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <FadeInText direction="up" delay={0}>
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Brand Expansion
          </p>
        </FadeInText>
        <FadeInText direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            From Icon to Legend.
          </h2>
        </FadeInText>
        <FadeInText direction="up" delay={0.2}>
          <p className="text-base text-neutral-500">
            We translate influence.
          </p>
        </FadeInText>
      </div>

      {/* Three-Phase Timeline */}
      <div
        className="mb-16 md:mb-24"
        data-scroll
        data-scroll-speed="0.6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          {phases.map((phase, index) => (
            <FadeInText key={phase.number} direction="up" delay={0.1 * index}>
              <div className="relative flex flex-col items-center text-center p-6">
                {/* Connector Line (desktop only) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-[1px] bg-neutral-200 -z-10" />
                )}

                {/* Phase Number */}
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-neutral-100 flex items-center justify-center text-sm font-medium mb-4">
                  {phase.number}
                </div>

                {/* Phase Content */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {phase.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-2">
                  {phase.subtitle}
                </p>
                <p className="text-xs text-neutral-400">
                  {phase.description}
                </p>
              </div>
            </FadeInText>
          ))}
        </div>
      </div>

      {/* Bento Grid Services */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        data-scroll
        data-scroll-speed="0.8"
      >
        {services.map((service, index) => (
          <FadeInText key={service.pillar} direction="up" delay={0.1 * index}>
            <SpotlightCard className="min-h-[180px] flex flex-col justify-center">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-3">
                {service.pillar}
              </p>
              <h3 className="text-2xl font-semibold text-neutral-900">
                {service.focus}
              </h3>
            </SpotlightCard>
          </FadeInText>
        ))}
      </div>
    </section>
  )
}

export default BrandExpansion
