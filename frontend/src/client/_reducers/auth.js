import { AUTH } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  authenticated: false,
  user: null,
  error:null,
  loading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH}_PENDING`:
      return {
        ...state,
        error:null,
        loading: true
      };
    case `${AUTH}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        error:null,
        loading:false
      };
    case `${AUTH}_REJECTED`:
      return {
        ...state,
         loading:false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};

export default auth;
