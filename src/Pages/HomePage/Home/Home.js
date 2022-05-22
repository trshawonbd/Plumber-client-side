import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Join from '../Join/Join';
import Offer from '../Offer/Offer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <BusinessSummary></BusinessSummary>
            <Join></Join>
            <Offer></Offer>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;