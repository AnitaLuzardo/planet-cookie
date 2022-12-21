import { FETCH_USERS } from "./types";
import axios from "axios";

//Lista de Usuarios
export const getUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users
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
}