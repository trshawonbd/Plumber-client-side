import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const { isLoading, refetch, data: tools } = useQuery(['tool'], () =>
     fetch(`http://localhost:5000/tool`).then(res =>
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
                >
                </Product>)
            }
                
            </div>

        </div>
    );
};

export default Products;