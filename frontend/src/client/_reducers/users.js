import { GET_USERS } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  error: false,
    loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
          loading: true
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
          loading: false,
        data: action.payload
      };
    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        error: action.payload.response.data.message,
          loading: false
      };
    default:
      return state;
  }
};

export default reducer;
