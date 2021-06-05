import React, { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => {
    const [currentState, setCurrentState ] = useState(1);

    return(
        <SignInAndSignUpContainer>
            {(currentState === 1) ?
                <SignIn setCurrentState={setCurrentState} />
                :
                <SignUp setCurrentState={setCurrentState} />
            }
        </SignInAndSignUpContainer>
    )
};

export default SignInAndSignUpPage;