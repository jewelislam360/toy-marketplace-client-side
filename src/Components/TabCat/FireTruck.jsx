import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const FireTruck = () => {
    const [trucks, setFiretrucks] = useState();
        useEffect(() => {
            fetch('/categoryToys/mini fire truck')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setFiretrucks(data)
                })
        }, [])
    return (
        <div className='md:flex gap-4'>
            {
                trucks?.slice(0,3).map(truck => {
                   return <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={truck.photo}alt="Shoes" /></figure>
                            <div className="card-body">
                            <h2 className="card-title"><span className="text-secondary">Toy Name: </span> {truck.toyName}</h2>
                            <p><span className="text-secondary font-bold" >Price: </span> ${truck.price}</p>
                            <p>
                        <Rating
                            placeholderRating={truck.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        >


                        </Rating>

                        {truck.rating}
                    </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ToyDetails/${truck._id}`}><button className="btn btn-Secondary">view Details</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                })


            }
            
        </div>
    );
};

export default FireTruck;