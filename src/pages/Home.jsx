import React from 'react';
import Sabores from '../components/Home/Sabores';
import Servicios from '../components/Home/Servicios';
import SlideShow from '../components/SlideShow';
import imgHome from '../pages/helpers/imgHome';
import Style from '../stylesheets/Home.module.css'
import imgServicios from '../components/Home/helpers/ImgServicios';
 
function Home() {

  return (
    <div className={Style.homeContainer}> 
      <SlideShow 
        images={imgHome} 
        paddingHome="contenedorPrincipalHome"
        transition={true}
      />
      <Sabores />
      <Servicios 
        images={imgServicios}
      />
    </div>
  )
}

export default Home