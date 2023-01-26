import React from 'react'
import Style from '../styles/Create&Edit.module.css'

function ComponentCreateEdit() {
  return (
    <div className={Style.content}>
      <h1 className={Style.title}>Crear y Editar Producto</h1>
      <form action="" className={Style.formProduct}>
         <input 
          type="text" 
          name='name'
          className={Style.inputProduct}
          placeholder='Nombre del producto'
        />
        <input 
          type="text" 
          name='flavor'
          className={Style.inputProduct}
          placeholder='sabor del producto'
        />
        <input 
          type="text" 
          name='flavor'
          className={Style.inputProduct}
          placeholder='sabor del producto'
        />
        <input 
          type="number" 
          name='price'
          className={Style.inputProduct}
          placeholder='precio'
        />
        <textarea 
          type= "text"
          name= "texto"
          placeholder= "Descripcion del producto"
          className={Style.textarea}
        />
        <div>
          <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40 mt-4 mb-6 mr-6"> 
            Crear 
          </button>
          <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40 mt-4 mb-6"> 
            Editar 
          </button>
        </div>
      </form>
    </div>
  )
}

export default ComponentCreateEdit
