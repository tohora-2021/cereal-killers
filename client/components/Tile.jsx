import React from 'react'

function Tile (props) {
  const isVisible = props.isVisible
  if (isVisible) {
    return <img src={props.src} className='tile'></img>
  } else return <div className='tile'></div>
}

export default Tile
