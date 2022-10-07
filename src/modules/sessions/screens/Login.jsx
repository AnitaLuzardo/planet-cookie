import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/Login/form'
import '../styles/Login.css';
import { fetchLogin } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.session.errors);

  const login = async (form) => {
    await fetchLogin(form, dispatch);
  }

  return (
    <div className='container_login_form'> 
      <div className='content_form_login'>
        <h1 className='loginTitle'>Bienvenido</h1>
        {errors && (
          <p>{errors}</p>
        )}
        <LoginForm login={login} />
        <p className='redirect_register'>
          No tienes cuenta? 
          <Link className="regist_redirect" to={"/register"}>Registrate aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Login