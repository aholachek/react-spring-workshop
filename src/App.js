import React from 'react'
import 'spectre.css'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Intro from './intro'
import LessonOne from './lessons/1-animating-with-springs'
import LessonTwo from './lessons/2-staggering-springs'
import LessonThree from './lessons/3-enter-and-exit'

const routes = [
  {
    component: Intro,
    name: 'Intro: Simplest Possible Spring',
  },
  {
    component: LessonOne,
    name: 'Lesson One: Spring Basics',
  },
  {
    component: LessonTwo,
    name: 'Lesson Two: Staggering Springs',
  },
  {
    component: LessonThree,
    name: 'Lesson Three: Enter and Exit',
  },
]

const nameToRoute = (str) => `/${str.toLowerCase().replace(/\s/g, '-')}`

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routes.map((r) => (
              <li key={r.name}>
                <Link to={nameToRoute(r.name)}>{r.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {routes.map((r) => {
          const Component = r.component
          return (
            <Route path={nameToRoute(r.name)} key={r.name}>
              <Component />
            </Route>
          )
        })}
      </div>
    </Router>
  )
}

export default App
