import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../ui/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

export default function LTMapa() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-4" aria-label="Ubicación">
      <div ref={ref} className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Ubicación" title="Villa Urquiza, CABA" />
        <p className="text-center text-white/50 -mt-10 mb-10">Clases presenciales y online.</p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-glass-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52576.98440275388!2d-58.51409322683158!3d-34.57422957361083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6659f39dbd3%3A0x7c1f1cbf4de5e2ea!2sVilla%20Urquiza%2C%20CABA!5e0!3m2!1ses!2sar!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación LT Entrenamientos - Villa Urquiza"
          />
        </div>
      </div>
    </section>
  )
}
