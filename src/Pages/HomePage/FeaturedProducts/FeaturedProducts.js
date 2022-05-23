import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import FeaturedSingle from '../FeaturedSingle/FeaturedSingle';

const FeaturedProducts = () => {
    
    const navigate = useNavigate();

    const handleBuy = id =>{
        const url= `http://localhost:5000/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
           
            navigate(`/singleTool/${id}`);
        })
    }

    const { isLoading, refetch, data: tools } = useQuery(['tool'], () =>
     fetch(`http://localhost:5000/tool`).then(res =>
       res.json()
     )
   )

   if (isLoading){
       return <Loading></Loading>
   }

   const shuffled = tools.sort(() => 0.5 - Math.random());
   console.log(shuffled)
    const sliceItems = shuffled.slice(0,4); 
    return (
        <div>
            <h2 className='text-center text-5xl font-black my-16'>Featured Products</h2>
            <div class="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-5">

            {
                sliceItems.map(tool => <FeaturedSingle
                    key={tool._id}
                    tool={tool}
                    refetch={refetch}
                    handleBuy = {handleBuy}
                >
                </FeaturedSingle>)
            }
                
            </div>
            <div className="card-actions justify-center mt-8">
                    <button className="btn btn-secondary "><Link to='/allProducts'><span className='font-bold'>Check More Tools</span></Link></button>
                </div>


        </div>
    );
};

export default FeaturedProducts;