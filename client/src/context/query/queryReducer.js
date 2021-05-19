import { SET_QUERY } from "../../types/actionTypes";

const queryReducer = (state, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload
      }
    default:
      return state;
  }
}

export default queryReducer;
