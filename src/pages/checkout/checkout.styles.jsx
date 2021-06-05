import styled from 'styled-components';
import CustomButton from '../../components/custom-button/custom-button.component';

export const CheckoutPageContainer = styled.div`
`;

export const CartMessageContainer = styled.div`
    display: block;
    margin: 0 auto;
    padding: 93.5px 100px;

    @media screen and (max-width: 800px) {
        min-height: 81.5vh;
        padding: 45px 10px;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleContainer = styled.h1`
    text-align: center;
    margin: 0px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    
    @media screen and (max-width: 800px) {
        font-size: 25px;
    }
`;

export const SubtitleContainer = styled.p`
    text-align: center;
    margin: 0px;
    font-size: 25px;
    font-weight: 400;

    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
`;

export const CartDropdownButton = styled(CustomButton)`
    display: block;
    margin: 20px auto;
`;

export const CheckoutContainer = styled.div`
    width: 60%;
    min-height: 76.2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px auto;

    button {
        margin-left: auto;
        margin-top: 30px;
    }

    @media screen and (max-width: 800px) {
        min-height: 73.7vh;
        width: 100%;
        padding: 0px 5px;
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
    width: 22%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    &:last-child {
        width: 12%;
    }

    @media screen and (max-width: 800px) {
        font-size: 13px;
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 30px;
    font-weight: 400;

    svg {
        margin-right: 5px;
    }

    @media screen and (max-width: 800px) {
        font-size: 22px;
    }
`;