import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const waMsg = '%C2%A1Hola!+%F0%9F%91%8B+Me+interesa+recibir+informaci%C3%B3n+sobre+las+clases.+Me+gustar%C3%ADa+saber+m%C3%A1s+sobre%3A%0A%0A%5B+%5D+Funcional%0A%0A%5B+%5D+F%C3%BAtbol%0A%0A%5B+%5D+Entrenamientos+Personalizados%0A%0AMi+nombre+es%3A+_________+%C2%A1Gracias%21'

export default function LTCta() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.children, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-24 px-4 overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.03] via-transparent to-neon-magenta/[0.03] pointer-events-none" />
      <div ref={ref} className="max-w-3xl mx-auto relative z-10">
        <span className="inline-block text-4xl mb-4">💪</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
          ¿Listo para <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">transformarte</span>?
        </h2>
        <p className="text-lg text-white/50 mb-8 max-w-lg mx-auto">
          No importa de dónde partís. Importa a dónde querés llegar. Arrancá hoy.
        </p>
        <a
          href={`https://wa.me/5491150575903?text=${waMsg}`}
          target="_blank"
          rel="noopener"
          className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base bg-neon-cyan text-dark hover:shadow-[0_0_40px_rgba(232,89,12,0.5)] transition-all duration-300 hover:scale-105"
        >
          Escribime por WhatsApp
        </a>
      </div>
    </section>
  )
}
