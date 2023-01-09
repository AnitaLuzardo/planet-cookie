import React from 'react';
import '../stylesheets/SlideShow.css';
import leftArrow from '../images/left-arrow-alt.png';
import rightArrow from '../images/right-arrow-alt.png';
import { useRef } from 'react';
import {useEffect} from 'react'


const SlideShow = ({
  images,
  width,
  // small,
  paddingHome,
  transition,
  border,
  extraClasses,
  arrowsBottom
}) => {
  const slideShowCont = useRef(null);

  const next = () => {
    //Comprobamos que el slide tenga elementos
    if(slideShowCont.current.children.length > 0) {
      //Obtenemos el primero el elemento del slide
      const firstElement = slideShowCont.current.children[0];

      //Establecemos la transicion para el slide
      slideShowCont.current.style.transition = `1000ms ease-out all`;

      //Obtenemos el tamaño del Slide
      const sizeSlide = slideShowCont.current.children[0].offsetWidth;

      //Movemos el slide
      slideShowCont.current.style.transform = ` translateX(-${sizeSlide}px)`

      const transicion = () => {
        //Reiniciamos la posicion del Slideshow
        slideShowCont.current.style.transition = 'none';
        slideShowCont.current.style.transform = `translateX(0)`;

        //tomamos el primer elemento y lo mandamos al final.
        slideShowCont.current.appendChild(firstElement);

        slideShowCont.current.removeEventListener('transitionend', transicion)
      }

      //Eventlistener para cuando termine la animacion.
      slideShowCont.current.addEventListener('transitionend', transicion)
    }
  }
  
  const before = () => {
    if(slideShowCont.current.children.length > 0) {
      //Obtener el ultimo elemento del slide.
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

  useEffect(() => {
    if (transition) {
      const intervalId = setInterval(() => {
        next();
      }, 3000);
      return () => {
        clearInterval(intervalId);
      }
    }
  }, [transition])

  return (
    <>
      <div
        // className={`contenedorPrincipal ${small ? 'small' : null}`}
        className={`contenedorPrincipal ${extraClasses ? extraClasses : null} 
        ${paddingHome ? paddingHome : undefined}
        ${border ? border : undefined}`}
        style={width ? { width } : undefined}
      >
        <div className="contenedorSLideShow" ref={slideShowCont}>
         {images.map((image, i) => {
          return(
            <div className={`slide ${border ? border : undefined}`} key={i}>
              <img src={image.url} alt="" />
              {image.title ? <p className='textSlide'>{image.title}</p> : null}
            </div>
          )
         })}
        </div>
        <button className={arrowsBottom ? undefined : 'buttonControl leftButton' } onClick={before}> 
          <img src={leftArrow} alt="" className='arrow box-icon'/>
        </button>
        <button className={arrowsBottom ? undefined : 'buttonControl rightControl'} onClick={next}>
          <img src={rightArrow} alt="" className='arrow box-icon'/>
        </button>
      </div>
    </>
  )
}

export default SlideShow