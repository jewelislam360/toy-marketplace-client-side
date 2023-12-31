import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle} from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const [error, setError]=useState();

    
    const {signIn, googleSignin}=useContext(AuthContext);
    

    const navigate =useNavigate();
    const location =useLocation();

    const from =location.state?.from?.pathname || '/';
    

    const handelLogin = event =>{
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user ={email, password};
        console.log(user);

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'successfully Logedin',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from);


        })
        .catch((error)=>{
            console.log(error.message);
           setError(error.message);
           form.reset();
           
        })

        
    }

    const hendelGoogleSinIn=()=>{
        googleSignin()
        .then(result=>{
            const user= result.user;
        console.log(user);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'successfully Logedin',
            showConfirmButton: false,
            timer: 1500
          })
          navigate(from);



        })
        .catch(error=>{
            console.log(error);
        })

    }

   


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold"> Please Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handelLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-warning'>{error}</p>
                            <div className="form-control mt-6">
                                
                                <button className="btn btn-primary">Login</button>
                                

                            </div>
                            </form>
                            <div><h2>Don't have an account? <Link to='/register'>Sign Up hare.</Link></h2></div>

                            <button className='text-4xl mx-auto' onClick={hendelGoogleSinIn}><FcGoogle></FcGoogle></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;