import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);
    if(loading){
        return <div className="radial-progress text-secondary" style={{ "--value": 70 }}>70%</div>

    }

    if(user){
        return children;
    }


    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRouts;