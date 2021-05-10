import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0px 20px;

    @media(max-width: 800px) {
        padding: 0 10px;
    }
`;