import React from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
    const toys = useLoaderData();
    const { description, email, photo, price, quantity, rating, sellerName, toyName, category } = toys;

    return (
        <div className='my-20'>
            
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="text-secondary">Toy Name: </span> {toyName}</h2>
                    <h2 className="card-title"><span className="text-secondary">Seller Name: </span>  {sellerName}</h2>


                    <p><span className="text-secondary font-bold">Seller Name: </span>{email}</p>
                    <p><span className="text-secondary font-bold">Description: </span> {description}</p>
                    <p><span className="text-secondary font-bold" >Price: </span> ${price}</p>
                    <p><span className="text-secondary font-bold">Quantity: </span> {quantity}</p>
                    <p><span className="text-secondary font-bold">Category: </span> {category}</p>
                    <p>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}

                        >


                        </Rating>

                        {rating}
                    </p>
                    
                </div>
            </div>



        </div>
    );
};

export default ToyDetails;