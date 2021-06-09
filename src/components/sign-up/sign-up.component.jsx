import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { 
    SignUpBoxContainer,
    SignUpContainer, 
    SignUpTitle,
    SignInSubtitle,
    AccountContainer,
    ImageContainer 
} from './sign-up.styles';

const SignUp = ({ signUpStart, setCurrentState }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, phoneNumber, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, phoneNumber, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpBoxContainer>
            <SignUpContainer>
                <SignInSubtitle><FontAwesomeIcon icon={faUser} /></SignInSubtitle>
                <SignUpTitle>Create an Account</SignUpTitle>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='number'
                        name='phoneNumber'
                        value={phoneNumber}
                        onChange={handleChange}
                        label='Mobile'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
                <AccountContainer>Already have an account ? <button onClick={() => {setCurrentState(1)}}>Sign In.</button></AccountContainer>
            </SignUpContainer>
            <ImageContainer>
                <img src="https://res.cloudinary.com/scarywings83289/image/upload/v1621240820/DISAC/11_gpy93e.jpg" alt="signup"></img>
            </ImageContainer>
        </SignUpBoxContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);