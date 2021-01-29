import React, { useState } from 'react'
import Tile from './Tile'

export default function Board (props) {
  return (
    <div data-testId="testId" className="Tiles">
      {props.tiles.map(tile => {
        return <Tile
          key={tile.id}
          src={tile.src}
          isVisible={tile.isVisible}
        />
      })}
    </div>
  )
}
