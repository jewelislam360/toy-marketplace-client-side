import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdeteToys = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {_id, quantity, price, description}= toy;
    


    const handelUpdeteToy =event=>{
      
        event.preventDefault();
        const form = event.target;
        
        const quantity =form.quantity.value;
        const price =form.price.value;
        const description =form.description.value;
        const data ={ quantity, price, description}
        console.log(data);

        fetch(`http://localhost:5000/allToys/${_id}`,{
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully Updated a Toy Car',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            form.reset();

            
        })

    }


    return (
        <div>
    <h1>name:{toy._id}</h1>
            <form onSubmit={handelUpdeteToy}>
                
                {/* rating and quantity */}
                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="price" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                

                {/* Toy Description*/}
                <div className="form-control w-[50%] mb-6">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <input type="area" name='description' defaultValue={description} placeholder="description" className="input input-bordered input-secondary w-[100%]" />
                </div>

                <button className="btn btn-secondary w-[100%] mb-10">Updete</button>

            </form>
        </div>
    );
};

export default UpdeteToys;