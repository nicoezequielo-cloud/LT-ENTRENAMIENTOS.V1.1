import { useApp } from '../../context/AppContext'

export default function LTProgressBar() {
  const { progress } = useApp()

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-neon-cyan to-neon-magenta z-50 transition-all duration-100"
      style={{ width: `${progress}%` }}
    />
  )
}
