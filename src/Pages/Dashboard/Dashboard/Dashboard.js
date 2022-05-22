import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth); 
    return (
<div class="drawer drawer-mobile">
            <input id="dasboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl text-black-600'>Welcome to Your Dashboard</h2>
               <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dasboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myReview'>My Review</Link></li>
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    <li><Link to='/dashboard/addTool'>Add Tool</Link></li>
{/*                     {admin && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctors</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>} */}
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;