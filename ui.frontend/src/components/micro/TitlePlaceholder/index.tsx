import React from "react";
import { Title } from "./style";

type TitleProps = {
  text: string
}

const TitlePlaceholder = ({text}: TitleProps) => {
  return (
    <Title>
      {text}
    </Title>
  );
};

export default TitlePlaceholder;