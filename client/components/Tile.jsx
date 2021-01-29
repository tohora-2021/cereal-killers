import React from 'react'

function Tile (props) {
  const isVisible = props.isVisible
  if (isVisible) {
    return <img onClick={props.onClick} src={props.src} className='tile'></img>
  } else return <div onClick={props.onClick} className='tile'></div>
}

export default Tile
