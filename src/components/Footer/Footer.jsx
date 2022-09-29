import React from 'react'
import { Link } from 'react-router-dom';
import "../../stylesheets/Footer.css";
import FacebookIcon from '../../images/iconFacebook.png';
import InstagramIcon from '../../images/iconInstagram.png'
import TiktokIcon from '../../images/tiktokIconI.png'

function Footer() {
  return (
    <>
      <div className='container_footer'>
        <div className='content_contact_redes'>
          <Link to={"/nosotros"}>
            Nosotros
          </Link>
          <Link to={"/contactanos"}>
            Contactanos
          </Link>
        </div>
        <div className='redes'>
          <h1>SIGUENOS</h1>
          <div className='container_redes'>
            <a href="https://www.facebook.com/">
              <img className="imgRedes"  src={FacebookIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="imgRedes" src={InstagramIcon} alt="" />
            </a>
            <a href="https://www.tiktok.com/">
              <img className="imgRedes" src={TiktokIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="content_contact_redes">
            <p>CENTRO DE ATENCIÓN AL CLIENTE</p>
            <p>Lunes a Viernes de 08:30 a 18:30hs  
                Sábados de 9:00 a 17:30hs</p>
        </div>
      </div>
    </>
  )
}

export default Footer
