import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const PrivateRoute = ({ children }) => {
    const { user, redirect, setRedirect } = useContext(UserContext);

    useEffect(() => {
      // This is for preventing unauthorised access of '/chats' protected route
      if (!user) {
        console.log(user);
        setRedirect('/');
      }
    }, [redirect])

    // This if block takes care of both logging out the user and taking to home page from ChatRoom, and if a user
    // tries to access the protected '/chats' route without signing in.
    // It is because each time 'redirect' changes, this component is re-rendered, and below logic is verified and 
    // redirected if need be.
    if (redirect === '/') {
      return <Navigate to='/' />
    }  

    return children;
}