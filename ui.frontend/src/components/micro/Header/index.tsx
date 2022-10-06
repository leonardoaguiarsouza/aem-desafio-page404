import React from "react";
import { StyledHeader, HeaderText } from "./style";

type HeaderProps = {
  text: string
}

const Header = ({text}: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderText>
        {text}
      </HeaderText>
    </StyledHeader>
  );
};

export default Header;