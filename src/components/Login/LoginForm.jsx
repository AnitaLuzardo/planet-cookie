import React from 'react'

function LoginForm() {


  return (
      <form className="container_form"  >
        <input type="email" 
          name="email"
          placeholder="Email"
          className="input_register"
          
        />
        <input type="password" 
          name="password"
          placeholder="Password"
          className="input_register"

        /> 
        <button 
          type='submit'
          className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-400 duration-500 w-40">
          Iniciar sesión
        </button>
      </form>
  )
}

export default LoginForm