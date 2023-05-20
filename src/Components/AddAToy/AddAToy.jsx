import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <div className="radial-progress text-secondary" style={{"--value":70}}>70%</div>
    }

    const handelAddAToy =event=>{
      
        event.preventDefault();
        const form = event.target;
        const toyName =form.toyName.value;
        const photo =form.photo.value;
        const sellerName =form.sellerName.value;
        const email =form.email.value;
        const rating =form.rating.value;
        const quantity =form.quantity.value;
        const category =form.category.value;
        const price =form.price.value;
        const description =form.description.value;
        const data ={toyName, photo, sellerName, email, rating, quantity, category, price, description}
        console.log(data);

        fetch('http://localhost:5000/addToy',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully added a Toy Car',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            form.reset();

            
        })
    
       



    }
    return (
        <div>
            <form onSubmit={handelAddAToy}>
                {/* name and photo url */}

                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                {/* seller name and email */}

                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={`${user?.displayName}`}  placeholder={`${user?.displayName}`} className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <input type="email" name='email' defaultValue={`${user?.email}`} placeholder={`${user?.email}`} className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                <div className="form-control w-[50%]">

                </div>
                {/* rating and quantity */}
                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                {/* Category  and Price */}


                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <div className="input-group w-[100%]">
                            <select name='category' className="select-secondary select select-bordered w-[100%]">
                                <option disabled selected>Pick category</option>
                                <option>sports car</option>
                                <option>truck</option>
                                <option>regular car</option>
                                <option>mini fire truck</option>
                                <option>mini police car</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                {/* Toy Description*/}
                <div className="form-control w-[50%] mb-6">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <input type="area" name='description' placeholder="description" className="input input-bordered input-secondary w-[100%]" />
                </div>

                <button className="btn btn-secondary w-[100%] mb-10">Button</button>

            </form>
        </div>
    );
};

export default AddAToy;