import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [toast, setToast] = useState({ msg: '', type: '', visible: false })
  const [lightbox, setLightbox] = useState({ open: false, src: '' })
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const toastTimer = useRef(null)

  const showToast = useCallback((msg, type = 'success') => {
    clearTimeout(toastTimer.current)
    setToast({ msg, type, visible: true })
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500)
  }, [])

  const openLightbox = useCallback((src) => setLightbox({ open: true, src }), [])
  const closeLightbox = useCallback(() => { setLightbox({ open: false, src: '' }); document.body.style.overflow = '' }, [])

  useEffect(() => {
    if (lightbox.open) document.body.style.overflow = 'hidden'
  }, [lightbox.open])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
          setScrolled(scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AppContext.Provider value={{ toast, showToast, lightbox, openLightbox, closeLightbox, progress, scrolled }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
