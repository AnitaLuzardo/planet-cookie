import React from 'react'
import { useState } from 'react';
import loginStyle from '../../styles/Login.module.css';

const validateForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
  if(!form.email) {
    errors.email = 'El campo "Email" es requerido'
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "Email" es inconrrecto'
  }

  if(!form.pwd) {
    errors.pwd = 'El campo "Password" es requerido'
  }

  return errors;
}

function LoginForm({ login }) {
//==============================================================================
  const [dataLogin, setDataLogin] = useState({
    email: '',
    pwd: ''
  });

  const [errors, setErrors] = useState({})
//==============================================================================  
  
  const handleChange = (e) => {
    // console.log('name', e.target.name, '- value', e.target.value);

    const{name, value} = e.target
    setDataLogin({
      ...dataLogin,
      [name]: value
      // [e.target.name]: e.target.value
    });
  }
//============================================================================== 
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(dataLogin))
  };
//==============================================================================
  const handleSubmit = e => { //evita el procesamiento automatico 
    e.preventDefault();
    login(dataLogin);
  }
//=============================================================================

  return (
    <>
      <form className={loginStyle.container_form} onSubmit={handleSubmit} >
        <input type="email" 
          name="email"
          placeholder="Email"
          className={loginStyle.input_login}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <p className={loginStyle.errorsLogin}> {errors.email} </p>}
        <input type="password" 
          name="pwd"
          placeholder="Password"
          className={loginStyle.input_login}
          onChange={handleChange}
          onBlur={handleBlur}
        /> 
        {errors.pwd && <p className={`${loginStyle.errorsLogin} ${loginStyle.pwdStyle}`}>{errors.pwd}</p>}
        <button 
          type='submit'
          className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40">
          Iniciar sesión
        </button>
      </form>
    </>
  )
}

export default LoginForm