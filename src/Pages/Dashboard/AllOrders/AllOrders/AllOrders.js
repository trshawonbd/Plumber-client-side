import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import DeleteModalForAdmin from '../DeleteModalForAdmin/DeleteModalForAdmin';

const AllOrders = () => {

    const [user] = useAuthState(auth);
    const [deleting, setDeleting] = useState(null);

    const navigate = useNavigate();



    const { isLoading, refetch, data: orders } = useQuery(['orders'], () =>
     fetch(`http://localhost:5000/allOrder`,
     {
        method:'GET',
         headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        } 
     })
    .then(res =>
       res.json()
     )

   )

   if (isLoading){
       return <Loading></Loading>
   }
    

    const handleStatus = (id) =>{
        const url = `http://localhost:5000/booked/${id}`;
        console.log(url)
       
        fetch(url, {
            method: 'PUT',
             headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            } 
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to ship');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Going for shipment`);
                }

            })

    }

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
                            <td><button onClick={() => handleStatus(order._id)} className='btn btn-xs btn-primary'>{order.status}</button></td>
                            <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}  >
                                <button className='btn btn-xs btn-accent'>Unpaid</button>
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
                deleting && <DeleteModalForAdmin
                deleting={deleting}
                refetch={refetch}
                setDeleting = {setDeleting}
                orders ={orders}
                ></DeleteModalForAdmin>
            }
        </div>

    );
};

export default AllOrders;