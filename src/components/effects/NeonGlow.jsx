export default function NeonGlow({ color = 'cyan', position = 'top-right', size = 'md' }) {
  const colors = {
    cyan: 'bg-neon-cyan',
    magenta: 'bg-neon-magenta',
    purple: 'bg-neon-purple',
  }

  const positions = {
    'top-right': 'top-0 right-0 -translate-y-1/2 translate-x-1/2',
    'top-left': 'top-0 left-0 -translate-y-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-0 right-0 translate-y-1/2 translate-x-1/2',
    'bottom-left': 'bottom-0 left-0 translate-y-1/2 -translate-x-1/2',
  }

  const sizes = {
    sm: 'w-32 h-32 blur-3xl',
    md: 'w-64 h-64 blur-3xl',
    lg: 'w-96 h-96 blur-3xl',
  }

  return (
    <div
      className={`pointer-events-none fixed ${positions[position]} ${sizes[size]} ${colors[color]} opacity-20`}
    />
  )
}
