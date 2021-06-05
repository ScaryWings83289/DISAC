import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    width: 30%;
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 10px 10px 20px;
    border-radius: 10px;
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 10%);

	&:hover {
		cursor: pointer;

		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
	}

    @media screen and (max-width: 800px) {
        width: 44vw;
        height: 200px;
        margin: 0 5px 15px;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5F5;
    opacity: 0.6;
    position: absolute;
    bottom: 0px;
    display: flex;
    transition: .5s all ease-in-out;

    &:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 800px) {
        height: 40px;
        display: flex;
        padding: 0 5px;
    }
`;

export const ContentTitle = styled.span`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.4px;
    color: #4a4a4a;

    @media screen and (max-width: 800px) {
        font-size: 14px;
    }
`;

export const ContentSubtitle = styled.span`
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.2px;

    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`;