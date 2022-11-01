import React from 'react'

function form() {
  return (
    <div>
      <h2 className='title_filter'>FILTROS</h2>
      <form action="" className="formFilter">
        <div className='formContainerProduct'>
          <div className='contentCheck'>
            <input type="check" className='checkFilter' /> Chocolate <br />
            <input type="check" className='checkFilter' /> Vainilla <br />
            <input type="check" className='checkFilter' /> Naranja  
          </div>
          <div className='contentCheck'> 
          <input type="check" className='checkFilter' /> Frutilla <br />
          <input type="check" className='checkFilter' /> Limon <br />
          <input type="check" className='checkFilter' /> Frutos secos
          </div>
        </div>
        <button className="bg-indigo-600 text-white py-1 px-4 rounded  
         hover:bg-indigo-400 duration-500 ">
          Filtrar
        </button>
      </form>
    </div>
  )
}

export default form