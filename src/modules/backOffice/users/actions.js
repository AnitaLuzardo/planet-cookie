import { FETCH_USERS, DELETE_USER } from "./types";
import axios from "axios";

//Lista de Usuarios
export const getUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users
  }
};

export const deleteUser = (user) =>{
  return {
    type: DELETE_USER,
    payload: user
  }
};

export const fetchUserList = async (dispatch) => {
  try {
    const resUserList = await axios.get (
      'http://localhost:5000/api/users/userList'
    )
    // console.log('PRUEBA', resUserList)  
    const userListData = resUserList.data
    dispatch(getUsers(userListData))
  } catch (error) {
    console.log('ERROOOOR', error)
  }
}; 

export const fetchDelete = async (dispatch) => {
  try {
    const resDeleteUser = await axios.delete(
      'http://localhost:5000/api/users/delete'
    )
      console.log('Probando', resDeleteUser)
    const userDelete = resDeleteUser.data
    dispatch(deleteUser(userDelete))
  } catch (error) {
    console.log('ERROOOOR', error)
  }
}