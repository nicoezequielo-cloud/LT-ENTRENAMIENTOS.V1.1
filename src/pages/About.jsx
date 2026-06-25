import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import NeonButton from '../components/ui/NeonButton'

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '5+', label: 'Years' },
  { value: '99%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

const timeline = [
  { year: '2020', title: 'Foundation', desc: 'Started with a vision to create beautiful web experiences.' },
  { year: '2022', title: 'Growth', desc: 'Expanded the team and worked with over 30 clients worldwide.' },
  { year: '2024', title: 'Innovation', desc: 'Launched our glassmorphism design system and template library.' },
  { year: '2025', title: 'Future', desc: 'Continuing to push boundaries with cutting-edge web technologies.' },
]

export default function About() {
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.stat-item', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.7)', scrollTrigger: { trigger: el, start: 'top 80%' } })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <div className="pb-24">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-4">About Us</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Crafting the <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Future</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            We are a team of designers and developers passionate about creating stunning, performant web experiences. Every pixel matters.
          </p>
        </div>
      </section>

      <section className="py-24 px-4" ref={statsRef}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="By the numbers" title="Our impact" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <GlassCard key={s.label}>
                <div className="text-center py-4 stat-item">
                  <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
                    {s.value}
                  </p>
                  <p className="text-sm text-white/40 mt-2">{s.label}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Our journey" title="Timeline" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={item.year} className="md:flex gap-8 items-start">
                  <div className="flex md:flex-col items-center gap-4 md:w-32 shrink-0">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-neon-cyan font-mono font-bold text-sm">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-px h-8 bg-gradient-to-b from-neon-cyan/50 to-transparent hidden md:block" />}
                  </div>
                  <GlassCard className="flex-1 ml-16 md:ml-0" delay={i * 0.15}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to work with us?</h2>
          <p className="text-white/50 mb-8">We are always looking for exciting projects and collaborations.</p>
          <NeonButton variant="primary">Get in Touch</NeonButton>
        </div>
      </section>
    </div>
  )
}
