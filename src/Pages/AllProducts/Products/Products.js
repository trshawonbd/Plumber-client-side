import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const navigate = useNavigate();

    const handleBuy = id =>{
        const url= `https://stark-bayou-71570.herokuapp.com/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
           
            navigate(`/singleTool/${id}`);
        })
    }

    const { isLoading, refetch, data: tools } = useQuery(['tool'], () =>
     fetch(`https://stark-bayou-71570.herokuapp.com/tool`).then(res =>
       res.json()
     )
   )

   if (isLoading){
       return <Loading></Loading>
   }
    return (
        <div>
            <h2 className='text-center text-5xl font-black my-16'>All Products:{tools.length}</h2>
            <div class="grid grid-cols-1 justify-items-center lg:grid-cols-4 gap-5">

            {
                tools.map(tool => <Product
                    key={tool._id}
                    tool={tool}
                    refetch= {refetch}
                    handleBuy = {handleBuy}
                >
                </Product>)
            }
                
            </div>

        </div>
    );
};

export default Products;