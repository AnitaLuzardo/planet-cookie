import axios from "axios";
import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "./types";

export const getUserSuccess = (user) => {
  return {
    type: GET_SESSION_SUCCESS,
    payload: user
  }
}

export const getUserError = (error) => {
  return {
    type: GET_SESSION_ERROR,
    payload: error
  }
}
  
export const fetchLogin = async (form, dispatch) => {
  dispatch(getUserError(null));
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      form
    );
    const user = response.data;
    dispatch(getUserSuccess(user));

  } catch (error) {
    console.log(error);
    const responseError = error.response.data.message;
    dispatch(getUserError(responseError));
  }
}

