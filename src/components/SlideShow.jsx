import React from 'react'
import '../stylesheets/SlideShow.css'
import img1 from '../images/cookieI.jpg'
import img2 from '../images/cookieII.jpg'
import img3 from '../images/cookieIII.jpg'
import img4 from '../images/cookieIV.jpg'
import { useRef, useEffect } from 'react'

const SlideShow = () => {
  const slideShowCont = useRef(null);
  const intervaloSlideShow = useRef(null)

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
    console.log('before');
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
    intervaloSlideShow.current = setInterval(() => {
      next();
    }, 5000);
  })

  return (
    <>
      <div className='contenedorPrincipal'>
        <div className='contenedorSLideShow' ref={slideShowCont}>
          <div className='slide'>
            <img src={img1} alt="" />
            <p className='textSlide'>Bienvenidos a Planet Cookie</p>
          </div>
          <div className='slide'>
            <img src={img2} alt="" />
            <p className='textSlide'>Sabores por descubrir</p>
          </div>
          <div className='slide'>
            <img src={img3} alt="" />
            <p className='textSlide'>Libre de gluten</p>
          </div>
          <div className='slide'>
            <img src={img4} alt="" />
            <p className='textSlide'>Conoce nuestro Planeta!</p>
          </div>
        </div>
        <button className='buttonControl' onClick={before}> 
          <box-icon name='left-arrow-alt' className= "arrow"></box-icon> 
        </button>
        
        <button className='buttonControl rightControl' onClick={next}>
          <box-icon name='right-arrow-alt' className= "arrow"></box-icon>
        </button>
      </div>
    </>
  )
}

export default SlideShow