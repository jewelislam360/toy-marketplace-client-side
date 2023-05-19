import React, { useEffect, useState } from 'react';
import Toy from '../AllToys/Toy';

const AllToys = () => {
    const [toys, setToys] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res =>res.json())
        .then(data =>{
            setToys(data);
            console.log(data);
        })
    },[])

    return (
        <div>
            
        </div>
    );
};

export default AllToys;