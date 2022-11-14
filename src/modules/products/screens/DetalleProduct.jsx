import React from 'react';
import "../styles/Detail.css";
import SlideShow from '../../../components/SlideShow';
import imagesDetail from '../helpers/ImgDetail.jsx'

// const ImgDetail = [
//   {
//     image: require('../helpers/imageCatalogo/cookies_chocochoco.jpg')
//   },
//   {
//     image: require('../helpers/imageCatalogo/cookie2.jpg')
//   },
//   {
//     image: require('../helpers/imageCatalogo/cookieCacao.jpg')
//   },
//   {
//     image: require('../helpers/imageCatalogo/cookieAvena.jpg')
//   }
// ]

function DetalleProduct() {
  return (
    <div className= "titleDetail">
      Detalle del Producto
      <SlideShow images={imagesDetail} />
    </div>
  )
}

export default DetalleProduct