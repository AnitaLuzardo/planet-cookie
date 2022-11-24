import "../styles/Detail.css";

function DetailProduct({product}) {

  return (
    <>
      <div className="containerContent">
        <h2 className="titleProductDl">{product.name}</h2>
        <span className="precio">Precio: {product.price}</span>
        <p>225gr de puro Sabor</p>
        <button className='bg-indigo-600 text-white py-1 px-4 rounded mt-10 
        hover:bg-indigo-400 duration-500 button_login'>Add to car</button>
      </div>
      <div className="contentDescription">
        <h3>Descripción del Producto</h3>
        <p>
          {product.description} <br />
          <span>Presentación: 225gr</span> 
        </p>
      </div>
    </>
  )
}

export default DetailProduct
