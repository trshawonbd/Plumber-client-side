import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './NavBar.css';

const NavBar = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        /* localStorage.removeItem('accessToken'); */
        navigate('/');
      };

    const navMenu = <>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='font-bold'><Link to="/allProducts">All Products</Link></li>
        <li className='font-bold'><Link to="/dashboard">Dashboard</Link></li>
        <li className='font-bold'><Link to="/blog">Blog</Link></li>
        <li className='font-bold'><Link to="/review">Review</Link></li>
        <li className='font-bold'><Link to="/about">About</Link></li>
        <li className='font-bold'>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button> : <Link to = "/login">Login</Link>}</li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navMenu
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl text-primary  "><span className='uppercase'>Plumber</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navMenu
                    }
                </ul>
            </div>
            {
                user ?             <div className="navbar-end">
                <a className="btn">{user?.displayName}</a>
            </div> : <div className="navbar-end">
                <a className="btn">Getting Started</a>
            </div>
            }
        </div>
    );
};

export default NavBar;