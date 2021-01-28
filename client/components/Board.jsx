import React from 'react'

import Tile from './Tile'

const Board = (props) => {
  return (
    <div className="Tiles">
      {props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          src={tile.src}
          isVisible={tile.isVisible}
        />
      })}
      <Tile />
    </div>
  )
}

export default Board
