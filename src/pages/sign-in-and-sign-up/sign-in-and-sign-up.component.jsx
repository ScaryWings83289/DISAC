import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import Footer from './../../components/footer/footer.component';

const SignInAndSignUpPage = () => (
    <div>
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
        <Footer />
    </div>
);

export default SignInAndSignUpPage;