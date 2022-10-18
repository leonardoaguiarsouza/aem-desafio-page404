import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  type: string;
  text: string;
}

const LoginButton = ({type, text}: ButtonProps) => {
  return (
    <StyledButton type={type}>
      {text}
    </StyledButton>
  );
};

export default LoginButton;