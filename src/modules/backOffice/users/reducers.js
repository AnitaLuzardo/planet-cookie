import { FETCH_USERS, DELETE_USER } from "./types";

const initialState = {
  users: [],
  user: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state; 
  }
}