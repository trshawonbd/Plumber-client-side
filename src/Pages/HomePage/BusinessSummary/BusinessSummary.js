import React from 'react';
import customer from '../../../assets/business/customer.svg';
import money from '../../../assets/business/money.svg';
import review from '../../../assets/business/review.svg';
import tool from '../../../assets/business/tool.svg';
import view from '../../../assets/business/view.svg';

const BusinessSummary = () => {
    return (
        <div className='text-center '>
            <h2 className='text-center text-5xl font-black my-16'>Our Business Summary</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow">

                <div className="stat ">
                    <div className="stat-figure text-secondary">

                        <img src={customer}  className="inline-block w-12 h-12 stroke-current"  stroke-width="2" alt="" />
                    </div>
                    <div className="stat-title text-2xl ">Customers</div>
                    <div className="stat-value text-secondary">100 + </div>
                    <div className="stat-desc  font-bold">21% more than last month</div>
                </div>
                <div className="stat ">
                    <div className="stat-figure text-primary">
                    <img src={money}  className="inline-block w-12 h-12 stroke-current"  stroke-width="2" alt="" />
                    </div>
                    <div className="stat-title text-2xl">Annual Revenue</div>
                    <div className="stat-value text-primary">120M + </div>
                    <div className="stat-desc  font-bold">41% more than last month</div>
                </div>
                <div className="stat ">
                    <div className="stat-figure text-secondary">
                    <img src={review}  className="inline-block w-12 h-12 stroke-current"  stroke-width="2" alt="" />
                    </div>
                    <div className="stat-title text-2xl">Reviews</div>
                    <div className="stat-value text-secondary">33K + </div>
                    <div className="stat-desc  font-bold">31% more than last month</div>
                </div>
                <div className="stat ">
                    <div className="stat-figure text-primary">
                    <img src={tool}  className="inline-block w-12 h-12 stroke-current"  stroke-width="2" alt="" />
                    </div>
                    <div className="stat-title text-2xl">Tools</div>
                    <div className="stat-value text-primary">50 + </div>
                    <div className="stat-desc  font-bold">11% more than last month</div>
                </div>

                <div className="stat ">
                    <div className="stat-figure text-secondary">
                    <img src={view}  className="inline-block w-12 h-12 stroke-current"  stroke-width="2" alt="" />
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