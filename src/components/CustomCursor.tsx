import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [isHoverDevice, setIsHoverDevice] = useState(false)

  useEffect(() => {
    setIsHoverDevice(window.matchMedia('(hover: hover)').matches)
  }, [])

  useEffect(() => {
    if (!isHoverDevice) return
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseleave', handleLeave)
    document.body.style.cursor = 'none'
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.body.style.cursor = ''
    }
  }, [visible, isHoverDevice])

  if (!isHoverDevice || !visible) return null

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-tavern-white drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
        <path d="M12 2C8 2 5 5 5 9c0 1.5.5 2.8 1.2 3.7V16h11.6v-3.3c.7-.9 1.2-2.2 1.2-3.7 0-4-3-7-7-7zm0 2c2.8 0 5 2.2 5 5 0 .9-.3 1.7-.8 2.3V14H7.8v-2.7c-.5-.6-.8-1.4-.8-2.3 0-2.8 2.2-5 5-5zM9 10a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm6 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 15h8v1.5H8V15z" />
      </svg>
    </div>
  )
}
