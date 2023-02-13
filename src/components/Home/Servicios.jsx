import React from 'react';
import Style from '../../stylesheets/Home.module.css';


function Servicios({images}) {
  return (
    <div className={Style.containerServ}>
      <h1 className={Style.title}>Nuestros Servivios</h1>
      <div className={Style.infService}>
          {
            images.map((image, i) => {
              return (
                <div className={Style.contentInf} key={i}>
                  <img src={image.img} alt=""className= {Style.imgService}/>
                  <h2 className={Style.titleInf}>
                    {image.title}
                  </h2>
                  <p className={Style.infContentServ}>{image.parrafo}</p>
                </div>
              )
            }) 
          }
      </div>
    </div>
  )
}

export default Servicios