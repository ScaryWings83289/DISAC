import styled from 'styled-components';

export const SignUpBoxContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
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
    background: black;
    color: white;
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
    margin: 10px 0px 0px 0px;
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
        color: #4285F4;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background: #ffffff;
    transition: 0.5s;

    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;