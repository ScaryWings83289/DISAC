import React, { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import Footer from './../../components/footer/footer.component';

const SignInAndSignUpPage = () => {
    const [currentState, setCurrentState ] = useState(1);

    return(
        <div>
            <SignInAndSignUpContainer>
                {(currentState === 1) ?
                    <SignIn setCurrentState={setCurrentState} />
                    :
                    <SignUp setCurrentState={setCurrentState} />
                }
            </SignInAndSignUpContainer>
            <Footer />
        </div>
    )
};

export default SignInAndSignUpPage;