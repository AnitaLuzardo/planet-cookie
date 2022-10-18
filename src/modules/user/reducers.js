//Redecer Roles
import { FETCH_ROLS } from "./types";

const initialState = {
  rols: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLS:
      return {
        ...state,
        rols: action.payload
      };
    default:
      return state;
  }
}