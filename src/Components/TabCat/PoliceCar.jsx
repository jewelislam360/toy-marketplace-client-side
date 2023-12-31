import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const PoliceCar = () => {
    const [polices, setPolices] = useState();
        useEffect(() => {
            fetch('https://b7a11-toy-marketplace-server-side-jewelislam360.vercel.app/categoryToys/mini police car')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setPolices(data)
                })
        }, [])
    return (
        <div className='md:flex gap-4'>
            {
                polices?.slice(0,3).map(police => {
                   return <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={police.photo}alt="Shoes" /></figure>
                            <div className="card-body">
                            <h2 className="card-title"><span className="text-secondary">Toy Name: </span> {police.toyName}</h2>
                            <p><span className="text-secondary font-bold" >Price: </span> ${police.price}</p>
                            <p>
                        <Rating
                            placeholderRating={police.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        >


                        </Rating>

                        {police.rating}
                    </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ToyDetails/${police._id}`}><button className="btn btn-Secondary">view Details</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                })


            }
            
        </div>
    );
};

export default PoliceCar;