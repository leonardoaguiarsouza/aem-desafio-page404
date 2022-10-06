import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  link: string;
  text: string;
}

const Button = ({link, text}: ButtonProps) => {
  return (
    <StyledButton href={link}>
      {text}
    </StyledButton>
  );
};

export default Button;