import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SingleTool = () => {

    const param = useParams();
    const { id } = param;

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/tool/${id}`;

    const { data: serviceDetail, isLoading } = useQuery(['details', id], () => fetch(url, {
        method: 'GET',
        /*         headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                } */
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const { name, availableQuantity, minimumQuantity, price, picture, description } = serviceDetail;
    console.log(parseInt(availableQuantity), parseInt(minimumQuantity))

    const handlePurchase = event =>{
        event.preventDefault();
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const quantity = event.target.quantity.value;
        console.log(user.displayName)

        const quantityInInt = parseInt(quantity);
        const availableQuantityInInt = parseInt(availableQuantity);
        const minimumQuantityInInt = parseInt(minimumQuantity);
        const total = quantityInInt * price;
        event.target.reset();

        if ((minimumQuantityInInt <= quantityInInt) && (quantityInInt <= availableQuantityInInt)){
           
            const bookedTool = {
                name: name,
                price: price,
                userName: user.displayName,
                email: user.email,
                phone: phone,
                address : address,
                quantity : quantity, 
                total: total
            }
            console.log(bookedTool);

            const url = `http://localhost:5000/booked`;

            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTool)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        toast(`${name} is booked`)
                    }
                    else {
                        toast.error(`something went wrong. Please try again`)
                    }
                    
    
                })



        }
        else{
            toast(`Your quantity must be less than ${availableQuantity} and more than ${minimumQuantity} `)
        }

        
    } 


    return (
        <div class="card m-12 w-100  lg:card-side bg-base-100 ">
            <figure className='bg-primary'><img className='w-96 ' src={picture} alt="Album" /></figure>
            <div class="card-body bg-secondary lg:w-1/3">
                <h2 className="card-title text-primary justify-center mb-6 text-3xl">Purchase Information</h2>
                <form  onSubmit={handlePurchase}  className='grid grid-cols-1 gap-4 justify-items-center'>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" name='userName' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text"  name='address' placeholder="Address" className="input input-bordered w-full max-w-xs text-lg font-bold" required />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone No.</span>
                        </label>
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs text-lg font-bold" required/>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Product Name</span>
                        </label>
                        <input type="text" disabled value={name} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <input type="number" id='quantity' name='quantity' className="input input-bordered w-full max-w-xs text-lg font-bold" required />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input type="number" id='price' name='price' disabled value={price} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div>
{/*                     <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Total</span>
                        </label>
                        <input type="text" disabled  value={total} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div> */}
                    <input type="submit" value="Purchase" className="btn btn-primary w-full max-w-xs text-lg font-bold" />
                </form>
            </div>
            <div class="card-body bg-primary lg:w-1/3 grow-0 items-center">
                <h2 className="card-title text-accent text-3xl">{name}</h2>
                <p className='text-secondary text-2xl font-black'>Price: {price} per unit</p>
                <p className='text-accent text-2xl font-bold'>Available: {availableQuantity}</p>
                <p className='text-accent text-2xl font-bold'>Minimum Quantity: {minimumQuantity}</p>
                <p className='text-accent text-2xl font-bold'>Description: {description}</p>
            </div>

        </div>
    );
};

export default SingleTool;