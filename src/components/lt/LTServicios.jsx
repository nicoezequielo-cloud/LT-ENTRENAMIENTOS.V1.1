import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../ui/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

const servicios = [
  {
    icon: '★',
    title: 'Personalizado',
    desc: 'Planificación individualizada según tu objetivo: fuerza, hipertrofia, resistencia o pérdida de peso. Evaluación inicial, rutinas progresivas y corrección técnica constante.',
    features: ['Evaluación física completa', 'Rutina 100% a tu medida', 'Seguimiento semanal'],
  },
  {
    icon: '⚽',
    title: 'Fútbol',
    desc: 'Clases grupales e individuales. Técnica, táctica, coordinación y preparación física específica para el deporte. Todos los niveles y edades.',
    features: ['Técnica individual', 'Preparación física aplicada', 'Táctica y visión de juego', 'Grupos por edad y nivel'],
  },
  {
    icon: '⚡',
    title: 'Funcional',
    desc: 'Entrenamiento en grupo reducido con ejercicios funcionales para mejorar tu condición física general, quemar calorías y ganar movilidad.',
    features: ['Clases en grupo reducido', 'Ejercicios con peso corporal', 'Mejora de resistencia', 'Adaptado a todos los niveles'],
  },
]

export default function LTServicios() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cards = el.querySelectorAll('.servicio-card')
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden" id="servicios">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.03] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle subtitle="Servicios" title="Programas diseñados para vos" icon="⚡" />
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <article
              key={s.title}
              className="servicio-card group relative rounded-2xl border border-glass-border bg-glass p-8 backdrop-blur-xl transition-all duration-500 hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(232,89,12,0.1)] hover:-translate-y-2"
            >
              <div className="text-3xl mb-4 text-neon-cyan">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-white/50 mb-5 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="text-sm text-white/60 flex items-start gap-2">
                    <span className="text-neon-cyan mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:gap-2"
              >
                Consultar <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
