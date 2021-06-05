import styled from 'styled-components';

export const SignInBoxContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
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
        opacity: 0.9;

        &:hover {
            opacity: 1;
        }
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const SignInContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 10px;
    }
`;

export const SignInTitle = styled.h2`
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
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

export const ButtonsBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const AccountContainer = styled.p`
    position: relative;
    margin-top: 30px;
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