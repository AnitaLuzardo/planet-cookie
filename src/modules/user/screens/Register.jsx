import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import "../styles/Register.css"
import { fetchRegister, fetchRols } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Register() {
  const dispatch = useDispatch();
  const rols = useSelector(state => state.users.rols)
  // console.log('ROLES', rols);

  useEffect(() => {
    fetchRols(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function register(form) {
    const result = rols.find(({nombre}) => nombre === 'Cliente');
    // console.log('RESULTADOS', result);

    form.id_rol = result.id;
    // console.log('FORMULARIO', form);

    await fetchRegister(form, dispatch)
  }

  return (
    <div className='container_form_registeeer'>
      <div className='content_form_register'>
        <h1 className='register_title'>Registro</h1>
        <RegisterForm register= {register} />
        <p className="cuenta">¿Ya tienes una Cuenta?
          <Link className='loginRedirect' to="/login"> Ingresá acá</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
