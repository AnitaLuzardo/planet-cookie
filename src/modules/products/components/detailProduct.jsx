import React from 'react';
import "../styles/Detail.css"
import leftArrow from '../../../images/left-arrow-alt.png';
import rightArrow from '../../../images/right-arrow-alt.png';
import cookieI from "../helpers/imageCatalogo/cookies_chocochoco.jpg";
import cookieII from "../helpers/imageCatalogo/cookies_chocoAlmendra.jpg"
import cookieIII from "../helpers/imageCatalogo/cookieCacao.jpg";
import cookieIV from "../helpers/imageCatalogo/cookieAvena.jpg";
import { useRef } from 'react';

const next = () => {
  console.log('Siguiente');
}

const before = () => {
  console.log('Anterior');
}

function detailProduct() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const slideShowCont = useRef(null);

  return (
    <div className='containerPrincipal'>
      <div className='slideshow' ref={slideShowCont}>
        <div className='slideProduct'>
          <img src={cookieI} alt="" className='img_productDetail'/>
        </div>
        <div className='slideProduct'>
          <img src={cookieII} alt="" className='img_productDetail'/>
        </div>
        <div className='slideProduct'>
          <img src={cookieIII} alt="" className='img_productDetail'/>
        </div>
        <div className='slideProduct'>
          <img src={cookieIV} alt="" className='img_productDetail'/>
        </div>
      </div>
      <div className='container_control'>
        <button className='control_slideProduct' onClick={before}>
          <img src={leftArrow} alt="" className='leftRightButton'/>
        </button>
        <button className='control_slideProduct' onClick={next} >
          <img src={rightArrow} alt="" className='leftRightButton'/>
        </button>
      </div>
    </div>
  )
}

export default detailProduct