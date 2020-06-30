import React from 'react'
// TODO: import relevant react-spring stuff here

const randomFilter = (arr) => arr.filter(() => Math.random() > 0.5)

const colors = ['#c70039', '#0e9aa7', '#5c2a9d']

const getRandomItem = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

const generateRandomAppearanceVals = () => {
  return {
    color: getRandomItem(colors),
  }
}

const items = [...new Array(20).keys()].map((i) => ({
  ...generateRandomAppearanceVals(i),
  key: i,
}))

const EnterAndExit = () => {
  const [visibleItems, setVisibleItems] = React.useState(randomFilter(items))

  // TODO: add a hook here which will manage opacity transitions for visible items

  return (
    <>
      <h1>Lesson Three: Enter and Exit</h1>
      <div
        className="container"
        onClick={() => setVisibleItems(randomFilter(items))}
      >
        {/* TODO: render visibleItems making sure to transition their opacity as they appear and disappear */}

        
      </div>
    </>
  )
}

export default EnterAndExit
