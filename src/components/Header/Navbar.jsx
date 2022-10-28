import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import "../../stylesheets/Navbar.css";
import Button from '../Button';
import Cookie from '../../images/cookies.png';
import CookieMenu from '../../images/cookie-solid-menu.png'

// ../images/cookies.png
function Navbar() {
  let enlace = [
    {name: "Inicio", link:"/"},
    {name: "Catalogo", link:"/catalogo"},
    {name: "Contactanos", link:"/contactanos"}
  ]

  let [open, setOpen] = useState(false)

  return (
    <div className="w-full fixed top-0 left-0 z-[100]">
      <div className="md:flex items-center justify-between bg-red-100 py-4 md:px-10 px-7">
        <div className='font-bold500 text-2xl cursor-pointer  flex items-center 
        text-gray-800'>
          <Link to='/' className="logo-planet">
            Planet
            <span className='text-3x1 text-indigo-600 pt-2'>
              <img className='logo' src={Cookie} alt="" />
            </span>
            Cookie 
          </Link>
        </div>
        <div onClick={() => setOpen(!open)} className='text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
        
          <h2 className="menu-resp">Menu <img src={CookieMenu} alt="" /> </h2>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 pt-0 absolute md:static bg-red-100 md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-1000 ease-in ${open ? 'top-20': 'top-[-300px]'}`}>
          {
            enlace.map((link)=>(
              <li key={link.name} className='md:ml-6 text-ms md:my-0 my-7'>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          <div className='container_button'>
            <Button>
              <Link to= "/login"> Login </Link>
            </Button>
            <Button>
              <Link to= "/register"> Register </Link>
            </Button>
          </div> 
        </ul>
      </div>
    </div>
  )
}

export default Navbar