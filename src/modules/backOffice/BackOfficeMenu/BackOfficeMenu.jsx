import React from 'react';
import { Link } from 'react-router-dom';
import MenuBO from '../../../stylesheets/backOfficeMenu.module.css';

function BackOfficeMenu({items}) {
  return (
    <div className={MenuBO.container}>
      <h1 className={MenuBO.title}>Back Office Menu</h1>
      <div className={MenuBO.containerItem}>
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