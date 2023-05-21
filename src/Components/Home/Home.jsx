import React from 'react';
import Banner from '../Benner/Banner';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import OusGallery from '../OurGallery/OusGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OusGallery></OusGallery>
            <CategoryTabs></CategoryTabs>
        </div>
    );
};

export default Home;