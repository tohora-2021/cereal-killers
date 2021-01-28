import React from 'react'
import Board from './Board'

// need to import image.src array
import imageTiles from '../imageSources'

const App = () => {
  return (
    <div className="game">
      <h1>Cereal Killers!</h1><br/>
      <Board tiles={imageTiles} />
    </div>
  )
}

export default App
