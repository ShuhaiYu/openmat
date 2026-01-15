import { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import FadeInText from './FadeInText'

const archetypeCards = [
  {
    title: 'Combat Elite',
    description: 'World Champions. JRE Guests.',
    icon: '01'
  },
  {
    title: 'Lifestyle Icon',
    description: 'Health & Wellness Leaders.',
    icon: '02'
  },
  {
    title: 'Content Pioneer',
    description: 'Zero Eastern Presence. Yet.',
    icon: '03'
  }
]

const chinaReachOptions = [
  "I don't know my China reach",
  "I'm being pirated",
  "Under 100K followers",
  "100K - 1M followers",
  "1M+ followers"
]

function TalentManagement() {
  const [formData, setFormData] = useState({
    name: '',
    discipline: '',
    email: '',
    chinaReach: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSubmitted(true)
    } catch (err) {
      setError('提交失败，请稍后重试')
      console.error('Submit error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section
      className="min-h-screen px-[6%] md:px-[12%] py-24 md:py-48"
      id="talent"
      data-scroll-section
    >
      {/* Header */}
      <div className="text-center mb-16 md:mb-24">
        <FadeInText direction="up" delay={0}>
          <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Talent Management
          </p>
        </FadeInText>
        <FadeInText direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            We Architect Global Expansion.
          </h2>
        </FadeInText>
        <FadeInText direction="up" delay={0.2}>
          <p className="text-base text-neutral-500">
            Closed Beta. By Invitation Only.
          </p>
        </FadeInText>
      </div>

      {/* Archetype Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-24"
        data-scroll
        data-scroll-speed="0.8"
      >
        {archetypeCards.map((card, index) => (
          <FadeInText key={card.title} direction="up" delay={0.1 * index}>
            <SpotlightCard className="h-full min-h-[200px] flex flex-col justify-between">
              <span className="text-5xl font-light text-neutral-300 mb-4">
                {card.icon}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-500">
                  {card.description}
                </p>
              </div>
            </SpotlightCard>
          </FadeInText>
        ))}
      </div>

      {/* Application Form */}
      <FadeInText direction="up" delay={0.3}>
        <div className="max-w-2xl mx-auto">
          {!submitted ? (
            <SpotlightCard className="p-8 md:p-12">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
                Apply for Representation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 md:py-3 bg-neutral-700/80 border border-neutral-600 rounded-xl text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all text-base"
                  />
                  <input
                    type="text"
                    name="discipline"
                    placeholder="Discipline"
                    value={formData.discipline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 md:py-3 bg-neutral-700/80 border border-neutral-600 rounded-xl text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all text-base"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 md:py-3 bg-neutral-700/80 border border-neutral-600 rounded-xl text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all text-base"
                />
                <div className="relative">
                  <select
                    name="chinaReach"
                    value={formData.chinaReach}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 md:py-3 bg-neutral-700/80 border border-neutral-600 rounded-xl text-neutral-100 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all appearance-none cursor-pointer text-base pr-10"
                  >
                    <option value="" disabled>Current China Reach</option>
                    {chinaReachOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {/* Dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {error && (
                  <div className="text-red-400 text-sm text-center py-2">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 md:py-4 bg-neutral-100 text-neutral-900 font-semibold rounded-xl hover:bg-white active:scale-[0.98] transition-all text-base min-h-[52px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </SpotlightCard>
          ) : (
            <SpotlightCard className="p-8 md:p-12 text-center">
              <div className="text-4xl mb-4">
                <span role="img" aria-label="check">&#10003;</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Application Received
              </h3>
              <p className="text-neutral-500">
                We'll be in touch within 48 hours.
              </p>
            </SpotlightCard>
          )}
        </div>
      </FadeInText>

      {/* Bottom Note */}
      <FadeInText direction="up" delay={0.4}>
        <p className="text-center text-xs text-neutral-400 mt-12 max-w-xl mx-auto">
          By referral or application only. We prioritize talent with demonstrated global impact.
        </p>
      </FadeInText>
    </section>
  )
}

export default TalentManagement
