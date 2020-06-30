import React from 'react'
import { useTransition, animated } from 'react-spring'

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
  const transitions = useTransition(visibleItems, (item) => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      <h1>Lesson Three: Enter and Exit</h1>
      <div className="container" onClick={() => setVisibleItems(randomFilter(items))}>
        {transitions.map(({ item: { color, key: itemKey }, props, key }) => {
          return (
            <animated.div
              key={key}
              style={{
                ...props,
                backgroundColor: color,
                transform: `translateX(${
                  100 + itemKey * 50
                }px) translateY(100px)`,
              }}
              className="ball"
            >
              {itemKey}
            </animated.div>
          )
        })}
      </div>
    </>
  )
}

export default EnterAndExit
