/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

function ProgressBar(props) {
  const { bgcolor, completed } = props
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1
        return nextProgress <= completed ? nextProgress : prevProgress
      })
    }, 250)

    return () => clearInterval(interval)
  }, [completed])

  const containerStyles = {
    height: 20,
    backgroundColor: '#242424',
    borderRadius: 50,
    margin: 10,
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
