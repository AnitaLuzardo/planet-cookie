import React from 'react';
import "../styles/Detail.css";
import SlideShow from '../../../components/SlideShow';
import imagesDetail from '../helpers/ImgDetail.jsx'

function DetalleProduct() {
  return (
    <div className= "titleDetail">
      Detalle del Producto
      <div className='contentSlideDt'>
        <SlideShow
          images={imagesDetail}
          // small
          // width='45%'
          extraClasses='small'
          border='contenedorSLideShowDt'
          arrowsBottom
        />
      </div>
    </div>
  )
}

export default DetalleProduct