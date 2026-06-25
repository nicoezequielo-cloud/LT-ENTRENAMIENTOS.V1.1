import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../ui/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

function animateNumber(el, target, prefix = '', suffix = '') {
  const duration = 1200
  const start = performance.now()

  function update(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(eased * target)
    el.textContent = prefix + current + suffix
    if (progress < 1) requestAnimationFrame(update)
    else el.textContent = prefix + target + suffix
  }
  requestAnimationFrame(update)
}

const stats = [
  { target: 200, prefix: '+', suffix: '', label: 'Alumnos entrenados' },
  { target: 6, prefix: '', suffix: '+', label: 'Años de experiencia' },
  { target: 3, prefix: '+', suffix: '', label: 'Disciplinas' },
]

export default function LTSobreMi() {
  const ref = useRef(null)
  const numbersRef = useRef([])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const content = el.querySelector('.sobre-mi-content')
      const visual = el.querySelector('.sobre-mi-visual')
      if (content) {
        gsap.fromTo(content.children, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      }
      if (visual) {
        gsap.fromTo(visual, { opacity: 0, x: 50 }, {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      }
    }, el)

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          numbersRef.current.forEach((num, i) => {
            if (num && !num.dataset.animated) {
              num.dataset.animated = 'true'
              const s = stats[i]
              animateNumber(num, s.target, s.prefix, s.suffix)
            }
          })
          obs.disconnect()
        }
      })
    }, { threshold: 0.5 })

    numbersRef.current.forEach(n => { if (n) obs.observe(n) })

    return () => { ctx.revert(); obs.disconnect() }
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden" id="sobre-mi">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-magenta/[0.03] via-transparent to-neon-cyan/[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="sobre-mi-content">
            <div className="lg:hidden mb-8">
              <SectionTitle subtitle="Sobre mí" title="Conocé al entrenador" align="center" icon="🏋️" />
            </div>
            <div className="hidden lg:block">
              <SectionTitle subtitle="Sobre mí" title="Conocé al entrenador" align="left" icon="🏋️" />
            </div>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Soy <strong className="text-neon-cyan">Leandro</strong>, preparador físico, y mi objetivo es ayudarte a alcanzar tus metas de forma segura, efectiva y sostenible. Entiendo que cada persona es diferente, por eso cada plan de entrenamiento se adapta a sus necesidades, objetivos y nivel.
              </p>
              <p>
                Mi compromiso va más allá de diseñar una rutina: busco acompañarte en cada etapa del proceso, brindándote las herramientas, el seguimiento y la motivación necesarios para que el entrenamiento se convierta en un hábito y los resultados se mantengan en el tiempo.
              </p>
            </div>
            <div className="flex gap-8 sm:gap-12 mt-8 justify-center lg:justify-start">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <span
                    ref={el => numbersRef.current[i] = el}
                    className="block text-2xl sm:text-3xl font-black text-neon-cyan"
                    data-target={s.target}
                  >
                    {s.prefix}0{s.suffix}
                  </span>
                  <span className="text-xs text-white/40 font-medium uppercase tracking-wider mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sobre-mi-visual flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 p-1">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="/images/723041409_18100200605147485_2466154167846416077_n.jpg"
                  alt="Leandro - LT Entrenamientos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
