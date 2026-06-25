import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

export default function PageTransition({ children }) {
  const wrapperRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )

    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div ref={wrapperRef} className="min-h-screen">
      {children}
    </div>
  )
}
