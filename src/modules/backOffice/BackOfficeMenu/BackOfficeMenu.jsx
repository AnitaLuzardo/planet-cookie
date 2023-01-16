import React from 'react';
import { Link } from 'react-router-dom';
import "../../../stylesheets/Navbar.css";
import Logo from "../../../images/cookies.png";
import dashboard from "../BackOfficeMenu/helpers/imageMenu/home.png";
import MenuBO from '../../../stylesheets/backOfficeMenu.module.css';
import Menu from '../BackOfficeMenu/helpers/imageMenu/menu.png';

function BackOfficeMenu({items}) {
  return (
    <div className={MenuBO.container}>
      <div className={MenuBO.headerbOf}>
        <Link to={"/"} ><h1 className={MenuBO.title}>PLANET 
          <img src={Logo} alt="" className={MenuBO.logo} /> 
          COOKIE</h1>
        </Link>
        <button> <img src={Menu} alt="" className={MenuBO.imgMenu}/></button>
      </div>
      <div className={MenuBO.containerItem}>
        <Link to={'/backoffice'} className={MenuBO.dashboardCont}> 
          <img src={dashboard} alt=""/>
          <span className={MenuBO.dashboard}>Dashboard</span>
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