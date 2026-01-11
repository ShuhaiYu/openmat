import SpotlightCard from './SpotlightCard'
import FadeInText from './FadeInText'

function Contact() {
  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48 flex flex-col justify-center items-center text-center"
      id="contact"
      data-scroll-section
    >
      <FadeInText direction="up" delay={0}>
        <p
          className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-8 md:mb-12"
          data-scroll
          data-scroll-speed="0.5"
        >
          Let's Connect
        </p>
      </FadeInText>
      <div data-scroll data-scroll-speed="1">
        <SpotlightCard className="w-[88vw] md:w-[55vw] md:max-w-[650px] min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 mb-4 block">
            Get in touch
          </span>
          <a
            href="mailto:shen@openmat.com.cn"
            className="text-xl md:text-2xl font-medium text-neutral-900 hover:text-neutral-600 transition-colors mb-6"
          >
            shen@openmat.com.cn
          </a>
          <p className="text-sm text-neutral-500">
            Level 8 No.908 Huamu Rd, Pudong, Shanghai, China
          </p>
        </SpotlightCard>
      </div>
      <footer className="mt-20 text-[0.7rem] font-normal text-neutral-300 tracking-[0.1em]">
        <span>上海澳燊体育文化发展有限公司</span>
      </footer>
    </section>
  )
}

export default Contact
