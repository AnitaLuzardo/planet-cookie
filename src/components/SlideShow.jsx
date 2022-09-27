import React from 'react'
import '../stylesheets/SlideShow.css'
import img1 from '../images/cookieI.jpg'
import img2 from '../images/cookieII.jpg'
import img3 from '../images/cookieIII.jpg'
import img4 from '../images/cookieIV.jpg'
// import { useState } from 'react'

// function Carousel() {
//   const images = ['cookieI.jpg, cookieII.jpg, cookieIII.jpg, cookieIV.jpg'];
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const selectNewImage = (index: number, images: string[], next = true) => {
//     const condition = next ? selectedIndex < images.length : selectedIndex > 0;
//     const nextIndex =  next ?  (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex -1 : images.length -1;
//     setSelectedImage (images[nextIndex]);
//     setSelectedIndex(nextIndex);
//   }

//   const previous = () => {
    // const condition = selectedIndex > 0;
    // const nextIndex = condition ? selectedIndex -1 : images.length -1;
    // setSelectedImage(nextIndex)
    // setSelectedIndex(nextIndex)
  //   selectNewImage(selectedIndex, images, false);
  // }

  // const next = () => {
  //   // const condition = selectedIndex < images.length;
  //   // const nextIndex = condition ? selectedIndex +1 : 0;
  //   selectNewImage(selectedIndex, images);
  // }

//   return (
//     <div>
//       <img src="" alt="" />
//     </div>
//   )
// }

// export default Carousel

const next = () => {
  console.log('Siguiente');
}

const antes = () => {
  console.log('Anterior');
}

const SlideShow = () => {
  return (
    <div className='contenedorPrincipal'>
      <div className='contenedorSLideShow'>
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
          <p className='textSlide'>Libres de gluten</p>
        </div>
        <div className='slide'>
          <img src={img4} alt="" />
          <p className='textSlide'>Conoce nuestro Planeta!</p>
        </div>
      </div>
      <div className='controls'>
      
        <button className='buttonControl' onClick={antes}> 
          <box-icon name='left-arrow-alt' className= "arrow"></box-icon>  
        </button>
        
        <button className='buttonControl rightControl' onClick={next}>
          <box-icon name='right-arrow-alt' className= "arrow"></box-icon>
        </button>
      </div>
    </div>
  )
}

export default SlideShow