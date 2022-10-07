import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/Login/form'
import '../styles/Login.css'

function Login() {
  return (
    <div className='container_login_form'> 
      <div className='content_form_login'>
        <h1 className='loginTitle'>Bienvenido</h1>
        <LoginForm />
        <p className='redirect_register'>
          No tienes cuenta? 
          <Link className="regist_redirect" to={"/register"}>Registrate aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Login