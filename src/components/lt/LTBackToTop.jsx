import { useState, useEffect } from 'react'

export default function LTBackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 400)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 left-6 w-11 h-11 rounded-full bg-glass backdrop-blur-xl border border-glass-border text-white/60 flex items-center justify-center z-40 transition-all duration-300 hover:bg-neon-cyan hover:text-dark hover:border-neon-cyan ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
      </svg>
    </button>
  )
}
