import React from "react";
import { Text } from "./style";

type TextProps = {
  text: string
}

const TextPlaceholder = ({text}: TextProps) => {
  return (
    <Text>
      {text}
    </Text>
  );
};

export default TextPlaceholder;