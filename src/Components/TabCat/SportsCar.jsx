import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SportsCar = () => {
    const [fires, setFires] = useState();
        useEffect(() => {
            fetch('/categoryToys/sports car')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setFires(data)
                })
        }, [])
    return (
        <div className='md:flex gap-4'>
            {
                fires?.slice(0,3).map(fire => {
                   return <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={fire.photo}alt="Shoes" /></figure>
                            <div className="card-body">
                            <h2 className="card-title"><span className="text-secondary">Toy Name: </span> {fire.toyName}</h2>
                            <p><span className="text-secondary font-bold" >Price: </span> ${fire.price}</p>
                            <p>
                        <Rating
                            placeholderRating={fire.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        >


                        </Rating>

                        {fire.rating}
                    </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ToyDetails/${fire._id}`}><button className="btn btn-Secondary">view Details</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                })


            }
            
        </div>
    );
};

export default SportsCar;