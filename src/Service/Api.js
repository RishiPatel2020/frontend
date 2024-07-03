import axios from 'axios';
import { BACKEND_BASE } from '../Service/Constants';

export const loginUser = async (email, password) => {
  const response = await axios.post(`${BACKEND_BASE}/login`, {
    email,
    password,
  });
  return response.data;
};
