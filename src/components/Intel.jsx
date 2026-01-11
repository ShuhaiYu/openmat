import FadeInText from './FadeInText'
import CircleProgress from './CircleProgress'
import AnimatedBar from './AnimatedBar'

const barMetrics = [
  { value: 18, label: 'CAGR', detail: '2025-2030', description: 'Ad market growth' },
  { value: 70, label: 'Gen Z', detail: 'Engagement', description: 'Luxury spending share' },
  { value: 84, label: 'Gray Market', detail: 'Monthly Use', description: 'Unofficial sources' }
]

function Intel() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center relative overflow-hidden"
      id="intel"
      data-scroll-section
    >
      {/* Left Side Vertical Text */}
      <div
        className="absolute left-4 md:left-[6%] top-1/4 hidden md:block"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        <FadeInText direction="left" delay={0.3}>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300 [writing-mode:vertical-lr] rotate-180">
            Quantitative data · Qualitative insights
          </p>
        </FadeInText>
      </div>

      {/* Right Side Vertical Text */}
      <div
        className="absolute right-4 md:right-[6%] top-1/2 hidden md:block"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        <FadeInText direction="right" delay={0.4}>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300 [writing-mode:vertical-lr]">
            Navigate the East
          </p>
        </FadeInText>
      </div>

      {/* Left Horizontal Description */}
      <div
        className="absolute left-[6%] md:left-[8%] bottom-1/4 hidden md:block max-w-[180px]"
        data-scroll
        data-scroll-speed="1.5"
      >
        <FadeInText direction="left" delay={0.5}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            8.5 of every 10 views via unofficial channels.
          </p>
        </FadeInText>
      </div>

      {/* Right Horizontal Description */}
      <div
        className="absolute right-[6%] md:right-[8%] top-1/3 hidden md:block max-w-[180px] text-right"
        data-scroll
        data-scroll-speed="-1"
      >
        <FadeInText direction="right" delay={0.7}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Multi-billion dollar Shadow Economy.
          </p>
        </FadeInText>
      </div>

      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <FadeInText direction="up" delay={0}>
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Market Intelligence
          </p>
        </FadeInText>
        <FadeInText direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            The Pulse of 1.4 Billion.
          </h2>
        </FadeInText>
      </div>

      {/* Main Circle Progress */}
      <FadeInText direction="up" delay={0.2}>
        <div
          className="mb-16 md:mb-20 text-center"
          data-scroll
          data-scroll-speed="0.5"
        >
          <CircleProgress
            value={85}
            size={280}
            strokeWidth={10}
            color="#171717"
            label="Revenue Displacement"
          />
          <p className="text-xs text-neutral-400 mt-4 max-w-[200px] mx-auto">
            Lost to piracy without official presence
          </p>
        </div>
      </FadeInText>

      {/* Bar Charts */}
      <FadeInText direction="up" delay={0.3}>
        <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 text-center">
          China Market 2026
        </p>
      </FadeInText>

      <div
        className="flex gap-12 md:gap-20 justify-center"
        data-scroll
        data-scroll-speed="0.8"
      >
        {barMetrics.map((metric, index) => (
          <AnimatedBar
            key={metric.label}
            value={metric.value}
            maxValue={100}
            label={metric.label}
            detail={metric.detail}
            description={metric.description}
            height={140}
            delay={0.2 * index}
          />
        ))}
      </div>

      {/* Source */}
      <FadeInText direction="up" delay={0.5}>
        <p className="text-xs text-neutral-400 mt-12 text-center">
          Source: Ampere Analysis 2025, GlobalData Sports Media
        </p>
      </FadeInText>
    </section>
  )
}

export default Intel
