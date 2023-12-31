import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {

        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log(error)
            })

    }

    const activeLink = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'green' : 'none',
        }
    }




    const navItam = <>
    {
        user ? 
        <>
            <li><Link className='font-bold' to='/'>Home</Link></li>
        <li><Link className='font-bold' to='/alltoys'>All Toys</Link></li>
        <li><Link className='font-bold' to='/mytoys'>My Toys</Link></li>
        <li><Link className='font-bold' to='/addatoy'>Add a toy</Link></li>
        <li><Link className='font-bold' to='/blog' >Blogs</Link></li>
        </>
        :

        <>
             <li><Link className='font-bold' to='/'>Home</Link></li>
        <li><Link className='font-bold' to='/alltoys'>All Toys</Link></li>
        <li><Link className='font-bold' to='/blog' >Blogs</Link></li>
        </>
    }
        

    </>
    return (
        <div>
            <div className="navbar bg-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItam}

                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"> TOY CARS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItam}

                    </ul>
                </div>
                <div className='navbar-end'>
                    {
                        user ?

                            <div className="flex align-middle">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={`${user.photoURL}`} />
                                    </div>
                                    </label>
                                    <div>
                                        <Link onClick={handelLogout}>Logout</Link>
                                    </div>
                                

                            </div>

                            :

                            <div>
                                <Link to="/login">Login</Link>
                            </div>


                    }
                </div>
            </div>

        </div>
    );
};

export default NavBar;