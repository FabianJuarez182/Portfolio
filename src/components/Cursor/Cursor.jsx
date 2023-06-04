/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

function Cursor() {
  const delay = 5

  const dot = useRef(null)
  const dotOutline = useRef(null)
  const cursorContainer = useRef(null)

  const cursorVisible = useRef(true)
  const cursorEnlarged = useRef(false)

  const endX = useRef(0)
  const endY = useRef(0)
  const x = useRef(0)
  const y = useRef(0)
  const requestRef = useRef(null)

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1
      dotOutline.current.style.opacity = 1
    } else {
      dot.current.style.opacity = 0
      dotOutline.current.style.opacity = 0
    }
  }

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)'
    }
  }

  const mouseOverEvent = () => {
    cursorEnlarged.current = true
    toggleCursorSize()
  }

  const mouseOutEvent = () => {
    cursorEnlarged.current = false
    toggleCursorSize()
  }

  const mouseEnterEvent = () => {
    cursorVisible.current = true
    toggleCursorVisibility()
  }

  const mouseLeaveEvent = () => {
    cursorVisible.current = false
    toggleCursorVisibility()
  }

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true
    toggleCursorVisibility()

    endX.current = e.clientX
    endY.current = e.clientY

    dot.current.style.top = `${endY.current}px`
    dot.current.style.left = `${endX.current}px`
  }

  const animateDotOutline = () => {
    x.current += (endX.current - x.current) / delay
    y.current += (endY.current - y.current) / delay

    dotOutline.current.style.top = `${y.current}px`
    dotOutline.current.style.left = `${x.current}px`

    requestRef.current = requestAnimationFrame(animateDotOutline)
  }

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent)
    document.addEventListener('mouseup', mouseOutEvent)
    document.addEventListener('mousemove', mouseMoveEvent)
    document.addEventListener('mouseenter', mouseEnterEvent)
    document.addEventListener('mouseleave', mouseLeaveEvent)

    animateDotOutline()

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent)
      document.removeEventListener('mouseup', mouseOutEvent)
      document.removeEventListener('mousemove', mouseMoveEvent)
      document.removeEventListener('mouseenter', mouseEnterEvent)
      document.removeEventListener('mouseleave', mouseLeaveEvent)

      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <div
      ref={cursorContainer}
      className={styles['cursor-container']}
      style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0 }}
    >
      <div ref={dotOutline} className={styles['cursor-dot-outline']} />
      <div ref={dot} className={styles['cursor-dot']} />
    </div>
  )
}

export default Cursor
