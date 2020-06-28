import React from 'react'
import 'spectre.css'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LessonOne from './1-animating-with-springs'
import LessonTwo from './2-enter-and-exit'
import LessonThree from './3-staggering-springs'

const routes = [
  {
    component: LessonOne,
    name: 'Animating With Springs',
  },
  {
    component: LessonTwo,
    name: 'Enter and Exit',
  },
  {
    component: LessonThree,
    name: 'Staggering Springs',
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
