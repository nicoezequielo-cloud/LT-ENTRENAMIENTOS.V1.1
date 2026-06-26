# LT Entrenamientos

Sitio web profesional para **LT Entrenamientos** — un centro de entrenamiento personal en Villa Urquiza, CABA. Desarrollado con React 19 + Vite 8 + Tailwind CSS v4 + GSAP.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock)

## Características

- Diseño **dark mode** con glassmorfismo y neón
- Animaciones con **GSAP + ScrollTrigger**
- **Sistema de partículas** interactivo en canvas
- Carrusel de imágenes con auto-play
- Lightbox para galería de productos
- Formulario de contacto vía **Formspree**
- Barra de progreso de scroll
- Botón flotante de WhatsApp
- Popup promocional diferido
- Navegación smooth-scroll por anclas
- **Totalmente responsive**

## Tech Stack

| Tecnología | Uso |
|---|---|
| **React 19** | Framework UI |
| **Vite 8** | Build tool |
| **Tailwind CSS v4** | Estilos utilitarios |
| **GSAP 3** | Animaciones |
| **React Router DOM 7** | Enrutamiento SPA |
| **Formspree** | Backend de formulario |

## Instalación

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

```bash
npm run deploy
```

El script `deploy.js` compila el proyecto y copia el output a un directorio hermano para su despliegue.

## Estructura

```
src/
  components/
    lt/          # Componentes del negocio (hero, servicios, productos, etc.)
    layout/      # Navbar, Footer, Layout
    effects/     # Partículas, NeonGlow, PageTransition
    ui/          # SectionTitle, NeonButton, GlassCard, GradientText
  pages/         # Páginas (Home activa, otras como templates)
  context/       # Estado global (toast, lightbox, scroll)
  hooks/         # useGsap, useMousePosition
  styles/        # global.css (tokens Tailwind, keyframes)
```

## Licencia

MIT
