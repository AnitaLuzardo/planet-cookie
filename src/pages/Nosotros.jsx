import React from 'react';
import "../stylesheets/Nosotros.css"
import GlutenFree from "../images/gluten-free.png" 
import Fruit from "../images/frutas.png"

function Nosotros() {
  return (
    <div className='container_about'>
      <h1 className='title_nosotros'>Nosotros</h1>

      <div className='container_scroll'>
        <div className='content_container_us'>
          <div className='content_planet'>
            <h2 className='oval-half-red'>PLANET COOKIE</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta necessitatibus ad architecto.</p>
          </div>
          <div className='content_planet'>
            <h2 className='oval-half-red'>Avena sin gluten</h2>
            <img className='img_Nosotros' src={GlutenFree} alt="" />
          </div>
          <div className='content_planet'>
            <h2 className='oval-half-red'>Sabores naturales</h2>
            <img className='img_Nosotros' src={Fruit} alt="" />
          </div>
          <div className='content_planet'>
            <h2 className='oval-half-red'>Envios</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Dicta necessitatibus ad architecto.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros