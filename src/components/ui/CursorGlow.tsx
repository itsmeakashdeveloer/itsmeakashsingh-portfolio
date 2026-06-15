import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const handleLeave = () => setVisible(false)
    const handleEnter = () => setVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [x, y, visible])

  if (!visible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[5] w-[500px] h-[500px] rounded-full"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(124,58,237,0.06) 0%, rgba(124,58,237,0.02) 40%, transparent 70%)',
      }}
    />
  )
}
