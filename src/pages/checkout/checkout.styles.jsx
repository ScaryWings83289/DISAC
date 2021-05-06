import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 74.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    button {
        margin-left: auto;
        margin-top: 30px;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        padding: 0px 10px;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;
    display: flex;
    justify-content: center;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        width: 22%;

        &:last-child {
            width: 12%;
        }
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media screen and (max-width: 800px) {
        font-size: 25px;
    }
`;