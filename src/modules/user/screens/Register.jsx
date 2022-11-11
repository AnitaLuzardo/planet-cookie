import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from '../components/Register/RegisterForm'
import registerStyle from"../styles/Register.module.css"
import { fetchRegister, fetchRols } from '../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function Register() {
  const dispatch = useDispatch();
  const rols = useSelector(state => state.users.rols);
  // console.log('ROLES', rols);

  const errors = useSelector(state => state.users.errors);

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
    <div className={registerStyle.container_form_registeeer}>
      <div className={registerStyle.content_form_register}>
        <h1 className={registerStyle.register_title}>Registro</h1>
        {errors && (
          <p className={registerStyle.errors}>{errors}</p>
        )}
        <RegisterForm register= {register} />
        <p className={registerStyle.cuenta}>¿Ya tienes una Cuenta?
          <Link className={registerStyle.loginRedirect} to="/login"> Ingresá acá</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
