import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';



const AllToys = () => {

    const { loading } = useContext(AuthContext);

    const [toys, setToys] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);

            })
    }, [])

    return (
        <div>
            
            <div className='my-10'>

                <h1 className="text-secondary text-center font-bold text-4xl" >All Toys</h1>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-[50%] h-1 my-8 bg-secondary border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-full mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Picture</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {toys?.map((toy) => (

                            <tr toy={toy}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.category}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <th>

                                    <Link to={`/ToyDetails/${toy._id}`}> <button className="btn btn-secondary btn-xs">Details</button></Link>

                                </th>
                            </tr>
                        ))}



                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default AllToys;