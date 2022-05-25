import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SingleTool = () => {

    const [disable, setDisable] = useState(false);
    const navigate = useNavigate();

    const param = useParams();
    const { id } = param;

    const [user, loading, error] = useAuthState(auth);

    const url = `https://stark-bayou-71570.herokuapp.com/tool/${id}`;

    const { data: serviceDetail, isLoading, refetch } = useQuery(['details', id], () => fetch(url, {
        method: 'GET',
        /*         headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                } */
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const {_id, name, availableQuantity, minimumQuantity, price, picture, description } = serviceDetail;
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
                id: _id,
                name: name,
                price: price,
                userName: user.displayName,
                email: user.email,
                phone: phone,
                address : address,
                quantity : quantity, 
                availableQuantity: availableQuantity,
                total: total,
                status: 'pending',
            }
            console.log(bookedTool);

            const url = `https://stark-bayou-71570.herokuapp.com/booked`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookedTool)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.success) {
                        toast(`${name} is booked`);
                        refetch();
                        navigate('/dashboard/myOrder')

                    }
                    else {
                        toast.error(`something went wrong. Please try again`);
                        refetch();
                    }   
                })
        }
        else{
            toast.error(`Your quantity must be less than ${availableQuantity} and more than ${minimumQuantity} `);
            refetch();
        }

        
    } 


    return (
        <div class="card m-12 w-100  lg:card-side bg-purple-100 ">
            <figure className=''><img className='w-96 ' src={picture} alt="Album" /></figure>
            <div class="card-body  lg:w-1/3">
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
                        <input type="number" id='quantity' name='quantity' placeholder='' className="input input-bordered w-full max-w-xs text-lg font-bold" required />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input type="number" id='price' name='price' disabled value={price} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div>
                     <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Available</span>
                        </label>
                        <input type="text" disabled  value={availableQuantity} className="input input-bordered w-full max-w-xs text-lg font-bold" />
                    </div> 
                    <input disabled = {(disable) }  type="submit" value="Purchase" className="btn btn-primary w-full max-w-xs text-lg font-bold" />
                </form>
            </div>
            <div class="card-body flex justify-center items-center lg:w-1/3  ">
                <h2 className="card-title grow-0 text-accent text-3xl">{name}</h2> 
                <p className='text-primary grow-0 text-2xl font-black'>Price: {price} per unit</p><hr />
                <p className='text-accent grow-0 text-2xl font-bold'>Available: {availableQuantity}</p><hr />
                <p className='text-accent grow-0 text-2xl font-bold'>Minimum Quantity: {minimumQuantity}</p><hr />
                <p className='text-accent grow-0 text-2xl font-bold'>Description: {description}</p>
            </div>

        </div>
    );
};

export default SingleTool;