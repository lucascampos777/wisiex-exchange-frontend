import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { setAuthToken } from '../utils/setAuthToken';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // On load, check localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      const decoded = jwtDecode(token)
      if(decoded?.name) {
        setToken(token);
        setUser(decoded.name);
        setAuthToken(token)
        navigate('/orders')
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token)
    if(decoded?.name) {
      setToken(token);
      setUser(decoded.name);
      setAuthToken(token)
      navigate('/orders');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setAuthToken(null)
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
