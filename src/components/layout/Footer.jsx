export default function Footer() {
  const year = new Date().getFullYear()

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-glass-border bg-dark/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#inicio" onClick={(e) => handleClick(e, 'inicio')} className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">LT</span>
              <span className="text-white/60 ml-1 font-normal">Entrenamientos</span>
            </span>
          </a>

          <div className="flex flex-wrap gap-5 justify-center">
            {[
              { href: '#inicio', label: 'Inicio' },
              { href: '#servicios', label: 'Servicios' },
              { href: '#productos', label: 'Productos' },
              { href: '#sobre-mi', label: 'Sobre mí' },
              { href: '#contacto', label: 'Contacto' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href.slice(1))}
                className="text-sm text-white/40 hover:text-neon-cyan transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <a href="https://www.instagram.com/lt.entrenamientos/" target="_blank" rel="noopener" className="text-sm text-white/40 hover:text-neon-cyan transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@lt.entrenamientos" target="_blank" rel="noopener" className="text-sm text-white/40 hover:text-neon-cyan transition-colors">TikTok</a>
            <a href="https://www.facebook.com/people/LTEntrenamientos/100063505808267/" target="_blank" rel="noopener" className="text-sm text-white/40 hover:text-neon-cyan transition-colors">Facebook</a>
            <a href="https://www.linkedin.com/in/leandrotarca/" target="_blank" rel="noopener" className="text-sm text-white/40 hover:text-neon-cyan transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40">&copy; {year} LT Entrenamientos &mdash; Todos los derechos reservados.</p>
          <p className="text-sm text-white/50">
            Diseñado y desarrollado por <a href="https://wa.me/5491131210594?text=Hola!%20Vi%20la%20web%20de%20LT%20Entrenamientos%20y%20me%20gustar%C3%ADa%20consultar%20por%20el%20desarrollo%20de%20una%20web." target="_blank" rel="noopener" className="text-neon-cyan hover:text-neon-cyan/80 transition-colors font-semibold">Nicolás Oroño</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
