import React, { useEffect, useState } from 'react'
import { Tile } from '..'
import SM from './snake-game.data'

const SnakeGame = () => {
  const [currentPos, setPos] = useState([0, 0])
  useEffect(() => {
    setTimeout(() => {
      setPos([0, currentPos[1] + 5])
    }, 1000)
  }, [currentPos])

  console.log('Current position')
  console.log(currentPos)

  return (
    <div>
      <h1>ahe</h1>
      <p>Start the game now!</p>
      <button>Start now</button>
      {SM.at((arr) => arr.map((x) => <div>aaa{x}</div>))}
      <Tile pos={currentPos} />
    </div>
  )
}

export default SnakeGame
