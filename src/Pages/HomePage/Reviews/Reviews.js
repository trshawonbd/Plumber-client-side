import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const { isLoading, refetch, data: reviews } = useQuery(['review'], () =>
     fetch(`http://localhost:5000/review`).then(res =>
       res.json()
     )
   )

   if (isLoading){
       return <Loading></Loading>
   }

    return (
        <div>
            <h2 className='text-center text-5xl font-black my-16'>Valuable Reviews: {reviews.length}</h2>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

                {
                    reviews.map(review => <SingleReview
                    key={review._id}
                    reviewItem = {review}
                    refetch = {refetch}
                    >

                    </SingleReview>)
                }

            </div>
        </div>
    );
};

export default Reviews;