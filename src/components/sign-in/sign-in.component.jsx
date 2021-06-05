import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as GoogleIconSVG } from '../../assets/google.svg';

import {
    googleSignInStart,
    emailSignInStart
} from '../../redux/user/user.actions';

import {
    SignInBoxContainer,
    ImageContainer,
    SignInContainer,
    SignInTitle,
    SignInSubtitle,
    ButtonsBarContainer,
    AccountContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart, setCurrentState }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInBoxContainer>
            <ImageContainer>
                <img src="https://res.cloudinary.com/scarywings83289/image/upload/v1621240902/DISAC/skill_dk5flg.jpg" alt="signin"></img>
            </ImageContainer>
            <SignInContainer>
                <SignInSubtitle><FontAwesomeIcon icon={faUser} /></SignInSubtitle>
                <SignInTitle>Sign In</SignInTitle>
                
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton
                            type='button'
                            onClick={googleSignInStart}
                            isGoogleSignIn
                            className='google'
                        >
                            Sign in with <GoogleIconSVG style={{width: 20, marginLeft: 5}} />
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
                <AccountContainer>Don't have an account ? <button onClick={() => {setCurrentState(2)}}>Sign Up.</button></AccountContainer>
            </SignInContainer>
        </SignInBoxContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);