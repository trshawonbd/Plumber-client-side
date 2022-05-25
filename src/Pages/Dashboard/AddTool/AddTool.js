import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTool = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const imageStorageKey ="5013833aebae0eedbc72b8f4f357d327";

    const onSubmit = async data => {
        console.log('data' , data);
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
                    name: data.name,
                    availableQuantity: data.availableQuantity,
                    price: data.price,
                    picture: img,
                    description: data.description,
                    minimumQuantity: data.minimumQuantity
                }

                
                fetch(`https://stark-bayou-71570.herokuapp.com/tool`,{
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
                        toast.success(`Tool is added successfully`);
                       
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
        <div className=' md : flex flex-col items-center justify-center'>
        <div className="card w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add Tool</h2>
                <form  onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Tool Name</span>
                        </label>
                        <input type="text"
                            placeholder="Tool Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Minimum Quantity</span>
                        </label>
                        <input type="number"
                            placeholder="Minimum Order Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order is required'
                                },
                                min: {
                                    value: 0,
                                    message: 'Minumum Quantity cannot be less than 0'
                                  }
                                
                            })}
                        />
                        <label className="label">
                            {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}
                            {errors.minimumQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.minimumQuantity.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <input type="number"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is required'
                                },
                                min: {
                                    value: 0,
                                    message: 'Available Quantity cannot be less than 0'
                                  }
                            })}
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                            {errors.availableQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input type="number"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                },
                                min: {
                                    value: 0,
                                    message: 'Price cannot be less than 0'
                                  }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            {errors.price?.type === 'min' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}

                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Desciption</span>
                        </label>
                        <textarea type="text"
                            placeholder="Your Description"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is required'
                                },
                            })}
                        />
                        
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
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

                    <input className='btn w-full max-w-xs btn-secondary mt-5' type="submit" value='Add Tool' />
                </form>


            </div>
        </div>
    </div>
    );
};

export default AddTool;