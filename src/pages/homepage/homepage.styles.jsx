import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > *:first-child {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        > *:first-child {
            margin-bottom: 20px;
        }
    }
`;