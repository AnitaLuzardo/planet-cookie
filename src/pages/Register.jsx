import React from 'react'
import RegisterForm from '../components/Register/RegisterForm'
import "../stylesheets/Register.css"

function Register() {
  return (
    <div className='content_form_register'>
      <h1 className='register_title'>Registro</h1>
      <RegisterForm />
    </div>
  )
}

export default Register
