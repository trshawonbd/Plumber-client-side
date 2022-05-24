import React from 'react';

const Product = ({tool, handleBuy}) => {
    const {_id, name, availableQuantity, minimumQuantity, price, picture, description} = tool;
    return (
<div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body font-bold">
                <h2 className="card-title text-primary text-center">{name}</h2>
                <p className='text-secondary font-black'>Price: {price} per unit</p>
                <p>Available: {availableQuantity}</p>
                <p>Minimum Quantity: {minimumQuantity}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuy(_id)} className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;