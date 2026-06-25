import { useState, useEffect, useCallback, useRef } from 'react'

export default function Carousel({ images, className = '' }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const total = images.length

  const goTo = useCallback((index) => {
    setCurrent(((index % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const resetAutoplay = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % total), 6000)
  }, [total])

  useEffect(() => {
    resetAutoplay()
    return () => clearInterval(timerRef.current)
  }, [resetAutoplay])

  return (
    <div className={`relative select-none group ${className}`}
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={resetAutoplay}
      onTouchStart={() => clearInterval(timerRef.current)}
      onTouchEnd={resetAutoplay}
    >
      <div className="overflow-hidden rounded-2xl shadow-lg" style={{ aspectRatio: '4/5' }}>
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full flex-shrink-0 bg-dark relative">
              <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/70 backdrop-blur-md text-white flex items-center justify-center shadow-md hover:bg-neon-cyan hover:text-dark transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark/70 backdrop-blur-md text-white flex items-center justify-center shadow-md hover:bg-neon-cyan hover:text-dark transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
        aria-label="Siguiente"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </button>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetAutoplay() }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-neon-cyan scale-125 shadow-[0_0_8px_rgba(232,89,12,0.5)]' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
