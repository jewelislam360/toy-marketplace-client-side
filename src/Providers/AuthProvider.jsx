import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const provider = new GoogleAuthProvider();


    // update user profile
    const updateUserProfileFunc = (currUser, name, photo)=>{
        return updateProfile(auth, currUser, {
            displayName: name, photoURL: photo
          })
    }

    //google signin
    const googleSignin=()=>{

        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

         
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current User', currentUser);
            setLoading(false);
        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const logOut =()=>{
        return signOut(auth)
    }

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignin,
        updateUserProfileFunc

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     );
};

export default AuthProvider;