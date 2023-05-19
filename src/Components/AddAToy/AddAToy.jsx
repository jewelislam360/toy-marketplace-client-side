import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <form >
                {/* name and photo url */}

                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Photo Url" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Photo Url" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                {/* seller name and email */}

                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={`${user?.displayName}`}  placeholder={`${user?.displayName}`} className="input input-bordered input-secondary w-[100%]" />
                    </div>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <input type="email" defaultValue={`${user?.email}`} placeholder={`${user?.email}`} className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                <div className="form-control w-[50%]">

                </div>
                {/* Category  and Price */}


                <div className='flex gap-4'>
                    <div className="form-control w-[50%]">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <div className="input-group w-[100%]">
                            <select name='Category' className="select-secondary select select-bordered w-[100%]">
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
                        <input type="text" placeholder="Price" className="input input-bordered input-secondary w-[100%]" />
                    </div>
                </div>
                {/* Toy Description*/}
                <div className="form-control w-[50%] mb-6">
                    <label className="label">
                        <span className="label-text">Toy Description</span>
                    </label>
                    <input type="area" placeholder="description" className="input input-bordered input-secondary w-[100%]" />
                </div>

                <button className="btn btn-secondary w-[100%] mb-10">Button</button>

            </form>
        </div>
    );
};

export default AddAToy;