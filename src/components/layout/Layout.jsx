import Navbar from './Navbar'
import Footer from './Footer'
import Particles from '../effects/Particles'
import NeonGlow from '../effects/NeonGlow'
import PageTransition from '../effects/PageTransition'
import LTProgressBar from '../lt/LTProgressBar'
import LTWhatsApp from '../lt/LTWhatsApp'
import LTBackToTop from '../lt/LTBackToTop'
import LTPopup from '../lt/LTPopup'
import LTToast from '../lt/LTToast'
import LTLightbox from '../lt/LTLightbox'

export default function Layout({ children }) {
  return (
    <>
      <LTProgressBar />
      <Particles />
      <NeonGlow color="cyan" position="top-right" size="lg" />
      <NeonGlow color="magenta" position="bottom-left" size="lg" />
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-0">
          {children}
        </main>
      </PageTransition>
      <Footer />
      <LTWhatsApp />
      <LTBackToTop />
      <LTPopup />
      <LTToast />
      <LTLightbox />
    </>
  )
}
