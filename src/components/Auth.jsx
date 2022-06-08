import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppHeader, LoginForm } from './';
import { UserContext } from '../context/UserContext';

export const Auth = () => {

  const { redirect } = useContext(UserContext);

  if (redirect === '/chats') {
    return <Navigate to={redirect} />
  }

  return (
    <div>
      <AppHeader />
      <LoginForm />
    </div>
  )
}