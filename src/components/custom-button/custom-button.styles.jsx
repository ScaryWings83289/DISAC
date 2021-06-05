import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: #39a6a3;
    color: #ffffff;
    border: none;

    &:hover {
        background-color: #00adb5;
        border: none;
    }
`;

const invertedButtonStyles = css`
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    background-color: #ffffff;
    color: #000000;
    border: none;

    &:hover {
        background-color: #00adb5;
        color: #ffffff;
    }
`;

const googleSignInStyles = css`
    background-color: #ffffff;
    padding: 0 10px;
    color: #39a6a3;
    border: 1px solid #39a6a3;
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 1px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${getButtonStyles}

    @media screen and (max-width: 800px) {
        min-width: 150px;
        padding: 0 10px;
    }
`;