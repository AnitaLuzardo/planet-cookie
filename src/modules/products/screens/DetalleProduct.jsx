import React, {useEffect, useState} from 'react';
import "../styles/Detail.css";
import SlideShow from '../../../components/SlideShow';
import imagesDetail from '../helpers/ImgDetail.jsx';
import DetailProduct from '../components/DetailProduct';
import { products } from "../helpers/Products";
import { useParams } from "react-router-dom"

// const product =
// {
//   id: 1,
//   name: "Galletas de Chocolate",
//   // image: require('./imageCatalogo/cookies_chocochoco.jpg'),
//   price: "$ 345.00",
//   description: 
//     'Galletas integrales elaboradas con avena y chocolate  NO CONTIENE GLUTEN azúcar integral mascabo pasta de cacao manteca de cacao aceite de girasol alto oleico almendras maní almidón de maiz'
// }

function DetalleProduct() {

  const [data, setData] = useState(null);
  // console.log('Contiene =====>', data)

  const {id} = useParams();
  // console.log("Contiene", id);

  useEffect(()=> {
    let detailProd = products.find(product => {
      // eslint-disable-next-line eqeqeq
      return product.id == id
    })
    setData(detailProd)
    //console.log(detailProd)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if(!data) {
    return(
      <p className="ring-red-700 mt-20 text-center 
        errorDetail">El producto no Existe</p>
    )
  }

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
          <DetailProduct product={data} />
        </div>
      </div>
    </div>
  )
}

export default DetalleProduct