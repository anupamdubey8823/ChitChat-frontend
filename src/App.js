import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
// import Notification from './assets/chat-svgrepo.svg';
import UserContext from './context/UserContext';

import { Auth, ChatRoom, PrivateRoute } from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext>
          <Routes>
            <Route exact path="/" element={<Auth />} />
            <Route path="/chats" element={
                <PrivateRoute>
                  <ChatRoom />
                </PrivateRoute>
            } />
          </Routes>
        </UserContext>
      </BrowserRouter>        
    </div>
  );
}

export default App;
