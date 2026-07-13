import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from './Carousel'
import NeonButton from '../ui/NeonButton'

gsap.registerPlugin(ScrollTrigger)

const carouselImages = [
  '/images/IMG_20260529_180808984_MP.jpg.jpeg',
  '/images/IMG_20260529_180813277_MP.jpg.jpeg',
  '/images/20260617_120330_0001.png',
  '/images/Diseño sin título_20260617_120643_0000.png',
  '/images/20260617_120330_0004.png',
  '/images/toro.jpeg',
  '/images/detallelt.jpeg',
  '/images/logo atras.jpeg',
  '/images/lt.jpeg',
]

export default function LTHero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.lt-hero-tag', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      gsap.fromTo('.lt-hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' })
      gsap.fromTo('.lt-hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' })
      gsap.fromTo('.lt-hero-actions', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' })
      gsap.fromTo('.lt-hero-visual', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-28 pb-16 px-4" id="inicio">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left lg:pr-4">
            <span className="lt-hero-tag inline-block text-neon-cyan font-mono text-xs tracking-[0.2em] uppercase bg-neon-cyan/10 px-4 py-1.5 rounded-full mb-5">
              ⚡ Preparación Física Profesional
            </span>
            <h1 className="lt-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-5">
              Transformá tu cuerpo,<br />
              <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">superá tus límites</span>
            </h1>
            <p className="lt-hero-desc text-base sm:text-lg text-white/50 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Entrenamiento personalizado, Funcional y clases de fútbol en Villa Urquiza. Te brindo asesoramiento personalizado con un plan ideal para vos acorde a tus objetivos.
            </p>
            <div className="lt-hero-actions flex flex-col sm:flex-row items-center lg:justify-start gap-4">
              <a href="#contacto"><NeonButton variant="primary">Empezá hoy</NeonButton></a>
              <a href="#servicios"><NeonButton variant="secondary">Ver servicios</NeonButton></a>
            </div>
          </div>
          <div className="lt-hero-visual flex justify-center lg:justify-start">
            <div className="relative p-2 rounded-[1.75rem] bg-glass border border-glass-border backdrop-blur-xl shadow-[0_0_40px_rgba(232,89,12,0.08)]">
              <div className="absolute -inset-6 bg-gradient-to-br from-neon-cyan/8 via-neon-purple/5 to-neon-magenta/8 rounded-[3rem] blur-3xl pointer-events-none" />
              <Carousel images={carouselImages} className="w-[300px] sm:w-[360px] md:w-[420px] lg:w-[440px] relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
