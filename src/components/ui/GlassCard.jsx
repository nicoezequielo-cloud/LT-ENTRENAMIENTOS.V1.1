import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function GlassCard({ children, className = '', glow = true, delay = 0 }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
    )
  }, [delay])

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl border border-glass-border bg-glass p-6 backdrop-blur-xl transition-all duration-500 hover:border-neon-cyan/30 ${glow ? 'hover:shadow-[0_0_30px_rgba(232,89,12,0.15)]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
