import React from 'react'

function Tile (props) {
  return (
    <div className='tile'>
      {props.isVisible && props.value}
    </div>
  )
}

export default Tile
