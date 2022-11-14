import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/Login/form'
import loginStyle from '../styles/Login.module.css';
import { fetchLogin } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.session.errors);

  const login = async (form) => {
    await fetchLogin(form, dispatch);
  }

  return (
    <div className={loginStyle.container_login_form}> 
      <div className={loginStyle.content_form_login}>
        <h1 className={loginStyle.login_title}>Bienvenido</h1>
        {errors && (
          <p className={loginStyle.errors}>{errors}</p>
        )}
        <LoginForm login={login} />
        <p className={loginStyle.redirect_register}>
          No tienes cuenta? 
          <Link className={loginStyle.regist_redirect} to={"/register"}>Registrate aquí</Link>
        </p>
      </div>
    </div>
  )
}

export default Login