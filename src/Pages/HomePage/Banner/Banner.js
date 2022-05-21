import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen banner">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-black text-secondary">Tool Accessories
                    </h1>
                    <p className="mb-5 font-bold">Our principle is to constantly develop and improve through the experience gained, therefore we offer a wide range of different services. The work is fast and of high quality, and we also guarantee it.</p>
                    <button className="btn btn-primary font-black">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;