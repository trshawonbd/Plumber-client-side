import React from 'react';

const SingleReview = ({reviewItem}) => {
    const {name, ratings, userPicture, review} = reviewItem;
    console.log(reviewItem)
    return (
        <div>
        <div className="card card-compact  bg-base-100 shadow-xl">
            <div className="avatar mt-5 flex justify-center   ">
                <div className="w-24  rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={userPicture} alt='' />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="card-title">Ratings:{ratings}</h3>
                <p>{review}</p>
            </div>
        </div>

    </div>
    );
};

export default SingleReview;