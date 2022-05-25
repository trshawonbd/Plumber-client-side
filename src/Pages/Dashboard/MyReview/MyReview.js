import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey ="5013833aebae0eedbc72b8f4f357d327";

    const onSubmit = ( data) => {
       const name = user?.displayName;
        console.log('data' , data, name);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        reset();

        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then (result => {
            if(result.success){
                const img = result.data.url;
                const tool = {
                    name: user?.displayName,
                    ratings: data.ratings,
                    
                    userPicture: img,
                    review: data.review,
                    
                }
                console.log(tool)
                
                fetch(`https://stark-bayou-71570.herokuapp.com/review`,{
                    method: "POST",
                    headers: {
                        'content-type' : 'application/json',
                         authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                    },
                    body: JSON.stringify(tool)
                })
                .then(res => res.json())
                .then (inserted => {
                    console.log('Inserted', inserted);
                    if (inserted.insertedId){
                        toast.success(`Thanks for your feedback`);
                       
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
        <div className='flex justify-center flex-col items-center  p-6 rounded'>
            <h2 className='text-center text-5xl font-black my-16'>Please Provide your Review</h2>

            <form  onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Your Name</span>
                    </label>
                    <input type="text"
                        
                        disabled value={user?.displayName}
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Ratings</span>
                    </label>
                    <input type="floot"
                        placeholder="Your Ratings"
                        className="input input-bordered w-full max-w-xs"
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: 'Ratings is required'
                            },
                            max: {
                                value: 5,
                                message: 'Ratings should be equal or less than 5'
                            },
                            min: {
                                value: 0,
                                message: 'Ratings should be equal or more than 0'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'min' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                        {errors.ratings?.type === 'max' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}

                    </label>
                </div>



                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Your Comment</span>
                    </label>
                    <textarea type="text"
                        placeholder="Your Review"
                        className="textarea textarea-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            },
                        })}
                    />

                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                    </label>
                </div>




                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Your Photo</span>
                    </label>
                    <input type="file"

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

                <input className='btn w-full max-w-xs btn-primary mt-5' type="submit" value='Post your review' />
            </form>

        </div>
    );
};

export default MyReview;