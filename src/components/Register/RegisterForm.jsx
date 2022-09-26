import React from 'react'
import { useState } from 'react'
import "../../stylesheets/Register.css"

function RegisterForm() {
  const [date, setDate] = useState({ //setDate actualiza el objeto
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confPassword: ''
  })

  const handleSubmit = e => { //evita el procesamiento automatico 
    e.preventDefault()
  }

  const handleChange = (e) => {
    setDate ({
      ...date,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="container_register">
      <form className="container_form" onSubmit={handleSubmit} >
        <input type="text" 
          name="nombre"
          placeholder="Nombre"
          className="input_register"
          onChange={handleChange} //esta detectando el cambio del input
        />
        <input type="text" 
          name="apellido"
          placeholder="Apellido"
          className="input_register"
          onChange={handleChange}
        />
        <input type="email" 
          name="email"
          placeholder="Email"
          className="input_register"
          onChange={handleChange}
        />
        <input type="password" 
          name="password"
          placeholder="Password"
          className="input_register"
          onChange={handleChange}
        /> 
        <input type="password" 
          name="confPassword"
          placeholder="Confirmar Password"
          className="input_register"
          onChange={handleChange}
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

export default RegisterForm