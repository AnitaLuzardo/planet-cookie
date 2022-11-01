import React from 'react';
import "../styles/Catalogo.css";
import Products from "../components/Product";
import { CookiesList } from "../helpers/CookiesList";
import FormFiltros from "../components/form"

function Catalogo() {
  return (
    <div>
      <h1 className='title_catalogo'>Nuestros Productos</h1>
      <FormFiltros />
      <div className='contentProduct'>
        {CookiesList.map((products, key) => {
          return (
            <Products 
              key={products.key}
              image={products.image}
              name={products.name}
              price={products.price}
            />
          )
        })}
      </div>
      <Products />
    </div>
  )
}

export default Catalogo