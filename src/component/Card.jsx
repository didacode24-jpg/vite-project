import React from 'react'
import './Card.css';

const user = {
    name: "Diriba Degefa",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 100
}

const Card = () => {
  return (
    <div className='card'>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={'photo of'+ user.name}
      style={{
        width:user.imageSize,
        height:user.imageSize
      }} />
      <button>explorer me</button>
    </div>
  )
}

export default Card