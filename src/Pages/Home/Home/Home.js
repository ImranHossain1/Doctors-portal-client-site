import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import DentalCareBanner from '../DentalCareBanner/DentalCareBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCareBanner></DentalCareBanner>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;