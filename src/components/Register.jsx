import React from 'react'
import "../stylesheets/Register.css"

function Register() {
  return (
    <div>
      <h1 className="register_title">Bienvenino a Register</h1>
      <form action="">
        <input type="text" 
        name="nombre"
        placeholder="Nombre"
        />
      </form>
    </div>
  )
}

export default Register