import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import Footer from './../../components/footer/footer.component';

const HomePage = () => (
    <HomePageContainer>
        <Directory />
        <Footer />
    </HomePageContainer>
);

export default HomePage;