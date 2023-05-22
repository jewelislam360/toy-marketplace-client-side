import React, { useEffect, useState } from 'react';

const Tabtruck = () => {

    const [trucks, setTrucks] = useState();
        useEffect(() => {
            fetch('http://localhost:5000/categoryToys/truck')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setTrucks(data)
                })
        }, [])

    return (
        <div>
            {
                trucks?.map(truck => {
                    <div>
                        {truck.length}
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={truck.photo}alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">truck.toyName!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })


            }
            
        </div>
    );
};

export default Tabtruck;