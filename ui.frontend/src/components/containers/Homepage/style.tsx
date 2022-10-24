import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  background: #E5E5E5;

  display: flex;
  flex-direction: column;

  font-family: 'Poppins';
  font-style: normal;
`;

export const Header = styled.div`
  z-index: 1;
  min-height: 185px;
  display: flex;
  justify-content: space-between;

  & img {
    height: fit-content;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
`;

export const BgImg = styled.div`
  height: 100%;
  display: flex;

  & img {
    position: absolute;
    object-position: -100px 100px;
    z-index: 0;
    align-self: flex-end;;
  }

  @media (max-width: 768px) {
    & img {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.div`
  z-index: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding-right: 80px;

  text-align: right;
  color: #C12D18;
  font-size: 64px;

  & h1 {
    font-weight: 700;
    font-size: 1em;
    /* line-height: 96px; */
  }

  & h2 {
    font-weight: 700;
    font-size: 0.5625em;
    /* line-height: 54px; */
  }

  & p {
    font-weight: 400;
    font-size: 0.375em;
    /* line-height: 36px; */
    color: #222222;
  }

  @media (max-width: 996px) {
    & h1 {
      font-size: 0.8em;
    }

    & h2 {
      font-size: 0.4625em;
    }

    & p {
      font-size: 0.275em;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.div`
  z-index: 1;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: #FFFFFF;
`;

export const FooterTextContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 996px) {
    display: none;
  }
`;

export const Warning = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    
    max-width: 540px;
    position: relative;  
`;

export const RefreshText = styled.div`
  height: 100%;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    max-width: 110px;
    text-align: right;
  }
`;

export const ButtonGroup = styled.div`
  height: 100%;
  display: flex;
  justify-self: flex-end;

  @media (max-width: 996px) {
    width: 100%;
    flex-direction: row-reverse;
  }
`;

const BaseButton = styled.button`
  border: none;
  width: 130px;
  height: 100%;
  font-size: 12px;
  line-height: 18px;
  font-family: 'Poppins';
  font-style: normal;
  cursor: pointer;
`;

export const ContinueButton = styled(BaseButton)`
  background: #FFFFFF;
  color: #C13216;
  font-weight: 400;

  @media (max-width: 996px) {
    flex-grow: 1;
  }
`;

export const LogoutButton = styled(BaseButton)`
  background: #1C1D20;
  color: #FFFFFF;
  font-weight: 700;
`;

export const Timer = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;

  & strong {
    font-weight: 700;
    font-size: 48px;
    text-align: center;

    margin-bottom: -20px;
  }

  & p {
    text-align: center;
    font-size: 14px;
    line-height: 21px;
  }
`;

// export const Image = styled.div`
//   width: 50%;
//   /* overflow: hidden; */
//   /* background-image: url(${(props) => props.src}); */

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

export const Clock = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  text-align: center;
  color: #222222;

  height: 100%;

  & h1 {
    font-weight: 700;
    /* font-size: 144px;  Tamanho q está no figma */
    font-size: 110px;
    /* line-height: 216px; */

    margin-bottom: -40px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    /* line-height: 21px; */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;