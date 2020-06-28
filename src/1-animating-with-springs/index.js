import React from 'react'

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
  return (
    <>
      <h1>Lesson 1: Spring basics</h1>
      <div
        className="container"
        // TODO: add an event listener here that calls generateRandomAppearanceVals()
        // and sets them in the spring
      >
        <div
          className="ball"
          // TODO: how to use the spring vars to animate this ball?
        />
      </div>
    </>
  )
}

export default AnimatingWithSprings
