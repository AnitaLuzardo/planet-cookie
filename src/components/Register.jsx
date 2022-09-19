import React from 'react'
import "../stylesheets/Register.css"

function Register() {
  
  const handleSubmit = e => {

  }
  return (
    <div className="container_register">
      
      <form className="container_form" onSubmit={handleSubmit} >
      <h1 className="register_title"> REGISTRO </h1>
        <input type="text" 
        name="nombre"
        placeholder="Nombre"
        className="input_register"
        />
        <input type="text" 
        name="apellido"
        placeholder="Apellido"
        className="input_register"
        />
        <input type="text" 
        name="email"
        placeholder="Email"
        className="input_register"
        />
        <input type="password" 
        name="password"
        placeholder="Password"
        className="input_register"
        /> 
        <input type="password" 
        name="confPassword"
        placeholder="Confirmar Password"
        className="input_register"
        />
        <button 
          type='submit'
          className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-400 duration-500 w-40">
          Registrarme
        </button>
      </form>
    </div>
  )
}

export default Register