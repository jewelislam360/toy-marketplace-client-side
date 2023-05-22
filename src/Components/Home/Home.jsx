import React from 'react';
import Banner from '../Benner/Banner';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import OusGallery from '../OurGallery/OusGallery';
import AboutUs from '../AboutUs/AboutUs';
import OurAdvantage from '../OurAdvantage/OurAdvantage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <AboutUs></AboutUs>
            <OurAdvantage></OurAdvantage>
            <OusGallery></OusGallery>
           
            <CategoryTabs></CategoryTabs>
        </div>
    );
};

export default Home;