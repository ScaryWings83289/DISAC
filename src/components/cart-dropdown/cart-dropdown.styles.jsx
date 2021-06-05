import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 80px;
    right: 45px;
    z-index: 5;

    @media screen and (max-width: 800px) {
        top: 70px;
        right: 9px;
    }
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
    padding: 0 15px;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;