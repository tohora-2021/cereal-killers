import React, { useState } from 'react'
import Tile from './Tile'

function setTileVisible () {
  const [visibility, setVisibility] = useState(false)
  const 

}
  // setTile(tile.isVisible = true)
const Board = (props) => {
  return (
    <div className="Tiles">
      {props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          src={tile.src}
          isVisible={tile.isVisible}
          onClick={setTileVisible}
        />
      })}
      <Tile />
    </div>
  )
}

export default Board
