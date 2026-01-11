import FadeInText from './FadeInText'

function About() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center relative overflow-hidden"
      id="about"
      data-scroll-section
    >
      {/* Left Side Vertical Text */}
      <div
        className="absolute left-4 md:left-[6%] top-1/3 hidden md:block"
        data-scroll
        data-scroll-speed="2"
        data-scroll-direction="horizontal"
      >
        <FadeInText direction="left" delay={0.3}>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-300 [writing-mode:vertical-lr] rotate-180">
            Born at the intersection of two worlds
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
            Globally fluent · Technically dominant
          </p>
        </FadeInText>
      </div>

      {/* Left Horizontal Description */}
      <div
        className="absolute left-[6%] md:left-[10%] bottom-1/4 hidden md:block max-w-[200px]"
        data-scroll
        data-scroll-speed="1.5"
      >
        <FadeInText direction="left" delay={0.5}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Professional infrastructure for world-class combat athletes.
          </p>
        </FadeInText>
      </div>

      {/* Right Horizontal Description */}
      <div
        className="absolute right-[6%] md:right-[10%] top-1/4 hidden md:block max-w-[200px] text-right"
        data-scroll
        data-scroll-speed="-1"
      >
        <FadeInText direction="right" delay={0.7}>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Legal security and cultural intelligence for the Chinese market.
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
          About
        </p>
      </FadeInText>

      {/* Company Logo */}
      <FadeInText direction="up" delay={0.1}>
        <img
          src="/Logo D.jpg"
          alt="Open Mat Logo"
          className="h-32 md:h-64 w-auto mb-8 md:mb-12"
          data-scroll
          data-scroll-speed="1"
        />
      </FadeInText>

      {/* Tagline */}
      <div className="text-center mb-12 md:mb-16">
        <FadeInText direction="up" delay={0.15}>
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 mb-2">
            The Rule of Law.
          </h2>
        </FadeInText>
        <FadeInText direction="up" delay={0.2}>
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900">
            The Art of War.
          </h2>
        </FadeInText>
      </div>

      {/* Mission */}
      <FadeInText direction="up" delay={0.25}>
        <p className="text-base md:text-lg text-neutral-500 text-center max-w-xl">
          Legal protection and cultural strategy for global talent entering China.
        </p>
      </FadeInText>

      {/* Partner Logos */}
      <div className="mt-16 md:mt-24">
        <FadeInText direction="up" delay={0.3}>
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6 text-center">
            Partners
          </p>
        </FadeInText>
        <FadeInText direction="up" delay={0.35}>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <a
              href="https://www.asacademy.com.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src="/AS_Academy.png"
                alt="AS Academy"
                className="h-10 md:h-14 w-auto"
              />
            </a>
            <a
              href="https://www.ualawyers.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src="/ualaywers.png"
                alt="UA Lawyers"
                className="h-10 md:h-14 w-auto"
              />
            </a>
          </div>
        </FadeInText>
      </div>
    </section>
  )
}

export default About
