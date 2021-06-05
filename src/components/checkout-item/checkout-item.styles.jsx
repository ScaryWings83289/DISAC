import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 16px;

    @media screen and (max-width: 800px) {
        font-size: 13px;
    }
`;

export const ImageContainer = styled.div`
    width: 22%;

    img {
        display: block;
        margin: 0 auto;
        width: 80%;
        height: 150px;

        @media screen and (max-width: 800px) {
            width: 90%;
            height: auto;
        }
    }
`;

export const TextContainer = styled.span`
    width: 22%;
    display: flex;
    justify-content: center;
    padding: 0 5px;
`;

export const QuantityContainer = styled(TextContainer)`
    width: 22%;
    display: flex;
    justify-content: center;

    span {
        margin: 0 15px;
    }

    div {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        span {
            margin: 0 8px;
        }
    }
`;

export const RemoveButtonContainer = styled.div`
    width: 12%;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;