import { FETCH_USERS } from "./types";

const initialState = {
  users: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state; 
  }
}