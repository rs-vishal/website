import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem('usermail') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [teamzid, setTeamZid] = useState(localStorage.getItem('teamzid') || '');
  const [phonenumber, setPhoneNumber] = useState(localStorage.getItem('phonenumber') || '');

  return (
    <AuthContext.Provider 
      value={{ email, username, teamzid, phonenumber, setEmail, setUsername, setTeamZid, setPhoneNumber }}
    >
      {children}
    </AuthContext.Provider>
  );
};
