/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Style from '../style/styleBackoffice.module.css';
import UserImg from '../style/images/personas.png';
import Cookie from '../style/images/galleta.png';
import Ecommerce from '../style/images/tienda.png';
import Empleado from '../style/images/empleado.png';
import {fetchUserList} from '../../users/actions'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function backofficeHome() {

  const dispatch = useDispatch();

  const users = useSelector(state => state.getAllUsers.users);
  // console.log('Total de usuarios', users.length)

  const client = users.filter(({id_rol}) => id_rol === 2)

  const adms = users.filter(({id_rol}) => id_rol === 1)
  // console.log('Prueba', adms.length)

  useEffect(() => {
    fetchUserList(dispatch)
  }, [])


  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <h2 className={Style.titleUsers}>Total de Usuarios</h2>
        <div className={Style.infUsers}>
          <img src={UserImg} alt="" className={Style.imgUser}/>
          <span>{client.length}</span>
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
        <h2 className={Style.titleUsers}>Total de Empleados</h2>
        <div className={Style.infUsers}>
          <img src={Empleado} alt="" className={Style.imgUser}/>
          <span>{adms.length}</span>
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