import React from 'react';
import "../styles/Detail.css";
import SlideShow from '../../../components/SlideShow';
import imagesDetail from '../helpers/ImgDetail.jsx';
import DetailProduct from '../components/DetailProduct';

function DetalleProduct() {
  return (
    <div className= "Detail">
      <div className='contentSlideDt'>
        <SlideShow
          images={imagesDetail}
          // small
          // width='45%'
          extraClasses='small'
          border='contenedorSLideShowDt'
          arrowsBottom
        />
        <div className="contentInfProduct">
          <DetailProduct />
        </div>
      </div>
    </div>
  )
}

export default DetalleProduct