import styled from 'styled-components';

export const SignUpBoxContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 80vh;
    display: flex;
    border-radius: 20px;
`;

export const SignUpContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px 20px;

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 10px;
    }
`;

export const SignInSubtitle = styled.span`
    font-size: 20px;
    height: 40px;
    width: 40px;
    margin: 0 auto;
    background-color: #00adb5;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SignUpTitle = styled.h2`
    margin: 10px 0;
    text-align: center;
`;

export const AccountContainer = styled.p`
    position: relative;
    margin: 10px 0px 5px 0px;
    text-transform: uppercase;
    font-weight: 300;

    & button {
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        font-weight: 500;
        text-transform: uppercase;
        text-decoration: none;
        color: #00adb5;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    min-height: 80vh;
    background: #ffffff;
    transition: 0.5s;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    & img {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.9;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;

        &:hover {
            opacity: 1;
        }
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;