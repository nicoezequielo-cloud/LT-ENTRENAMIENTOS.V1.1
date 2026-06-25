import { useState } from 'react'
import GlassCard from '../components/ui/GlassCard'
import NeonButton from '../components/ui/NeonButton'

const allPosts = [
  { title: 'Getting Started with Glassmorphism', tag: 'Design', date: 'Jan 15, 2025', read: '5 min', desc: 'Learn how to create stunning glass effects for modern web interfaces.' },
  { title: 'GSAP Animation Guide', tag: 'Development', date: 'Jan 10, 2025', read: '8 min', desc: 'Master scroll-triggered animations with GreenSock Animation Platform.' },
  { title: 'Neon Color Theory', tag: 'Design', date: 'Dec 28, 2024', read: '4 min', desc: 'How to choose and combine neon colors for maximum visual impact.' },
  { title: 'Building with Tailwind v4', tag: 'Development', date: 'Dec 20, 2024', read: '6 min', desc: 'Explore the new features and improvements in Tailwind CSS v4.' },
  { title: 'Responsive Design Patterns', tag: 'Development', date: 'Dec 12, 2024', read: '7 min', desc: 'Modern responsive design techniques for complex web layouts.' },
  { title: 'UX Best Practices 2025', tag: 'Design', date: 'Dec 5, 2024', read: '6 min', desc: 'User experience principles that will define web design this year.' },
]

const tags = ['Design', 'Development', 'Tutorial', 'News', 'Case Study']

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All' ? allPosts : allPosts.filter(p => p.tag === activeTag)

  return (
    <div className="pb-24">
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-neon-cyan font-mono text-sm tracking-[0.2em] uppercase mb-4">Our Blog</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Latest{' '}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">Articles</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Insights, tutorials, and guides on modern web development and design.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setActiveTag('All')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === 'All'
                  ? 'bg-neon-cyan text-dark'
                  : 'bg-glass backdrop-blur-xl border border-glass-border text-white/50 hover:text-white hover:border-neon-cyan/30'
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTag === tag
                    ? 'bg-neon-cyan text-dark'
                    : 'bg-glass backdrop-blur-xl border border-glass-border text-white/50 hover:text-white hover:border-neon-cyan/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <GlassCard key={post.title} delay={i * 0.05}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-neon-cyan font-mono">{post.tag}</span>
                  <span className="text-xs text-white/30">{post.read}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-white/50 mb-4">{post.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{post.date}</span>
                  <NeonButton variant="ghost" className="text-xs">Read →</NeonButton>
                </div>
              </GlassCard>
            ))}
          </div>

          {filtered.length > 0 && (
            <div className="text-center mt-12">
              <NeonButton variant="secondary">Load More Articles</NeonButton>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
