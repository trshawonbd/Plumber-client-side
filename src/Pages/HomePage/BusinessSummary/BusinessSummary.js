import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center '>
            <h2 className='text-center text-5xl font-black my-16'>Our Business Summary</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat bg-primary">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl ">Customers</div>
                    <div className="stat-value text-secondary">100 + </div>
                    <div className="stat-desc  font-bold">21% more than last month</div>
                </div>
                <div className="stat bg-secondary">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Annual Revenue</div>
                    <div className="stat-value text-primary">120M + </div>
                    <div className="stat-desc  font-bold">41% more than last month</div>
                </div>
                <div className="stat bg-primary">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Reviews</div>
                    <div className="stat-value text-secondary">33K + </div>
                    <div className="stat-desc  font-bold">31% more than last month</div>
                </div>
                <div className="stat bg-secondary">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Tools</div>
                    <div className="stat-value text-primary">50 + </div>
                    <div className="stat-desc  font-bold">11% more than last month</div>
                </div>

                <div className="stat bg-primary">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc text-primary font-bold">21% more than last month</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;