import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  max-width: 586px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 350px;
    height: 400px;
  }
`;