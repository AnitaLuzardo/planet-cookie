import React from 'react';
import { Link } from 'react-router-dom';
import User from '../../backOffice/components/helpers/user.png';
import CookieMenu from '../../backOffice/components/helpers/cookie.png';
import MenuBO from '../styles/backOfficeMenu.module.css';

function BackOfficeMenu() {
  return (
    <div className={MenuBO.container}>
      <h1 className={MenuBO.title}>Back Office Menu</h1>
      <div className={MenuBO.containerItem}>
        <div className={MenuBO.contentItem}>
          <Link to={''} className= {MenuBO.menuOffice}>
            <img src={User} alt="" className={MenuBO.img} />
            <span>Users</span>
          </Link>
        </div>
        <div className={MenuBO.contentItem}>
          <Link to={''} className= {MenuBO.menuOffice}>
            <img src={CookieMenu} alt="" className={MenuBO.img} />
            <span>Products</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BackOfficeMenu