import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../ui/SectionTitle'
import InstagramEmbed from './InstagramEmbed'

gsap.registerPlugin(ScrollTrigger)

const redes = [
  {
    name: 'Instagram', handle: '@lt.entrenamientos', href: 'https://www.instagram.com/lt.entrenamientos/',
    iconBg: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]',
    btn: 'bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    name: 'TikTok', handle: '@lt.entrenamientos', href: 'https://www.tiktok.com/@lt.entrenamientos',
    iconBg: 'bg-[#000]',
    btn: 'bg-[#000]',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    name: 'Spotify', handle: 'Playlist de entrenamiento', href: 'https://open.spotify.com/playlist/3t0DI5KhnRopF36xO1MZ7d',
    iconBg: 'bg-[#1db954]',
    btn: 'bg-[#1db954]',
    path: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
  },
  {
    name: 'Facebook', handle: 'LT Entrenamientos', href: 'https://www.facebook.com/people/LTEntrenamientos/100063505808267/',
    iconBg: 'bg-[#1877f2]',
    btn: 'bg-[#1877f2]',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'LinkedIn', handle: 'Leandro Tarca', href: 'https://www.linkedin.com/in/leandrotarca/',
    iconBg: 'bg-[#0a66c2]',
    btn: 'bg-[#0a66c2]',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export default function LTRedes() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cards = el.querySelectorAll('.redes-card')
    const embed = el.querySelector('.redes-embed-left')
    const ctx = gsap.context(() => {
      if (embed) {
        gsap.fromTo(embed, { opacity: 0, x: -40 }, {
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      }
      gsap.fromTo(cards, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative pt-24 pb-16 px-4 overflow-hidden" id="redes">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/[0.02] via-transparent to-neon-magenta/[0.02] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle subtitle="Redes" title="Seguinos en redes" icon="📱" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-3">
            {redes.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener"
                className="redes-card group flex items-center gap-4 p-4 rounded-xl border border-glass-border bg-glass backdrop-blur-xl transition-all duration-400 hover:border-neon-cyan/30 hover:shadow-[0_0_25px_rgba(232,89,12,0.1)] hover:translate-x-1.5"
              >
                <div className={`w-11 h-11 rounded-lg ${r.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                    <path d={r.path} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-white">{r.name}</div>
                  <div className="text-xs text-white/50 truncate">{r.handle}</div>
                </div>
                <span className={`text-xs font-semibold px-4 py-1.5 rounded-full ${r.btn} text-white transition-transform duration-300 group-hover:scale-105`}>
                  {r.name === 'Spotify' ? 'Escuchar' : 'Seguir'}
                </span>
              </a>
            ))}
            <div className="rounded-xl overflow-hidden border border-glass-border bg-glass/50 backdrop-blur-xl p-3">
              <iframe
                src="https://open.spotify.com/embed/playlist/3t0DI5KhnRopF36xO1MZ7d"
                width="100%"
                height="152"
                allow="encrypted-media"
                loading="lazy"
                title="Spotify - Playlist LT Entrenamientos"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="redes-embed-left flex justify-center">
            <div className="max-h-[465px] overflow-hidden rounded-2xl">
              <InstagramEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
