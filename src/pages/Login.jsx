import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import '../stylesheets/Login.css'

function Login() {
  return (
    <div className='content_form_login'>
      <h1 className='loginTitle'>Bienvenido</h1>
      <LoginForm />
    </div>
  )
}

export default Login
