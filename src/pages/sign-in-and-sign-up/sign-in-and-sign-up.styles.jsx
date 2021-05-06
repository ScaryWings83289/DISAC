import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    width: 850px;
    min-height: 73vh;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 930px) {
        flex-direction: column;
        width: unset;
        align-items: center;

        > *:first-child {
            margin-bottom: 50px;
        }
    }
`;