import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 40px;
    background-color: #000000;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`;

export const LogoContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 70px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #ffffff;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;