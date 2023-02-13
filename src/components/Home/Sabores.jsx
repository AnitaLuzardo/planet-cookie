import React from 'react';
import Style from '../../stylesheets/Home.module.css';
import imgSabores from './helpers/imgSabores';

function Sabores() {
  return (
    <div className={Style.containerContent}> 
      <h1 className={Style.title}>Nuestros Sabores</h1>
      <div className={Style.container}>
        {imgSabores.map((img, i) => {
          return(
            <img src={img.url} alt="" key={i} className= {Style.imgSabor}/>
          )
        })} 
      </div>
    </div>
  )
}

export default Sabores