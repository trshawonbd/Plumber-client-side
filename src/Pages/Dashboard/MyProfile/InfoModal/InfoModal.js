import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const InfoModal = ({refetch}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey ="5013833aebae0eedbc72b8f4f357d327";
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        console.log('data' , data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        
    

        const {email, displayName} = user;

         reset(); 

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then (result => {
            if(result.success){
                const img = result.data.url;
                const profile = {
                    name: displayName,
                    education: data.education,
                    city: data.city,
                    location: data.location,                   
                    phone: data.phone,
                    linkedIn: data.linkedIn,
                    picture: img,
                }

                const url1 =  `https://stark-bayou-71570.herokuapp.com/user/${email}`
                console.log(url1)
                
                fetch(url1,{
                    method: "PUT",
                    headers: {
                        'content-type' : 'application/json',
                         authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                    },
                    body: JSON.stringify(profile)
                })
                .then(res => res.json())
                .then (inserted => {
                    console.log('Inserted', inserted);
                    if ((inserted.insertedId) || (inserted.result.modifiedCount === 1)){
                        toast.success(`profile updated successfully`);
                        refetch();
                       
                    }
                    else{
                        toast.error("Something went wrong, please try again")
                        
                    }
                })
            }
            console.log('img', result);
        })
        
    }
    return (
<div>
        {/* <!-- Put this part before </body> tag-- > */}
        <input type="checkbox" id="confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <h2 className="text-center text-2xl font-bold">Please Provide your Information</h2>
                <form   onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">User Name</span>
                        </label>
                        <input type="text"
                            placeholder="User Name"
                            disabled
                            value={user.displayName}
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                            })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email"
                            value={user.email}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                
                            })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Education</span>
                        </label>
                        <input type="text"
                            placeholder="Your education"
                            className="input input-bordered w-full max-w-xs"
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">City</span>
                        </label>
                        <input type="text"
                            placeholder="Your City (ex. Dhaka)"
                            className="input input-bordered w-full max-w-xs"
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: 'City is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <textarea type="text"
                            placeholder="Your Location"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {...register("location", {
                                required: {
                                    value: true,
                                    message: 'Location is required'
                                },
                            })}
                        />
                        
                        <label className="label">
                            {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="number"
                            placeholder="Your Phone"
                            className="input input-bordered w-full max-w-xs"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone is required'
                                },
                            })}
                        />
                        
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn ID</span>
                        </label>
                        <input type="text"
                            placeholder="linkedIn ID"
                            className="input input-bordered w-full max-w-xs"
                            {...register("linkedIn", {

                            })}
                        />
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input  type="file"
                           
                            className="input input-bordered w-full max-w-xs "
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>
                    <div class="modal-action">
                    <input className='btn w-1/2 max-w-xs btn-secondary mt-5' type="submit" value='update information' />
                    <label for="confirm-modal" className='btn w-1/2 max-w-xs btn-secondary mt-5'>close</label>
                </div> 
                    
                    {/* <input className='btn w-full max-w-xs btn-secondary mt-5' type="submit" value='Add Tool' /> */}
                </form>
{/*                 <div class="modal-action">
                    <button onClick={() => handleUpdate()} class="btn btn-error btn-xs">update</button>
                    <label for="confirm-modal" class="btn btn-xs">close</label>
                </div> */}
            </div>
        </div>
    </div >
    );
};

export default InfoModal;