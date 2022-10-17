import axios from "axios";
import { USER_REGISTER, USER_ERROR_REGISTER } from "./types";

export const userRegister = (user) => {
  return{
    type: USER_REGISTER,
    payload: user
  }
}

export const userRegisterError = (error) => {
  return{
    type: USER_ERROR_REGISTER,
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
    console.log(error);
  }
}

