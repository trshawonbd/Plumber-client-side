import React from 'react';
import { Link } from 'react-router-dom';
import part1 from '../../../assets/offers/part1.jpg';
import part2 from '../../../assets/offers/part2.jpg';
import part3 from '../../../assets/offers/part3.jpg';
import './Offer.css'

const Offer = () => {
    return (
        <div className='mx-4'>
            <h2 className='text-center text-5xl font-black my-16 '>Special Offer</h2>
            <div className="grid md:grid-flow-row md: gap-y-2  lg:grid-flow-col grid-rows-3 lg:gap-2 ">
                <div className="row-span-3 ...">
                    <div className="hero md: max-w-full lg:min-h-full part1">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-100">
                                <h1 className="mb-28 text-5xl font-bold">Asset Tools</h1>
                                <button  className=" btn mr-20  btn-secondary"><Link to='/allProducts'>FLAT 35% DISCOUNT</Link></button>

                                <button className="mb-28 btn  btn-primary"><Link to='/allProducts'>Shop Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row-span-1 col-span-2 ...">
                    <div className="hero min-h-full part2">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-28 text-5xl font-bold">Suprimo's Kit</h1>
                                <button className=" btn mb-20  btn-secondary"><Link to='/allProducts'>Modern Tool</Link> </button>

                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 col-span-2 ...">
                    <div className="hero min-h-full part3">
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className="mb-28 text-5xl font-bold">Hand Modern
                                    Equipments</h1>
                                <button className=" btn mb-20  btn-secondary"><Link to='/allProducts'>Mega Collections</Link></button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;