import React from 'react';
import "../styles/Detail.css"
import leftArrow from '../../../images/left-arrow-alt.png';
import rightArrow from '../../../images/right-arrow-alt.png';
import cookieI from "../helpers/imageCatalogo/cookies_chocochoco.jpg";
import cookieII from "../helpers/imageCatalogo/cookie2.jpg"
import cookieIII from "../helpers/imageCatalogo/cookieCacao.jpg";
import cookieIV from "../helpers/imageCatalogo/cookieAvena.jpg";
import { useRef } from 'react';

const detailProduct = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const slideShowCont = useRef(null);

  const next = () => {
    // console.log('Siguiente', slideShowCont.current);
    if(slideShowCont.current.children.length > 0){
      const firstElement = slideShowCont.current.children[0];

      slideShowCont.current.style.transition = `1000ms ease-out all`;

      const sizeSlide = slideShowCont.current.children[0].offsetWidth;

      slideShowCont.current.style.transform = ` translateX(-${sizeSlide}px)`;

      const transicion = () => {
        slideShowCont.current.style.transition = 'none';
        slideShowCont.current.style.transform = `translateX(0)`;

        slideShowCont.current.appendChild(firstElement);

        slideShowCont.current.removeEventListener('transitionend', transicion)
      }

      slideShowCont.current.addEventListener('transitionend', transicion)
    }
  }
  
  const before = () => {
    // console.log('Anterior');
    if(slideShowCont.current.children.length > 0){
      const index = slideShowCont.current.children.length -1;
      const lastElement = slideShowCont.current.children[index];
      slideShowCont.current.insertBefore(lastElement, slideShowCont.current.firstChild);

      slideShowCont.current.style.transition = 'none';

      const sizeSlide = slideShowCont.current.children[0].offsetWidth;
      slideShowCont.current.style.transform = `translateX(-${sizeSlide}px)`

      setTimeout(() => {
        slideShowCont.current.style.transition = '1000ms ease-out all';
        slideShowCont.current.style.transform = ` translateX(0)`
      }, 30)
    }
  }

  return (
    <div className="containerDetail">
      <div className="slideshow" ref={slideShowCont}>
        <div className="slideProduct">
          <img src={cookieI} alt="" className="img_productDetail"/>
        </div>
        <div className="slideProduct">
          <img src={cookieII} alt="" className="img_productDetail"/>
        </div>
        <div className="slideProduct">
          <img src={cookieIII} alt="" className="img_productDetail"/>
        </div>
        <div className="slideProduct">
          <img src={cookieIV} alt="" className="img_productDetail"/>
        </div>
      </div>
      
        <button className='control_slideProduct leftButton' onClick={before}>
          <img src={leftArrow} alt="" className='leftRightButton'/>
        </button>
        <button className='control_slideProduct' onClick={next} >
          <img src={rightArrow} alt="" className='leftRightButton'/>
        </button>
     
    </div>
  )
}

export default detailProduct