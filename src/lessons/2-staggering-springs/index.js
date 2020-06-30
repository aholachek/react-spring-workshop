import React from 'react'
// TODO: import relevant react-spring stuff here
// confused? read https://www.react-spring.io/docs/hooks/use-trail before continuing

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
  // TODO: initiate springs here

  return (
    <>
      <h1>Lesson Two: Staggering Springs</h1>
      <div
        className="container"
        onClick={(e) => {
          // TODO: uncomment when you have access to a "set" var based on what you write on line 23
          // set({
          //   ...generateRandomAppearanceVals(
          //     e.currentTarget.getBoundingClientRect()
          //   ),
          // })
        }}
      >
        {/* TODO: render balls here */}
      </div>
    </>
  )
}

export default StaggeringSprings
