import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "./types";

const initialState = {
  user: null,
  errors: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case GET_SESSION_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}