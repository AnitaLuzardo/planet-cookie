import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/Login/LoginForm'
import '../stylesheets/Login.css'

function Login() {
  return (
    <div className='content_form_login'>
      <h1 className='loginTitle'>Bienvenido</h1>
      <LoginForm />
      <p className='redirect_register'>
        No tienes cuenta? 
        <Link className="regist_redirect" to={"/registro"}>Registrate aquí</Link>
      </p>
    </div>
  )
}

export default Login
