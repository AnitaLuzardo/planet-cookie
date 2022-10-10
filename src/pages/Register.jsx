import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import "../stylesheets/Register.css"

function Register() {
  return (
    <div className='container_form_registeeer'>
      <div className='content_form_register'>
        <h1 className='register_title'>Registro</h1>
        <RegisterForm />
        <p className="cuenta">¿Ya tienes una Cuenta?
          <Link className='loginRedirect' to="/login"> Ingresá acá</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
