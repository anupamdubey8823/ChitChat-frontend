import React, { useContext } from 'react';
import {UserContext} from '../context/UserContext';
import { googleLogout } from '../services/firebase';

export const ChatRoom = () => {
  const { setRedirect } = useContext(UserContext);

  const handleLogout = () => {
    googleLogout();
    setRedirect('/');
  }

  return (
    <div>
      <h1>Chat Room</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
