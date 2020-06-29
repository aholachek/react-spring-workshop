import React from 'react'
import { useSpring, animated } from 'react-spring'

const Intro = () => {
  const [{ scale }, set] = useSpring(() => ({
    scale: 1,
  }))
  return (
   <>
   <h1>Intro: Simplest Possible Spring</h1>
    <div
      className="container"
      onClick={() => {
        set({ scale: Math.random() * 5 })
      }}
    >
      <animated.div
        className="ball"
        style={{
          margin: '2rem',
          transform: scale.interpolate((scale) => `scale(${scale})`),
        }}
      />
    </div>
    </>
  )
}

export default Intro
