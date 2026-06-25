import { useEffect } from 'react'
import { useApp } from '../../context/AppContext'

export default function LTLightbox() {
  const { lightbox, closeLightbox } = useApp()

  useEffect(() => {
    if (!lightbox.open) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox.open, closeLightbox])

  if (!lightbox.open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8 transition-opacity duration-300"
      onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        aria-label="Cerrar"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 13.41l-5.88 5.88-1.42-1.42L10.59 12 4.7 5.71 6.12 4.29 12 10.59l5.88-5.88z"/>
        </svg>
      </button>
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img src={lightbox.src} alt="" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
      </div>
    </div>
  )
}
