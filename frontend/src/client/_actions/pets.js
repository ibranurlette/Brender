import { GET_PETS } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const getPets = () => {
  return {
    type: GET_PETS,
    payload: async () => {
      const token = localStorage.getItem("token")
      setAuthToken(token);
      const res = await API.get("/pet");
      const {data}= res.data;
      return data;
    }
  };
};