import React from "react"
import { createContext, useContext, useState } from "react";
import { deleteCookie, hasCookie, setCookie } from "cookies-next";
import secureLocalStorage from "react-secure-storage";

const AuthContext = createContext(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}

export const authSessionKey = "_SHREYU_AUTH_";

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);

  const saveSession = (user) => {
    console.log(user.token);
    console.log("hello");
    setCookie(authSessionKey, JSON.stringify(user.token));
    setUser(user.data);
  };

  const removeSession = () => {
    deleteCookie(authSessionKey);
    setUser(undefined);
  };

  const token = secureLocalStorage.getItem("token");
  const [name, setname] = useState("Dashboard");
//   const baseURL = 'http://10.0.33.11'

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: hasCookie(authSessionKey),
        saveSession,
        removeSession,
        setname,
        baseURL,
        name,
     
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
