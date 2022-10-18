import React from "react";
import { Input } from "./style";

type InputProps = {
  type: string;
  placeholder: string;
  icon: string;
  value: string;
  handleChange: Function;
  isLoginValid: boolean
}

const LoginInput = ({type, placeholder, icon, value, handleChange, isLoginValid}: InputProps) => {
  return (
    <Input isLoginValid={isLoginValid}>
      <input type={type} placeholder={placeholder} value={value} onChange={ e => handleChange(e.target.value) } />
      <img src={icon} />
    </Input>
  );
};

export default LoginInput;