import React from 'react';
import '../stylesheets/SlideShow.css';
import leftArrow from '../images/left-arrow-alt.png';
import rightArrow from '../images/right-arrow-alt.png';
// import ImgSlide from './slideHome';
import imgHome from '../pages/helpers/imgHome';
import { useRef } from 'react';
import {useEffect} from 'react'


const SlideShow = () => {
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
    const intervalId = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <>
      <div className='contenedorPrincipal'>
        <div className='contenedorSLideShow' ref={slideShowCont}>
         {imgHome.map((image, i) => {
          return(
            <div className='slide' key={i}>
              <img src={image.img} alt="" />
              {image.title ? <p className='textSlide'>{image.title}</p> : null}
            </div>
          
            // <ImgSlide 
            //   key={i}
            //   img= {image.img}
            //   title= {image.title}
            // />
          )
         })}
        </div>
        <button className='buttonControl' onClick={before}> 
          <img src={leftArrow} alt="" className='arrow box-icon'/>
          {/* <box-icon name='left-arrow-alt' className= "arrow"></box-icon>  */}
        </button>
        <button className='buttonControl rightControl' onClick={next}>
          <img src={rightArrow} alt="" className='arrow box-icon'/>
          {/* <box-icon name='right-arrow-alt' className= "arrow"></box-icon> */}
        </button>
      </div>
    </>
  )
}

export default SlideShow