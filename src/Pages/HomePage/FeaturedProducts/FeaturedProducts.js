import React, { useEffect, useState } from 'react';
import FeaturedSingle from '../FeaturedSingle/FeaturedSingle';

const FeaturedProducts = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-5xl font-black my-16'>Featured Products: {tools.length}</h2>
            <div class="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-5">

            {
                tools.map(tool => <FeaturedSingle
                    key={tool._id}
                    tool={tool}
                >
                </FeaturedSingle>)
            }
                
            </div>


        </div>
    );
};

export default FeaturedProducts;