import React, { createContext, useContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const AuthContext = createContext(null);

const DEFAULT_PASSWORD_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // 'password' hashed with SHA-256

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const sessionToken = sessionStorage.getItem('cms_session');
    const storedHash = localStorage.getItem('cms_password_hash');
    
    if (sessionToken === 'authenticated') {
      setIsAuthenticated(true);
    } else if (storedHash) {
      // If password hash exists, use it; otherwise use default
      // Session expired, need to login again
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  }, []);

  const login = (password) => {
    const hash = CryptoJS.SHA256(password).toString();
    const storedHash = localStorage.getItem('cms_password_hash') || DEFAULT_PASSWORD_HASH;
    
    if (hash === storedHash || hash === DEFAULT_PASSWORD_HASH) {
      sessionStorage.setItem('cms_session', 'authenticated');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem('cms_session');
    setIsAuthenticated(false);
  };

  const updatePassword = (oldPassword, newPassword) => {
    const oldHash = CryptoJS.SHA256(oldPassword).toString();
    const storedHash = localStorage.getItem('cms_password_hash') || DEFAULT_PASSWORD_HASH;
    
    if (oldHash === storedHash || oldHash === DEFAULT_PASSWORD_HASH) {
      const newHash = CryptoJS.SHA256(newPassword).toString();
      localStorage.setItem('cms_password_hash', newHash);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, updatePassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

