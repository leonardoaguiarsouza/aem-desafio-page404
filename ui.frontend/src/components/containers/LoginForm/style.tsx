import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  & *:not(img) {
    width: 379px;
    font-family: 'Poppins';
    font-style: normal;
    color: #E0E0E0;
  }

  & .logo {
    visibility: hidden;

    @media (max-width: 768px) {
      visibility: visible;
    }

  }

  & h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 90px;
  }

  & h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }

  & h3 {
    width: 301px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  width: 50%;
  overflow: hidden;
  background-image: url(${(props) => props.src});

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  max-height: 500px;
`;

export const ErrorText = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #E9B425 !important;
    visibility: ${(props) => props.isLoginValid ? "hidden" : "visible"};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;