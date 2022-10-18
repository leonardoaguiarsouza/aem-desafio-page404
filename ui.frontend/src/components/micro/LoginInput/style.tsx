import styled from 'styled-components';

export const Input = styled.div`
    position: relative;

    & img {
        position: absolute;
        width: 20px;
        right: 20px;
        top: 16px;
    }

    & input {
        height: 60px;
        background: #26292C;
        border: 1px solid ${(props) => props.isLoginValid ? "#FFFFFF" : "red"};
        border-radius: 50px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding: 20px;
        padding-right: 45px;

        ::placeholder {
        color: #E0E0E0;
        }
    }

    & input[type='password']:not(:placeholder-shown) {
        font-family: Verdana;
        font-size: 25px;
        letter-spacing: 0.125em;
    }
`;