import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dasboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-black-600'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label for="dasboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        !admin && <>
                            <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                            <li><Link to='/dashboard/myReview'>My Review</Link></li>
                            
                        </>
                    }
                    
                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {admin && <>
                        <li><Link to='/dashboard/addTool'>Add Tool</Link></li>
                        <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li><Link to='/dashboard/allOrder'>All Order</Link></li>

                    </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;