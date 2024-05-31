import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      return true;
    }
    return false;
  } catch (error) {
    return true;
  }
};

export default isTokenExpired;
