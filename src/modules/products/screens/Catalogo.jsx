import React from 'react';
import "../styles/Catalogo.css";
import Products from "../components/Product";
import { products } from "../helpers/Products";
import FormFiltros from "../components/form"

function Catalogo() {

  return (
    <div>
      <h1 className='title_catalogo'>Nuestros Productos</h1>
      <FormFiltros />
      <div className='contentProduct'>
        {/* {CookiesList.map((products, i) => {
          return ( */}
            <Products 
              // key={i}
              // image={products.image}
              // name={products.name}
              // price={products.price}
              items={products}
            />
          {/* )
        })} */}
      </div>
    </div>
  )
}

export default Catalogo