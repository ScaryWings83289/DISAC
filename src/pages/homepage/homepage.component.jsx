import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import CarouselContainer from './../../components/carousel/carousel.component';

const HomePage = () => (
    <HomePageContainer>
        <CarouselContainer />
        <Directory />
    </HomePageContainer>
);

export default HomePage;