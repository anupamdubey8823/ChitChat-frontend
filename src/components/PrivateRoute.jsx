import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const PrivateRoute = ({ children }) => {
    const { user, redirect, setRedirect } = useContext(UserContext);
    // if (!user) {
    //     console.log("User not logged in");
    //     return <Navigate to='/' />
    // }
    useEffect(() => {
      if (!user) {
        console.log(user);
        // window.location = '/';
        setRedirect('/');
        // window.location.reload();
        // return homePage();
      }
    }, [redirect])
    if (redirect === '/')
    // function homePage() {
        return <Navigate to='/' />
    // }
    

    return children;
}