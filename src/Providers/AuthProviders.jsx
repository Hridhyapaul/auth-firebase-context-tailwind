import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const userContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state change', currentUser)
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user, 
        createUser, 
        signIn,
        logOut
    }

    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthProviders;