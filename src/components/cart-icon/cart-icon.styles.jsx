import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/bag.svg';

export const CartContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
    width: 40px;
    height: 40px;

    @media screen and (max-width: 800px) {
        width: 32px;
        height: 32px;
    }
`;

export const ItemCountContainer = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    color: #ffffff;
`;