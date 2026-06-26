import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useApp } from '../../context/AppContext'
import SectionTitle from '../ui/SectionTitle'

gsap.registerPlugin(ScrollTrigger)

const productos = [
  { img: '/images/prote whey1.jpeg', title: 'Proteína', desc: 'Proteína de suero de leche de alta calidad para tu recuperación muscular. Consultá por variedades.', wa: 'prote%C3%ADna' },
  { img: '/images/pankakes proteicos granger.jpeg', title: 'Pancakes Proteicos', desc: 'Pancakes elaborados con proteína, ideales para un desayuno o merienda rica y nutritiva. Consultá por la variedad.', wa: 'los%20pancakes%20proteicos' },
  { img: '/images/cupcakes proteicos.jpeg', title: 'Cupcakes Proteicos', desc: 'Cupcakes proteicos, el snack dulce que no podés dejar de probar.', wa: 'los%20cupcakes%20proteicos' },
  { img: '/images/creatina star.jpeg', title: 'Creatina', desc: 'Suplemento clave para maximizar tu fuerza, potencia y rendimiento en cada entrenamiento. Consultá por marcas.', wa: 'la%20creatina' },
  { img: '/images/omellette prote.jpeg', title: 'Omelette Proteico', desc: 'Omelette proteico, una opción salada y nutritiva para cualquier momento.', wa: 'el%20omelette%20proteico' },
  { img: '/images/shaker.jpeg', title: 'Shaker', desc: 'Shaker para llevar tus batidos a cualquier lado.', wa: 'el%20shaker' },
  { img: '/images/cookies proteicas.jpeg', title: 'Cookies Proteicas', desc: 'Cookies proteicas, el snack perfecto para cualquier momento del día.', wa: 'las%20cookies%20proteicas' },
  { img: '/images/hydrolized colagen.jpeg', title: 'Colágeno Hidrolizado', desc: 'Colágeno hidrolizado para cuidar tus articulaciones, piel y acelerar la recuperación post-entreno.', wa: 'el%20col%C3%A1geno%20hidrolizado' },
  { img: null, title: 'Remeras', desc: 'Remeras LT Entrenamientos. Andá reservando la tuya.', wa: 'una%20remera%20de%20LT%20Entrenamientos', soon: true },
  { img: null, title: 'Buzos', desc: 'Buzos LT Entrenamientos para entrenar con estilo.', wa: 'un%20buzo%20de%20LT%20Entrenamientos', soon: true },
  { img: null, title: 'Toallas', desc: 'Toallas deportivas LT Entrenamientos.', wa: 'una%20toalla%20de%20LT%20Entrenamientos', soon: true },
]

const waBase = 'https://wa.me/5491150575903?text=Hola!%20Quiero%20consultar%20por%20'

export default function LTProductos() {
  const ref = useRef(null)
  const { openLightbox } = useApp()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cards = el.querySelectorAll('.producto-card')
    const ctx = gsap.context(() => {
      gsap.fromTo(cards, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 overflow-hidden" id="productos">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Productos LT" title="Suplementos y nutrición deportiva" icon="💪" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((p) => (
            <article
              key={p.title}
              className={`producto-card group relative rounded-2xl border ${p.soon ? 'border-glass-border border-dashed' : 'border-glass-border'} bg-glass backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 ${p.soon ? '' : 'hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(232,89,12,0.12)] cursor-pointer'}`}
              onClick={() => {
                if (!p.soon && p.img) {
                  window.open(`${waBase}${p.wa}`, '_blank')
                }
              }}
            >
              {p.soon && (
                <span className="absolute top-3 right-3 z-10 text-[0.65rem] font-bold uppercase tracking-wider bg-gradient-to-r from-neon-cyan to-neon-magenta text-dark px-3 py-1 rounded-full shadow-lg">
                  Próximamente
                </span>
              )}
              {p.img ? (
                <div className="w-full overflow-hidden bg-dark" style={{ aspectRatio: '4/3' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
                    loading="lazy"
                    onClick={(e) => { e.stopPropagation(); openLightbox(p.img) }}
                  />
                </div>
              ) : (
                <div className="w-full bg-dark/40 flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <span className="text-5xl opacity-20">✦</span>
                </div>
              )}
              <div className={`p-5 flex flex-col flex-1 ${p.soon ? 'items-center text-center' : ''}`}>
                <h3 className="text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed flex-1">{p.desc}</p>
                <a
                  href={`${waBase}${p.wa}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:gap-2 self-start"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.soon ? 'Reservar' : 'Consultar'} <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
