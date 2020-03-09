import { GET_USERS } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: async () => {
      const token = localStorage.getItem("token")
      setAuthToken(token);
      const res = await API.get("/user");
      const {data}= res.data;
      return data;
    }
  };
};


