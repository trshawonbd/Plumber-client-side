import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;