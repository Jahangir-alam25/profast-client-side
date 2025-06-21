import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../Services/OurServices';
import ClientLogos from '../ClientLogos/ClientLogos';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import BeMerchant from '../BeMerchant/BeMerchant';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <ClientLogos></ClientLogos>
            <BenefitsSection></BenefitsSection>
            <BeMerchant></BeMerchant>
        </div>
    );
};

export default Home;