import React from 'react';
import "../stylesheets/Contactanos.css"
import FormText from "../components/contactForm/form"

function Contactanos() {
  return (
    <div className='container_contact'>
      <div className='content_inf'>
        <h1 className='title_contact'>Contactanos</h1>
        <h3 className='contact_h3'>
          Oye dejanos tu consulta!, 
          tambien puedes visitar nuestras
          redes.
        </h3>
        <p className='content_p'>Nuestros horarios de atención son de Lunes a Viernes de 08:30 a 18:30hs  
          Sábados de 9:00 a 17:30hs
        </p>
      </div>
      <div className='container_form_contact'>
        <FormText />
      </div>
    </div>
  )
}

export default Contactanos