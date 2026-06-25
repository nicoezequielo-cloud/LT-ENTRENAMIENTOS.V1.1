import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap() {
  const ref = useRef(null)

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return ref
}

export function useGsapAnimation({ from, to, trigger, enabled = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!enabled || !ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, from, {
        ...to,
        scrollTrigger: trigger
          ? {
              trigger: ref.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              ...trigger,
            }
          : undefined,
      })
    }, ref)

    return () => ctx.revert()
  }, [enabled]) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
