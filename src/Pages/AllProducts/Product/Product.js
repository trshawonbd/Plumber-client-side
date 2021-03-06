import React from 'react';

const Product = ({tool, handleBuy}) => {
    const {_id, name, availableQuantity, minimumQuantity, price, picture, description} = tool;
    return (
<div className="card w-full bg-base-100 shadow-2xl">
            <figure><img className='w-full h-screen' src={picture} alt="Shoes" /></figure>
            <hr />
            <div className="card-body font-bold">
                <h2 className="card-title text-primary text-center">{name}</h2> <hr />
                <p className='text-secondary'>Price: {price} per unit</p> <hr />
                <p>Available: {availableQuantity}</p><hr />
                <p>Minimum Quantity: {minimumQuantity}</p><hr />
                <p>Description: {description}</p> <hr />
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuy(_id)} className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;