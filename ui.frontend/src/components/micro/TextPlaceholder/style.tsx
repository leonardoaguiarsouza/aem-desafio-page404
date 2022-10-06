import styled from 'styled-components';

export const Text = styled.p`
  width: 380px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4F4F4F;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 27px
  }
`;