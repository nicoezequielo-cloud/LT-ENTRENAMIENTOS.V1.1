import GlassCard from '../components/ui/GlassCard'
import SectionTitle from '../components/ui/SectionTitle'
import NeonButton from '../components/ui/NeonButton'

const services = [
  { icon: '⚡', title: 'Web Development', desc: 'High-performance websites built with modern frameworks and best practices.', features: ['React / Next.js', 'Tailwind CSS', 'GSAP Animations', 'Responsive Design'] },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, intuitive interfaces designed with a focus on user experience.', features: ['Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'] },
  { icon: '🚀', title: 'Performance', desc: 'Optimize your web presence for speed, accessibility, and SEO.', features: ['Lighthouse Audits', 'Core Web Vitals', 'SEO Optimization', 'Accessibility'] },
]

const plans = [
  { name: 'Starter', price: '$49', period: '/month', features: ['1 Project', 'Basic Support', '5 Pages', '1 Revision'], popular: false },
  { name: 'Professional', price: '$99', period: '/month', features: ['5 Projects', 'Priority Support', 'Unlimited Pages', '5 Revisions', 'Custom Animations'], popular: true },
  { name: 'Enterprise', price: '$249', period: '/month', features: ['Unlimited Projects', '24/7 Support', 'Custom Development', 'Unlimited Revisions', 'Dedicated Team'], popular: false },
]

export default function Services() {
  return (
    <div className="pb-24">
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-4">What we do</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            From concept to launch, we provide everything you need to build a stunning web presence.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="What we offer" title="Our expertise" />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.1}>
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-white/50 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-white/40 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Pricing" title="Choose your plan" />
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((p, i) => (
              <GlassCard key={p.name} className={p.popular ? 'border-neon-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)]' : ''} delay={i * 0.1}>
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-cyan text-dark text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <div className="text-center pt-4">
                  <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-6">
                    <span className="text-4xl font-black">{p.price}</span>
                    <span className="text-sm text-white/40">{p.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm text-white/50 flex items-center gap-2">
                        <span className="text-neon-cyan">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <NeonButton variant={p.popular ? 'primary' : 'secondary'} className="w-full justify-center">
                    Get Started
                  </NeonButton>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
