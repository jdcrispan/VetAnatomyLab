import React, { createContext, useState, useEffect } from "react";
import { getSession, clearSession } from "../services/AsyncStorageService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const storedSession = await getSession();
    if (storedSession) {
      setUser(storedSession);
    }
    setLoading(false);
  };

  const logout = async () => {
    await clearSession();
    setUser(null);
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}