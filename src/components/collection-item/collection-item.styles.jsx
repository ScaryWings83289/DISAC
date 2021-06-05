import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin: 0 10px;
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 10%);

    &:hover {
        .image {
            opacity: 0.8;
        }

        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 45vw;
        margin: 0px;

        &:hover {
            .image {
                opacity: unset;
            }

            button {
                opacity: unset;
            }
        }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 100%;
    opacity: 0.7;
    position: absolute;
    bottom: 56px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        bottom: 55px;
        min-width: unset;
        padding: 0 10px;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 85%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 5px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 0 10px;

    @media screen and (max-width: 800px) {
        padding: 0px 5px;
    }
`;

export const NameContainer = styled.span`
    font-size: 17px;
    font-weight: 500;
    width: 70%;

    @media screen and (max-width: 800px) {
        width: 65%;
        font-size: 15px;
    }
`;

export const PriceContainer = styled.span`
    font-size: 17px;
    font-weight: 500;
    width: 30%;
    text-align: right;

    @media screen and (max-width: 800px) {
        width: 35%;
        font-size: 15px;
    }
`;