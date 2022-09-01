import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/Navbar.css"
import Button from './Button'
import Cookie from '../images/cookies.png'


function Navbar() {
  let enlace = [
    {name: "Home", link:"/"},
    {name: "Login", link:"/login"},
    {name: "Register", link:"/register"}
  ]

  let [open, setOpen] = useState(false)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-red-100 py-4 md:px-10 px-7">
        <div className='font-bold500 text-2xl cursor-pointer flex items-center 
        text-gray-800'>
          Planet 
            <span className='text-3x1 text-indigo-600 pt-2'>
              <img className='logo' src={Cookie} alt="" />
            </span> 
          Cookie
        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 pt-0 absolute md:static bg-red-100 md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-in ${open ? 'top-20': 'top-[-300px]'}`}>
          {
            enlace.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          <Button>Get started</Button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar