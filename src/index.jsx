import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnakeGame } from './component'

const initial = ReactDOM.createRoot(document.querySelector('#snake-game'))

initial.render(
  <React.StrictMode>
    <SnakeGame />
  </React.StrictMode>
)
