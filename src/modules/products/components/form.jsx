import React from 'react'

function form() {
  return (
    <div>
      <h2 className='title_filter'>FILTROS</h2>
      <form action="" className="formFilter">
        <div className='formContainerProduct'>
          <div className='contentCheck'>
            <input type="checkbox" className='checkFilter' /> Chocolate <br />
            <input type="checkbox" className='checkFilter' /> Vainilla <br />
            <input type="checkbox" className='checkFilter' /> Naranja  
          </div>
          <div className='contentCheck'> 
            <input type="checkbox" className='checkFilter' /> Frutilla<br />
            <input type="checkbox" className='checkFilter' /> Limon <br />
            <input type="checkbox" className='checkFilter' /> Frutos secos
          </div>
        </div>
        <button className="bg-indigo-600 text-white py-1 px-4 rounded  
         hover:bg-indigo-800 duration-500 ">
          Filtrar
        </button>
      </form>
    </div>
  )
}

export default form