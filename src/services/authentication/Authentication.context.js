import React, { useState, createContext } from "react";
import { loginRequest } from "./Authentication.service";
import * as firebase from "firebase";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((userDetails) => {
        setUser(userDetails);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString().replace("Error:", "").trim());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userDetails) => {
        setUser(userDetails);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.toString().replace("Error:", "").trim());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
