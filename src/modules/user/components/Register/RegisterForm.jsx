import React from 'react';
import { useState } from 'react';
import registerStyle from"../../styles/Register.module.css"
// import "../../styles/Register.css";

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!form.name) {
    errors.name = 'El campo "Nombre" es requerido'
  } else if(!regexName.test(form.name.trim())){
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco'
  }

  if(!form.lastName) {
    errors.lastName = 'El campo "Apellido" es requerido'
  } else if(!regexName.test(form.lastName.trim())){
    errors.lastName = 'El campo "Apellido" solo acepta letras y espacios en blanco'
  }

  if(!form.phone) {
    errors.phone = 'El campo "Teléfono" es requerido'
  }

  if(!form.email) {
    errors.email = 'El campo "Email" es requerido'
  } else if(!regexEmail.test(form.email.trim())){
    errors.email = 'El campo "Email" es inconrrecto'
  }

  if(!form.pwd) {
    errors.pwd = 'la contraseña es requerido'
  }

  if(!form.confirmarPassword) {
    errors.confirmarPassword = 'Debe confirmar su contraseña'
  }

  return errors;
}  

function RegisterForm({ register }) {
  const [data, setData] = useState({ //setDate actualiza el objeto
    name: '',
    lastName: '',
    phone: '',
    email: '',
    pwd: '',
    confirmarPassword: ''
  })

  const [errors, setErrors] = useState({})
//============================================================================
  const handleChange = (e) => {
    const {name, value} = e.target
    setData ({
      ...data,
      [name]: value
    });
  }
//============================================================================
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(data))
  }
//============================================================================
  const handleSubmit = e => { //evita el procesamiento automatico 
    e.preventDefault()
    register(data);
  }

  return (
    <form className={registerStyle.container_form} onSubmit={handleSubmit} >
      <input type="text" 
        name="name"
        placeholder="Nombre"
        className={registerStyle.input_register}
        onChange={handleChange} //esta detectando el cambio del input
        onBlur= {handleBlur}
      />
      {errors.name && <p className={registerStyle.errorsRegister}>{errors.name}</p>}

      <input type="text" 
        name="lastName"
        placeholder="Apellido"
        className={registerStyle.input_register}
        onChange={handleChange}
        onBlur= {handleBlur}
      />
      {errors.lastName && <p className={registerStyle.errorsRegister}>{errors.lastName}</p>}

      <input type="number" 
        name="phone"
        placeholder="Teléfono"
        className={registerStyle.input_register}
        onChange={handleChange}
        onBlur= {handleBlur}
      />
      {errors.phone && <p className={registerStyle.errorsRegister}>{errors.phone}</p>}

      <input type="email" 
        name="email"
        placeholder="Email"
        className={registerStyle.input_register}
        onChange={handleChange}
        onBlur= {handleBlur}
      />
      {errors.email && <p className={registerStyle.errorsRegister}> {errors.email} </p>}

      <input type="password" 
        name="pwd"
        placeholder="Password"
        className={registerStyle.input_register}
        onChange={handleChange}
        onBlur= {handleBlur}
      /> 
      {errors.pwd && <p className={registerStyle.errorsRegister}> {errors.pwd} </p>}

      <input type="password" 
        name="confirmarPassword"
        placeholder="Confirmar Password"
        className={registerStyle.input_register}
        onChange={handleChange}
        onBlur= {handleBlur}
      />
      {errors.confirmarPassword && <p className={`${registerStyle.errorsRegister} ${registerStyle.confpwd}` }> {errors.confirmarPassword} </p>}
      <button 
        type='submit'
        className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40">
        Registrarme
      </button>
    </form>
  )
}

export default RegisterForm