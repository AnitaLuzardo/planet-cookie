import React from 'react';
import "../styles/Detail.css";
import SlideShow from '../../../components/SlideShow';
import imagesDetail from '../helpers/ImgDetail.jsx';

function DetalleProduct() {
  return (
    <div className= "titleDetail">
      <div className='contentSlideDt'>
        <SlideShow
          images={imagesDetail}
          // small
          // width='45%'
          extraClasses='small'
          border='contenedorSLideShowDt'
          arrowsBottom
        />
        <div className="containerContent">
          <h2 className="titleProductDl">Galletas de Chocolate</h2>
          <span className="precio">Precio: $375,00</span>
          <p>225gr de puro Sabor</p>
          <button className='bg-indigo-600 text-white py-1 px-4 rounded mt-10 
          hover:bg-indigo-400 duration-500 button_login'>Add to car</button>
        </div>
      </div>
      <div className="contentDescription">
          <h3>Descripción del Producto</h3>
          <p>
          Galletas integrales elaboradas con avena y chocolate.
          Sin azúcar refinada, harina blanca, sin grasas bovinas, colorantes articiales o sinteticos.
          Ingredientes: harina integral, azúcar mascabo, chips de chocolate integral (azúcar integral mascabo, 
          pasta de cacao, manteca de cacao), aceite de girasol alto oleico, almendras, maní, almidón de maiz, 
          sal marina, RAI: bicarbonato de sodio (INS 500ii), AROMATIZANTE/SABORIZANTE, antioxidante natural (tocoferoles).
          Contiene: mani, almendras, derivados de trigo y avena. Puede contener trazas de leche. NO CONTIENE GLUTEN.
          <span>Presentación: 225gr</span> 
          </p>
        </div>
    </div>
  )
}

export default DetalleProduct