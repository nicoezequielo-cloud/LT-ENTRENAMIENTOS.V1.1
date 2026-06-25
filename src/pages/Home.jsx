import LTHero from '../components/lt/LTHero'
import LTServicios from '../components/lt/LTServicios'
import LTProductos from '../components/lt/LTProductos'
import LTCta from '../components/lt/LTCta'
import LTSobreMi from '../components/lt/LTSobreMi'
import LTRedes from '../components/lt/LTRedes'
import LTContacto from '../components/lt/LTContacto'

export default function Home() {
  return (
    <>
      <LTHero />
      <LTServicios />
      <LTProductos />
      <LTCta />
      <LTSobreMi />
      <LTRedes />
      <LTContacto />
    </>
  )
}
