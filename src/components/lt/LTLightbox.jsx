import { useEffect, useCallback } from 'react'
import { useApp } from '../../context/AppContext'

export default function LTLightbox() {
  const { lightbox, closeLightbox, openGallery } = useApp()

  const goNext = useCallback(() => {
    const { images, currentIndex } = lightbox
    if (images.length > 1) openGallery(images, (currentIndex + 1) % images.length)
  }, [lightbox, openGallery])

  const goPrev = useCallback(() => {
    const { images, currentIndex } = lightbox
    if (images.length > 1) openGallery(images, (currentIndex - 1 + images.length) % images.length)
  }, [lightbox, openGallery])

  useEffect(() => {
    if (!lightbox.open) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox.open, closeLightbox, goNext, goPrev])

  if (!lightbox.open) return null

  const hasGallery = lightbox.images.length > 1

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
        aria-label="Cerrar"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 13.41l-5.88 5.88-1.42-1.42L10.59 12 4.7 5.71 6.12 4.29 12 10.59l5.88-5.88z"/>
        </svg>
      </button>

      {hasGallery && (
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
      )}

      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img src={lightbox.src} alt="" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
      </div>

      {hasGallery && (
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          aria-label="Siguiente"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      )}

      {hasGallery && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {lightbox.images.map((_, i) => (
            <span key={i} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === lightbox.currentIndex ? 'bg-white scale-125' : 'bg-white/30'}`} />
          ))}
        </div>
      )}
    </div>
  )
}
