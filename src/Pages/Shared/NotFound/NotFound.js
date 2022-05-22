import React from 'react';
import notFound from '../../../assets/NotFound/404.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=' d-flex '>
            <img className='h-screen w-screen' src={notFound} alt="" srcset="" />
        </div>

    );
};

export default NotFound;