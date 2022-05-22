import React from 'react';

const FeaturedSingle = ({tool}) => {
    const {name, price, description, img} = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSingle;