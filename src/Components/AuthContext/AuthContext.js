import isTokenExpired from "../../Service/Cookies";
import React, { createContext, useState, useEffect } from "react";
import { NOT_APPLIED } from "../../Service/Constants";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isTokenExpired(token)) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("emailAddress");
      setIsAuthenticated(false);
    }
  }, []);

  const login = (token, email, Premium) => {
    localStorage.setItem("token", token);
    localStorage.setItem("emailAddress", email);
    localStorage.setItem("Premium", Premium ? Premium : NOT_APPLIED);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("emailAddress");
    localStorage.removeItem("Premium");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
