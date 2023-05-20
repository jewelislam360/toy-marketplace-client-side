import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys]= useState();



    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyToys(data);

        })
    },[user])

    return (
        <div>
            <h2>this is my toys</h2>
            
        </div>
    );
};

export default MyToys;