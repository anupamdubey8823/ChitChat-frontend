import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import { googleLogout } from '../services/firebase';

export const ChatRoom = () => {
  const { setRedirect } = useContext(UserContext);
  // const [redirect, setRedirect] = useState(null);

  // useEffect(() => {
  //   if (!user) {
  //     setRedirect('/');
  //     // return <Navigate to='/' />
  //   }
  // },[user, redirect]);
  // if (redirect === '/') {
  //   return <Navigate to={redirect} />;
  // }

  const handleLogout = () => {
    googleLogout();
    setRedirect('/');
    // window.location.reload();
  }

  return (
    <div>
      <h1>Chat Room</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
