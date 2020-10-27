import React from 'react';
import BusinessLogo from '../BusinessLogo/BusinessLogo';
import Footer from '../Footer/Footer/Footer';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import OurWork from '../OurWork/OurWork';
import Review from '../Review/Review/Review';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <main>
            <HeaderMain/>
            <BusinessLogo/>
            <Services/>
            <OurWork/>
            <Review/>
            <Footer/>
        </main>
    );
};

export default Home;