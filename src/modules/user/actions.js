import axios from "axios";
import { SAVE_REGISTER, ERROR_REGISTER, FETCH_ROLS } from "./types";

//REGISTRO
export const userRegister = (user) => {
  return{
    type: SAVE_REGISTER,
    payload: user
  }
}

export const userRegisterError = (error) => {
  return{
    type: ERROR_REGISTER,
    payload: error
  }
} 

export const fetchRegister = async(form, dispatch) => {
  dispatch(userRegisterError(null))
  try {
    const responseRegister = await axios.post (
      'http://localhost:5000/api/auth/register',
      form
    )
    const user = responseRegister.data
    dispatch(userRegister(user));
  } catch (error) {
    console.log('ERROOOOOR', error);
  }
}

//ROLES
export const userRols = (rols) => {
  return{
    type: FETCH_ROLS,
    payload: rols
  }
}

export const fetchRols = async(dispatch) => {
  try {
    const responseRols = await axios.get (
      'http://localhost:5000/api/auth/roles'
    )
    const rolsUser = responseRols.data
    dispatch(userRols(rolsUser));
  } catch (error) {
    console.log('ERROOOOOR', error);
  }
}
