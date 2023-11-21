import React from 'react'
import './index.css'
const Cards = ({id,name,image}) => {
  return (
    <div>
       <div className='container'>
                <div className='image1'>
                    <img src={image} alt="" />
                    <p>{id}</p>
                    <p>{name}</p>
                </div>
               
            </div>
    </div>
  )
}

export default Cards
