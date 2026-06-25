import { useApp } from '../../context/AppContext'

export default function LTToast() {
  const { toast } = useApp()

  const bg = toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-400 pointer-events-none ${bg} ${
        toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {toast.msg}
    </div>
  )
}
