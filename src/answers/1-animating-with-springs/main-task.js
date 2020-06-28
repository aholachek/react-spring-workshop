import React from 'react'
import { useSpring, animated, interpolate } from 'react-spring'

const colors = ['#c70039', '#0e9aa7', '#5c2a9d']
const scales = [0.5, 2, 1.5]
const x = [100, 400, 600]
const y = [10, 200, 70]

const getRandomItem = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const generateRandomAppearanceVals = () => {
  return {
    color: getRandomItem(colors),
    scale: getRandomItem(scales),
    x: getRandomItem(x),
    y: getRandomItem(y),
  }
}

const AnimatingWithSprings = () => {
  const [{ color, scale, x, y }, set] = useSpring(() => ({
    color: colors[0],
    scale: 1,
    x: 0,
    y: 0,
  }))

  return (
    <>
      <h1>Lesson 1: Spring basics</h1>
      <div
        className="container"
        onClick={() => {
          set(generateRandomAppearanceVals())
        }}
      >
        <animated.div
          className="ball"
          style={{
            backgroundColor: color,
            transform: interpolate(
              [scale, x, y],
              (scale, x, y) => `scale(${scale}) translate(${x}px,${y}px)`
            ),
          }}
        />
      </div>
    </>
  )
}

export default AnimatingWithSprings
