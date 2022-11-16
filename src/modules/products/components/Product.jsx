import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Catalogo.css"

function Product({image, name, price}) {
  return (
    <Link to="/detail" className='containerProduct'>
      <img src={image} alt="" className='img_product'/>
      <h3>{name}</h3>
      <p>{price}</p>
    </Link>
  )
}

export default Product
