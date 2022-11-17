import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Catalogo.css"

function Product({items}) {
  // {image, name, price}\
  return(
    items.map((item, i)=>{
      return(
        <Link to="/detail" className='containerProduct' key={i}>
          <img src={item.image} alt="" className='img_product'/>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </Link>
      )
    })
  )
}

export default Product
