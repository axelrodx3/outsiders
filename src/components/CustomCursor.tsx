import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const elRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [isHoverDevice, setIsHoverDevice] = useState(false)

  useEffect(() => {
    setIsHoverDevice(window.matchMedia('(hover: hover)').matches)
  }, [])

  useEffect(() => {
    if (!isHoverDevice) return
    let rafId: number
    const handleMove = (e: MouseEvent) => {
      setVisible(true)
      rafId = requestAnimationFrame(() => {
        if (elRef.current) {
          elRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
        }
      })
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove, { passive: true })
    document.body.addEventListener('mouseleave', handleLeave)
    document.documentElement.classList.add('custom-cursor-active')
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMove)
      document.body.removeEventListener('mouseleave', handleLeave)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [isHoverDevice])

  if (!isHoverDevice) return null

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        transform: 'translate(-9999px, -9999px) translate(-50%, -50%)',
        width: '28px',
        height: '28px',
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <img src="/skull.cur" alt="" className="w-full h-full object-contain select-none" draggable={false} />
    </div>
  )
}
