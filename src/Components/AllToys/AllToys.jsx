import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';



const AllToys = () => {

    const { loading } = useContext(AuthContext);
    
    const [toys, setToys] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setToys(data);
            
        })
    },[])

    return (
        <div>
            <div className="overflow-x-auto w-full">
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

                        {toys?.map((toy)=>(
                            <tr>

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
                                <button className="btn btn-secondary btn-xs">details</button>
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