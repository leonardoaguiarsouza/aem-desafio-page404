import styled from 'styled-components';
//O valor do css sera definido dinamicamente ou pelas props do Dialog do AEM ou por atributos dentro de componentes React
export const Paragraph = styled.p`
  font-size: ${(props) => props.size}; 
  color: ${(props) => props.color};
  font-family: 'Poppins', sans-serif;
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  text-align: end;
`;