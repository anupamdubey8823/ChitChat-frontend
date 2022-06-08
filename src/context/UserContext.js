import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';

export const UserContext = createContext({user: null});

export default function(props) {
    const [user, setUser] = useState(null);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user;
                setUser({displayName, email});
                setRedirect('/chats');
            }
        })
    }, [user]);
    return (
        <UserContext.Provider value={{user, redirect, setRedirect}}>{props.children}</UserContext.Provider>
    )
}
