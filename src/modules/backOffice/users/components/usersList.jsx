/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserList } from '../actions';
import { useEffect, useState } from 'react';
import edit from '../../BackOfficeMenu/helpers/imageMenu/editII.png';
import delet from '../../BackOfficeMenu/helpers/imageMenu/deleteUser.png'
import Style from '../styles/backOfficeUsers.module.css';
// import Modal from '../../../../components/Modal';

const usersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.getAllUsers.users)
  // console.log('Lista de usuarios', users.length)

  const [isOpen, setOpen] = useState(false);

  useEffect(()=> {
    dispatch(fetchUserList);
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
                      <button className= {Style.buttonAction}>
                        <img src={edit} alt="" className={Style.img}/>
                      </button>
                      <button 
                        className= {Style.buttonAction}
                        onClick={()=>setOpen(true)}
                      >
                        <img src={delet} alt="" className={`${Style.img} ${Style.imgDelete}`}/>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
            
          </table>
          {
            isOpen && (
              <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5'>
                  <div>
                    <h1 className='font-light text-xl'>Estas seguro de eliminar el usuario?</h1>
                  </div>
                  <div>
                    <button className='bg-red-500 py-2 px-6 rounded-sm text-white font-bold m-5' 
                      onClick={()=>setOpen(false)} 
                    > 
                      Close 
                    </button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default usersList
