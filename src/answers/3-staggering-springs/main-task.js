import React from 'react'
import { useTrail, animated, interpolate } from 'react-spring'

const countBalls = 10

const StaggeringSprings = () => {
  const colors = ['#c70039', '#0e9aa7', '#5c2a9d']
  const scales = [0.5, 0.3, 0.7, 1, 0.4]

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
  const [trail, set] = useTrail(countBalls, () => ({
    color: colors[0],
    scale: 1,
    x: 0,
    y: 0,
  }))

  return (
    <>
      <h1>Lesson 3: Staggering Springs</h1>
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
        {trail.map(({ color, scale, x, y }, i) => {
          return (
            <animated.div
              key={i}
              className="ball"
              style={{
                backgroundColor: color,
                transform: interpolate(
                  [scale, x, y],
                  (scale, x, y) => `translate(${x}px,${y}px) scale(${scale})`
                ),
              }}
            />
          )
        })}
      </div>
    </>
  )
}

export default StaggeringSprings
