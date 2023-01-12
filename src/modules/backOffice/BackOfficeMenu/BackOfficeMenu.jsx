import React from 'react';
import { Link } from 'react-router-dom';
import "../../../stylesheets/Navbar.css"
import Logo from "../../../images/cookies.png"
import dashboard from "../BackOfficeMenu/helpers/imageMenu/home.png"
import MenuBO from '../../../stylesheets/backOfficeMenu.module.css';

function BackOfficeMenu({items}) {
  return (
    <div className={MenuBO.container}>
      <Link to={"/"} ><h1 className={MenuBO.title}>PLANET 
        <img src={Logo} alt="" className={MenuBO.logo} /> 
        COOKIE</h1>
      </Link>
      <div className={MenuBO.containerItem}>
        <Link to={'/backoffice'} className={MenuBO.dashboardCont}> 
          <img src={dashboard} alt=""/>
          <h1 className={MenuBO.dashboard}>Dashboard</h1>
        </Link>
        {
          items.map((item, i) =>(
            <div className={MenuBO.contentItem} key={i} >
              <Link to={item.link} className= {MenuBO.menuOffice}>
                <img src={item.url} alt="" className={MenuBO.img} />
                <span className={MenuBO.titleItem}>{item.name}</span>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
    
  )
}

export default BackOfficeMenu