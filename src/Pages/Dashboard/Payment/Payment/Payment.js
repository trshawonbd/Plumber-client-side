import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';



const stripePromise = loadStripe('pk_test_51L14xdEg9EPhhUQk3T1hnt29UWZwGtPbIpL4AgAgP2YyOzTRMWhPT0RqnOvhur2s6caPoALBRbOhy6VqUvkTCGbt00cshuWKy6');

const Payment = () => {
    const { id } = useParams();

    const url = `https://stark-bayou-71570.herokuapp.com/booked/${id}`;

    const { data: booked, isLoading } = useQuery(['book', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center flex-col items-center'>
            <div class="card w-full max-w-md bg-base-100 shadow-2xl my-12">
                <div class="card-body">
                    <p className="text-primary font-bold">Hello, {booked.userName}</p>
                    <h2 class="card-title">Please Pay for {booked.name}</h2>
                    <p>Your Bill is: {booked.price} * {booked.quantity} = {booked.total} </p>
                    <p>Please pay: ${booked.total}</p>
                </div>
            </div>
            <div class="card  w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            booked = {booked}
                        ></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;