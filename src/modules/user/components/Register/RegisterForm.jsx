import React from 'react';
import { useState } from 'react';
import "../../styles/Register.css";

function RegisterForm() {
  const [data, setData] = useState({ //setDate actualiza el objeto
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
    setData ({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
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
  )
}

export default RegisterForm