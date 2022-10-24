import { MapTo } from "@adobe/aem-react-editable-components";
import React, { FormEvent, useState } from "react";
import { useLocation, useHistory } from 'react-router-dom'

import { Main, Logo, Content, Image, Form, TextContainer, ErrorText } from "./style";

import LoginButton from "../../micro/LoginButton";

import userIcon from '../../micro/assets/userIcon.svg';
import passwordIcon from '../../micro/assets/passwordIcon.svg';
import LoginInput from "../../micro/LoginInput";

const LoginFormEditConfig = {
  emptyLabel: "Preencha os campos necessários",
  
  isEmpty: function (props: any) {
    return !props || !props.title || !props.text || !props.errorText 
        || !props.backgroundImg || !props.logoImg || !props.pageToRedirect;
  },
};

const LoginForm = (props: any) => {
  const history = useHistory();
  const location = useLocation();

  const baseUrl = location.pathname.slice(0, location.pathname.lastIndexOf('/'));

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginValid, setIsLoginValid] = useState<boolean>(true);

  const authenticate = (user: string, password: string) => {
    if (user === "admin" && password === "admin") {
      return true;
    }

    return false;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validações
    let isLoginSuccessful = authenticate(user, password);
    setIsLoginValid(isLoginSuccessful);
    
    if (isLoginSuccessful) {
      history.push(`${baseUrl}/${props.pageToRedirect}.html`, {isUserAuthenticated: true});
    }
  }

  return (
    <Main>
      <Content>
        <Logo>
          <img className="logo" src={props.logoImg} />
        </Logo>
        <TextContainer>
          <h1>{props.title}</h1>
          <h3>{props.text}</h3>
        </TextContainer>
        <Form onSubmit={e => handleSubmit(e)}>
          <h2>Login</h2>
          <LoginInput isLoginValid={isLoginValid} type="text" placeholder="Usuário" icon={userIcon} value={user} handleChange={setUser} />
          <LoginInput isLoginValid={isLoginValid} type="password" placeholder="Senha" icon={passwordIcon} value={password} handleChange={setPassword} />
          <ErrorText isLoginValid={isLoginValid}>{props.errorText}</ErrorText>
          <LoginButton type="submit" text="Continuar" />
        </Form>
      </Content>
      <Image src={`'${props.backgroundImg}'`}>
        <Logo>
          <img className="logo" src={props.logoImg} />
        </Logo>
      </Image>
    </Main>
  );
};

export default MapTo("desafio-page404-aem/components/loginform")(
  LoginForm,
  LoginFormEditConfig
);