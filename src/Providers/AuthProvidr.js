import React, { Children, createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext;
const auth = getAuth(app);

const AuthProvidr = ({Children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const authInfo={

    }
    return (
        <AuthContex.Provider value={authInfo}>
            {Children}
        </AuthContex.Provider>
    );
};

export default AuthProvidr;