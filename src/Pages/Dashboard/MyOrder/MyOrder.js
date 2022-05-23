import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booked?email=${user.email}`, {
                method: 'GET',
                 headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                } 
            })
                .then(res => {
                     if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');

                    } 

                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user, navigate])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.total}</td>
                            <td><button className='btn btn-xs btn-primary'>{order.status}</button></td>
                            <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}  >
                                <button className='btn btn-xs btn-accent'>Pay Now</button>
                            </Link>}
                            {(order.price && order.paid) && 
                                <div>
                                <p><span className='text-success'>Paid</span></p>
                                <p>Transaction id: <span className='text-orange-500'>{order.transactionId}</span></p>
                            </div>
                            }
                            
                            </td>
                            <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>

    );
};

export default MyOrder;