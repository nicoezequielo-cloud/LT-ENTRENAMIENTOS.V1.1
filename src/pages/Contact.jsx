import GlassCard from '../components/ui/GlassCard'
import NeonButton from '../components/ui/NeonButton'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="pb-24">
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-4">Contact</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <GlassCard>
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border backdrop-blur-xl text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border backdrop-blur-xl text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border backdrop-blur-xl text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm text-white/50 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-glass-border backdrop-blur-xl text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <NeonButton variant="primary" className="w-full justify-center">
                Send Message
              </NeonButton>
            </form>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center text-neon-cyan shrink-0">
                  ✉
                </div>
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-white/50">hello@nebula.com</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-magenta/10 flex items-center justify-center text-neon-magenta shrink-0">
                  ⌂
                </div>
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="text-sm text-white/50">San Francisco, CA</p>
                </div>
              </div>
            </GlassCard>
            <GlassCard>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple shrink-0">
                  ◷
                </div>
                <div>
                  <p className="text-sm font-semibold">Hours</p>
                  <p className="text-sm text-white/50">Mon-Fri 9AM - 6PM</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}
