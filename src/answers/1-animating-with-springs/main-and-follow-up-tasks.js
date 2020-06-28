import React from 'react'
import { useSpring, animated, interpolate, config } from 'react-spring'

const AnimatingWithSprings = () => {
  const colors = ['#c70039', '#0e9aa7', '#5c2a9d']
  const scales = [0.5, 2, 1.5, 5, 0.2]

  const getRandomItem = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
  }

  const generateRandomAppearanceVals = (rect) => {
    return {
      color: getRandomItem(colors),
      scale: getRandomItem(scales),
      x: rect.width * Math.random(),
      y: rect.height * Math.random(),
    }
  }
  const [{ color, scale, x, y }, set] = useSpring(() => ({
    color: colors[0],
    scale: 1,
    x: 0,
    y: 0,
    config: config.wobbly,
  }))

  return (
    <>
      <h1>Lesson 1: Spring basics</h1>
      <div
        className="container"
        onClick={(e) => {
          set({
            ...generateRandomAppearanceVals(
              e.currentTarget.getBoundingClientRect()
            ),
            onRest: () => {
              console.log('done!')
            },
          })
        }}
      >
        <animated.div
          className="ball"
          style={{
            backgroundColor: color,
            transform: interpolate(
              [scale, x, y],
              (scale, x, y) => `translate(${x}px,${y}px) scale(${scale})`
            ),
          }}
        />
      </div>
    </>
  )
}

export default AnimatingWithSprings
