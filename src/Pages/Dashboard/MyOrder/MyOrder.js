import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import DeleteModalForUser from './MyOrderDelete/DeleteModalForUser/DeleteModalForUser';

const MyOrder = () => {
    /* const [orders, setOrders] = useState([]); */
    const [user] = useAuthState(auth);
    const [deleting, setDeleting] = useState(null);

    const navigate = useNavigate();

 

    const { isLoading, refetch, data: orders } = useQuery(['orders', user, navigate], () =>
    
        fetch(`https://stark-bayou-71570.herokuapp.com/booked?email=${user.email}`, {
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

    
    )

   if (isLoading){
       return <Loading></Loading>
   }

    return (
        <div class="overflow-x-auto">
            <table class="table shadow-2xl w-full">

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
                        orders?.map((order, index) => <tr className='shadow-2xl'>
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
                            { ( !order.paid) && 
                                <td><label onClick={() => setDeleting(order)} for="confirm-modal" class="btn btn-error btn-xs">Delete</label></td> 
                            }
                        </tr>)
                    }


                </tbody>
            </table>

            {
                deleting && <DeleteModalForUser
                deleting={deleting}
                refetch={refetch}
                setDeleting = {setDeleting}
                orders ={orders}
                ></DeleteModalForUser>
            }
        </div>

    );
};

export default MyOrder;