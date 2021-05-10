import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import Footer from './../../components/footer/footer.component';
import CarouselContainer from './../../components/carousel/carousel.component';

const HomePage = () => (
    <HomePageContainer>
        <CarouselContainer />
        <Directory />
        <Footer />
    </HomePageContainer>
);

export default HomePage;