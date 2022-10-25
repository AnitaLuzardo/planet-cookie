import React from 'react'
import { useState } from 'react';
// import loginApi from '../../Services/loginApi';

function LoginForm({ login }) {

  // const estado = useState(un valor cualquiera);
  // estado = [null, callback];
  // estado[0] = un valor cualquiera;
  // estado[1] = callback;
  // estado[1](otro valor cualquiera)
  // estado[0] = otro valor cualquiera
  // const [var1, var2] = [valor1, valor2, valor3, ..., valorN]; array[0]
  const [dataLogin, setDataLogin] = useState({
    email: '',
    pwd: ''
  });

//   const [error, setError] = useState(false);

  const handleSubmit = e => { //evita el procesamiento automatico 
    e.preventDefault();
    
    // const {email, pwd} = dataLogin;
    // if(!email || !pwd){
    //   // setError(true);
    //   alert('Debe completar los campos');
    //   return;
    // }

    login(dataLogin);
  }

  const handleChange = (e) => {
    // console.log('name', e.target.name, '- value', e.target.value);
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value
    });
  }

//   const ViewError = () => (
//     <p className="text-center m-4 text-red-500">Debe llenar todos los campos</p>
//   ) 

  return (
    <>
      {/* {
        error ? <ViewError /> : null
      } */}
      <form className="container_form" onSubmit={handleSubmit} >
        <input type="email" 
          name="email"
          placeholder="Email"
          className="input_register"
          onChange={handleChange}
        />
        <input type="password" 
          name="pwd"
          placeholder="Password"
          className="input_register"
          onChange={handleChange}
        /> 
        <button 
          type='submit'
          className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-400 duration-500 w-40">
          Iniciar sesión
        </button>
      </form>
    </>
  )
}

export default LoginForm