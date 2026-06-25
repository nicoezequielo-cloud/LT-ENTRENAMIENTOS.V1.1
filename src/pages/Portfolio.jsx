import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import NeonButton from '../components/ui/NeonButton'

const categories = ['All', 'Web App', 'Landing', 'Dashboard', 'E-commerce']

const projects = [
  { title: 'Cosmic Dashboard', cat: 'Dashboard', desc: 'Analytics dashboard with real-time data visualization and glass design.' },
  { title: 'Prism Landing', cat: 'Landing', desc: 'High-conversion landing page with immersive particle effects.' },
  { title: 'Quantum Store', cat: 'E-commerce', desc: 'Modern e-commerce platform with seamless checkout experience.' },
  { title: 'Nova Social', cat: 'Web App', desc: 'Social media platform with real-time messaging and stories.' },
  { title: 'Apex Analytics', cat: 'Dashboard', desc: 'Business intelligence tool with interactive charts and reports.' },
  { title: 'Stellar Portfolio', cat: 'Landing', desc: 'Personal portfolio site with GSAP-powered showcase animations.' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const gridRef = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    gsap.fromTo(el.children,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
    )
  }, [active])

  return (
    <div className="pb-24">
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-4">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            A selection of our finest work. Each project represents a unique challenge and a crafted solution.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Portfolio" title="Recent work" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-neon-cyan text-dark'
                    : 'bg-glass backdrop-blur-xl border border-glass-border text-white/50 hover:text-white hover:border-neon-cyan/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <GlassCard key={p.title}>
                <div className="aspect-video rounded-xl bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-magenta/10 border border-glass-border mb-4 flex items-center justify-center">
                  <span className="text-4xl opacity-30">✦</span>
                </div>
                <span className="text-xs text-neon-cyan font-mono">{p.cat}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 mb-4">{p.desc}</p>
                <NeonButton variant="ghost" className="text-sm">View Project →</NeonButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
