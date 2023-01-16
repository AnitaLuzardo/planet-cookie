import React from 'react';
import Style from '../style/styleBackoffice.module.css';
import UserImg from '../style/images/personas.png';
import Cookie from '../style/images/galleta.png';
import Ecommerce from '../style/images/tienda.png';
import {fetchUserList} from '../../users/actions'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function backofficeHome() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const users = useSelector(state => state.getAllUsers.users);
  // console.log('Total de usuarios', users.length)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchUserList(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <h2 className={Style.titleUsers}>Total de Usuarios</h2>
        <div className={Style.infUsers}>
          <img src={UserImg} alt="" className={Style.imgUser}/>
          <span>{users.length}</span>
        </div>
      </div>
      <div className={Style.content}>
        <h2 className={Style.titleUsers}>Total de Productos</h2>
        <div className={Style.infUsers}>
          <img src={Cookie} alt="" className={Style.imgUser}/>
          <span>15</span>
        </div>
      </div>
      <div className={Style.content}>
        <h2 className={Style.titleUsers}>Planet Cookie</h2>
        <div className={Style.infUsers}>
          <Link to={'/'}> 
            <img src={Ecommerce} alt="" className={Style.imgUser}/> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default backofficeHome