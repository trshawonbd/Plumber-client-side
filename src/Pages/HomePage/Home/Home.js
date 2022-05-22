import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Join from '../Join/Join';
import Offer from '../Offer/Offer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <BusinessSummary></BusinessSummary>
            <Join></Join>
            <Offer></Offer>
        </div>
    );
};

export default Home;