import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 185px;
  display: flex;
  justify-content: space-between;

  & img {
    height: fit-content;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-right: 80px;

  font-family: 'Poppins';
  font-style: normal;
  text-align: right;
  color: #C12D18;

  & > * {
    height: 100%;
  }

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
  }

  & h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
  }

  & p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #222222;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BgImg = styled.div`
  width: auto;
  display: flex;

  & img {
    object-position: -100px 100px;
  }
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
`;

export const Image = styled.div`
  width: 50%;
  overflow: hidden;
  background-image: url(${(props) => props.src});

  @media (max-width: 768px) {
    display: none;
  }
`;