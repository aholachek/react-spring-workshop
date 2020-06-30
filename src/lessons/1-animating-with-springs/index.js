import React from 'react'
// TODO: import relevant react-spring stuff here
// confused? read https://www.react-spring.io/docs/hooks/use-spring before continuing

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
  // TODO: initiate spring hook here
  return (
    <>
      <h1>Lesson One: Spring basics</h1>
      <div
        className="container"
        // TODO: add an onClick listener here that calls generateRandomAppearanceVals()
        // and sets them in the spring
      >
        <div
          className="ball"
          // TODO: Use the spring vars to animate this ball
        />
      </div>
    </>
  )
}

export default AnimatingWithSprings
