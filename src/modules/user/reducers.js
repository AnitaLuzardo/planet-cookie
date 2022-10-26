//Redecer Roles
import { FETCH_ROLS, ERROR_REGISTER } from "./types";

const initialState = {
  rols: [],
  errors: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLS:
      return {
        ...state,
        rols: action.payload
      };
    case ERROR_REGISTER:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}