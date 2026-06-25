export default function GradientText({ children, as: Tag = 'span', className = '' }) {
  return (
    <Tag
      className={`bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Tag>
  )
}
