import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { LoginForm } from './LoginForm';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';

export const Auth = () => {

  const { redirect } = useContext(UserContext);
  const [isSignUp, setIsSignUp] = useState(false);
  // const [redirect, setRedirect] = useState(null);

  // if(user) {
  //   setRedirect('/chats');
  // }

  // useEffect(() => {
  //   if(user) {
  //     setRedirect('/chats');
  //   }

  //   // else if (!user) {
  //   //   console.log("Logout logic success!");
  //   //   setRedirect('/');
  //   //   return <Navigate to='/' />
  //   // }
  // }, [user]);

  if (redirect === '/chats') {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AppHeader />
      <AuthContext.Provider value={{isSignUp, setIsSignUp}}>
        <LoginForm />
      </AuthContext.Provider>
    </div>
  )
}