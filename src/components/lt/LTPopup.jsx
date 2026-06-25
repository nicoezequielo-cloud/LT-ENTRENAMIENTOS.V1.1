import { useState, useEffect } from 'react'

export default function LTPopup() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed z-40 flex items-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-glass-border bg-glass backdrop-blur-xl shadow-lg transition-all duration-500 ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 sm:bottom-24`}
    >
      <span className="text-xs sm:text-sm font-semibold text-white">
        ⚡ Primera clase gratis
      </span>
      <a
        href="#contacto"
        onClick={() => setActive(false)}
        className="text-xs font-bold text-neon-cyan hover:text-neon-cyan/80 transition-colors whitespace-nowrap"
      >
        Empezá ya
      </a>
      <button
        onClick={() => setActive(false)}
        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-glass border border-glass-border flex items-center justify-center text-white/40 hover:bg-neon-cyan hover:text-dark transition-all duration-300 flex-shrink-0"
        aria-label="Cerrar"
      >
        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
          <path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 13.41l-5.88 5.88-1.42-1.42L10.59 12 4.7 5.71 6.12 4.29 12 10.59l5.88-5.88z"/>
        </svg>
      </button>
    </div>
  )
}
