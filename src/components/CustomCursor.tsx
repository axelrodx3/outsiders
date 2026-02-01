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
    document.documentElement.classList.add('custom-cursor-active')
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [visible, isHoverDevice])

  if (!isHoverDevice || !visible) return null

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        width: '28px',
        height: '28px',
      }}
    >
      <img src="/skull.cur" alt="" className="w-full h-full object-contain" />
    </div>
  )
}
