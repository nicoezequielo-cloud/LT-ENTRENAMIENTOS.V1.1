import { useEffect, useRef } from 'react'

export default function InstagramEmbed() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }
    document.body.appendChild(script)
    return () => { /* keep script */ }
  }, [])

  return (
    <div ref={ref} className="w-full max-w-[400px]">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/C6v2oRfL7o4/"
        style={{
          background: '#fff',
          border: 0,
          borderRadius: '16px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '400px',
          minWidth: '280px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      />
    </div>
  )
}
