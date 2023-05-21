import React from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from "react-icons/fa";

const ToyDetails = () => {
    const toys = useLoaderData();
    const { description, email, photo, price, quantity, rating, sellerName, toyName, category } = toys;

    return (
        <div className='my-20'>
            <div className='mb-20'>

                <h1 className="text-secondary text-center font-bold text-4xl" >Toy Description</h1>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[50%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>
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