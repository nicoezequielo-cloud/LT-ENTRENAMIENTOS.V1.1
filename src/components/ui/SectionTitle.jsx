import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function SectionTitle({ subtitle, title, align = 'center', icon = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.children
    if (!els) return
    gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
  }, [])

  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div ref={ref} className={`mb-16 ${alignClass}`}>
      {subtitle && (
        <span className="inline-block text-neon-cyan font-mono text-sm tracking-widest uppercase mb-3">
          {icon && <span className="mr-1.5">{icon}</span>}{subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
