import React from 'react'
import emailjs from '@emailjs/browser';
// import { useState } from 'react';

const form = () => {
  // const initialData = {
  //   name: '',
  //   email: '',
  //   texto: ''
  // };

  const sendEmail = (event) => {
    event.preventDefault();

    console.log('enviando formulario')

    emailjs.sendForm('service_uq5wzh8', 'template_rpghgif', event.target, 'OkvLQcE4Ih-vVw5yq')
    .then(response => console.log('Respuesta', response))
    .catch(error => console.log('ERROR', error))
  }

  return (
    <form className='content_form' onSubmit={sendEmail}>
      <input type="text" 
        name="name"
        placeholder="Nombre"
        className="contact_input"
        onBlur={(e) => console.log(e.target.value)}
      />
      {/* <div>
        <p className=''>Debe colocar su Nombre!</p>
      </div> */}
      <input type="email" 
        name="email"
        placeholder="Email"
        className="contact_input"
      />
      <textarea 
        type= "text"
        name= "texto"
        placeholder= "Escriba su mensaje aquí"
        className="contact_input_text"
      />
      <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40 mt-4"> 
        Enviar 
      </button>
    </form>
  )
}

export default form