import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white py-1 px-4 rounded md:ml-8 
     hover:bg-indigo-800 duration-500 button_login'>
      {props.children}
    </button>
  )
}

export default Button