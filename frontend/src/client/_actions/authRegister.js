import axios from 'axios';
import {AUTH} from '../config/constants';
import {API} from '../config/api';

export const register = data => {
  return {
    type: AUTH,
    payload: async () => {
       //  const res = await API.post("/register", data)
       // const token = localStorage.getItem("token")
       // setAuthToken(token);
      	//  return res.data;
      	const res = await API.post("/register", data);
      	const {token} = res.data;
      	 localStorage.setItem("token", token);
      	 return res.data;
    }

  };
};