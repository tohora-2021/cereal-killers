import React, { useState } from 'react'

function Tile (props) {
  const isVisible = props.isVisible
  const [visibility, setVisibility] = useState(isVisible)

  function setTileVisible () {
    setVisibility(true)
  }
  return (
    visibility
      ? <img src={props.src} className='tile' />
      : <div onClick={setTileVisible} className='tile'></div>
  )
}

export default Tile
