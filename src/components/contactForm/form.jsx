import React from 'react'

function form() {
  return (
    
      <form className='content_form'>
        <input type="text" 
          name="name"
          placeholder="Nombre"
          className="contact_input"
        />
        <input type="email" 
          name="email"
          placeholder="Email"
          className="contact_input"
        />
        <textarea 
          type= "text"
          name= "texto"
          placeholder= "Escriba su mensaje aquí"
          className="contact_input_text"
        />
        <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-400 duration-500 w-40 mt-8"> 
          Enviar 
        </button>
      </form>
  
  )
}

export default form