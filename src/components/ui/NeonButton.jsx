import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function NeonButton({ children, variant = 'primary', href, onClick, className = '' }) {
  const btnRef = useRef(null)

  useEffect(() => {
    const el = btnRef.current
    if (!el) return
    el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.05, duration: 0.3, ease: 'power2.out' }))
    el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, duration: 0.3, ease: 'power2.out' }))
  }, [])

  const base = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer overflow-hidden'

  const variants = {
    primary: 'bg-neon-cyan text-dark hover:shadow-[0_0_30px_rgba(232,89,12,0.5)]',
    secondary: 'border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}
