import React, { useState, createContext, useContext, useEffect} from 'react';
  
import authService from '../services/index';
const { loggedIn, logOut } = authService;

export const AppContext = createContext();

export const AppCtxProvider = props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getSessionData() {
          const { data } = await loggedIn();
          login(data);
        };
    
        getSessionData();
      }, []);

      const login = userInfo => {
        setUser(userInfo);
      };
    
      const logout = async () => {
        try {
          await logOut();
          setUser(null);
        } catch(err) {
          console.log(err);
        };
      };

      const value = { user, login, logout };
    
      return (
        <AppContext.Provider {...props} value={value} />
      );
};

export const useContextInfo = () => useContext(AppContext);