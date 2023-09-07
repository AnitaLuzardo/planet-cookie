import React from 'react';
// import StyleModal from '../stylesheets/Modal.module.css'
// import close from '../images/cerca.png'

function Modal(closeModal) {
  return (
    <>
      {/* <div className= {`bg-blend-normal w-full fixed top-0 left-0 bg-opacity-50 ${StyleModal.container}`}>
        <div className={StyleModal.content}>
          <div className={StyleModal.encabezado}>
            <h3>Modal</h3>
          </div>
          
          <button className={StyleModal.close}>
            <img src={close} alt="" />
          </button>
        </div>
      </div> */}
      <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
          <div className=''>
            <h1>Estas seguro de eliminar el usuario?</h1>
          </div>
          <div>
            <button className='bg-red-500 py-2 px-6 rounded-sm text-white font-bold m-5' onClick={()=>closeModal(false)}> Close </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal