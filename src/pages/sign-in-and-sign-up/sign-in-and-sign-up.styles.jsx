import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
    position: relative;
    width: 850px;
    min-height: 73vh;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    background: #fff;
    border-radius: 20px;
    //box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    box-shadow: -1px 4px 28px 0px rgb(0 0 0 / 20%);
    overflow: hidden;    

    @media screen and (max-width: 900px) {
        width: 350px;
        min-height: 80vh;
    }
`;