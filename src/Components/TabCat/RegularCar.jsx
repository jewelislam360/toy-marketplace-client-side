import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const RegularCar = () => {
    const [regulars, setRegulars] = useState();
        useEffect(() => {
            fetch('https://b7a11-toy-marketplace-server-side-jewelislam360.vercel.app/categoryToys/regular car')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRegulars(data)
                })
        }, [])
    return (
        <div className='md:flex gap-4'>
            {
                regulars?.slice(0,3).map(regular => {
                   return <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={regular.photo}alt="Shoes" /></figure>
                            <div className="card-body">
                            <h2 className="card-title"><span className="text-secondary">Toy Name: </span> {regular.toyName}</h2>
                            <p><span className="text-secondary font-bold" >Price: </span> ${regular.price}</p>
                            <p>
                        <Rating
                            placeholderRating={regular.rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        >


                        </Rating>

                        {regular.rating}
                    </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/ToyDetails/${regular._id}`}><button className="btn btn-Secondary">view Details</button></Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                })


            }
            
        </div>
    );
};

export default RegularCar;