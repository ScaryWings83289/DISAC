import styled from 'styled-components';

export const TitleContainer = styled.h2`
    width: 1000px; 
    text-align: center;
    margin: 20px auto 0px auto;
    font-weight: 400;

    @media screen and (max-width: 930px) {
        width: 90%;
        font-size: 19px;
        margin: 20px;
    }
`;

export const MapContainer = styled.div`
    width: 900px;
    min-height: 72.2vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;

    > *:first-child {
        width: 45%;
        height: 450px;
        border: 0;
    }

    @media screen and (max-width: 930px) {
        flex-direction: column;
        width: unset;
        align-items: center;

        > *:first-child {
            width: 90%;
            height: 350px;
            margin-bottom: 30px;
        }
    }
`;

export const FormContainer = styled.div`
    width: 50%;

    > *:last-child {
        margin-bottom: 45px
    }

    @media screen and (max-width: 930px) {
        width: 90%;
    }
`;