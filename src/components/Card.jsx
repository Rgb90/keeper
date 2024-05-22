import React from 'react'

function Card(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <img className='propsimg' src={props.img} alt="" />
        <p><strong>Başkent:</strong> {props.city}</p>
        <p><strong>Konum:</strong> {props.position}</p>
    </div>
  )
}

export default Card