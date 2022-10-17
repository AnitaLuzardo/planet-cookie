import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import "../styles/Register.css"
import { fetchRegister } from '../actions'
import { useDispatch } from 'react-redux'



function Register() {
  const dispatch = useDispatch();

  const register = async (form) => {
    await fetchRegister (form, dispatch)
  }

  return (
    <div className='container_form_registeeer'>
      <div className='content_form_register'>
        <h1 className='register_title'>Registro</h1>
        <RegisterForm register= {register}/>
        <p className="cuenta">¿Ya tienes una Cuenta?
          <Link className='loginRedirect' to="/login"> Ingresá acá</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
