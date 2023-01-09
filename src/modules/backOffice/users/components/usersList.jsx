import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from '../actions';
import { useEffect } from 'react';
// import edit from '../../BackOfficeMenu/helpers/imageMenu/editII.png';
import delet from '../../BackOfficeMenu/helpers/imageMenu/deleteII.png'
import Style from '../styles/backOfficeUsers.module.css';

const usersList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const users = useSelector(state => state.getAllUsers.users)
  // console.log('Lista de usuarios', users)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=> {
    fetchUserList(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <h3 className={Style.title}>Lista de Usuarios</h3>
      <div className={Style.container}>
        <div className={Style.contentTable}>
          <table className={Style.content}>
            <thead className='bg-red-200'>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, i)=>(
                  <tr key={i}>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td className={Style.actions}>
                      {/* <button className= {Style.buttonAction}>
                        <img src={edit} alt="" className={Style.img}/>Edit
                      </button> */}
                      <button className= {Style.buttonAction}>
                        <img src={delet} alt="" className={`${Style.img} ${Style.imgDelete}`}/> Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default usersList
