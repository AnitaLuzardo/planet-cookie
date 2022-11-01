import React from 'react'
import "../styles/Catalogo.css"

function Product({image, name, price}) {
  return (
    <div className='containerProduct'>
      <img src={image} alt="" className='img_product'/>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Product
