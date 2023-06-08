import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import YogaAbout from '../YogaAbout/YogaAbout';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <YogaAbout></YogaAbout>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    )
    
};

export default Home;