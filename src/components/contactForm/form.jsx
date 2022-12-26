import React from 'react'
import { useForm } from './useForm';

const initialForm = {
    name: '',
    email: '',
    texto: ''
  };

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if(!form.name.trim()){
    errors.name = 'El campo "Nombre" es requerido'
  } else if(!regexName.test(form.name.trim())) {
    errors.name = 'El campo "Nombre" solo acepta letras y espacios en blanco'
  };

  if(!form.email.trim()){
    errors.email = 'El campo "Email" es requerido'
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = 'El campo "Email" es inconrrecto'
  }

  if(!form.texto.trim()){
    errors.texto = 'El campo "Mensaje" es requerido'
  } else if(!regexComments.test(form.texto.trim())){
    errors.texto = 'El campo "Mensaje" debe tener solo 255 caracteres'
  }

  return errors;
}

const form = () => {
  
  const{
    form, 
    errors, 
    response,
    handleChange,
    handleBlur,
    handleSubmit
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm(initialForm, validationsForm);

  // const sendEmail = (event) => {
  //   event.preventDefault();

  //   console.log('enviando formulario')

  //   emailjs.sendForm('service_uq5wzh8', 'template_rpghgif', event.target, 'OkvLQcE4Ih-vVw5yq')
  //   .then(response => console.log('Respuesta', response))
  //   .catch(error => console.log('ERROR', error))
  // }

  return (
    <>
      <form className='content_form' onSubmit={handleSubmit}>
        <input type="text" 
          name="name"
          placeholder="Nombre"
          className="contact_input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name} 
          required
        />
        {errors.name && <p className='errorsContact'>{errors.name}</p>}
        <input type="email" 
          name="email"
          placeholder="Email"
          className="contact_input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email} 
          required
        />
        {errors.email && <p className='errorsContact'>{errors.email}</p>}
        <textarea 
          type= "text"
          name= "texto"
          placeholder= "Escriba su mensaje aquí"
          className="contact_input_text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.texto} 
          required
        />
        {errors.texto && <p className='errorsContact'>{errors.texto}</p>}
        <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40 mt-4 mb-6"> 
          Enviar 
        </button>
      </form>
      {response && <p className='exito'>Tu mensaje fue enviado con exito!!!</p>}
    </>
  )
}

export default form