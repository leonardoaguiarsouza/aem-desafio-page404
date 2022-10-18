import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { useLocation } from 'react-router-dom'

import { Main, Header, Content, Footer, BgImg, TextContainer } from "./style";
import userIcon from '../../micro/assets/userIcon.svg';
import passwordIcon from '../../micro/assets/passwordIcon.svg';

const HomepageEditConfig = {
  emptyLabel: "Preencha os campos necessários",
  
  isEmpty: function (props: any) {
    return !props;
  },
};

const Homepage = (props: any) => {

  return (
    <Main>
      <Header>
        <img className="logo" src={props.logoImg} />
        <h1>11:26</h1>
        <p>Passo Fundo</p>  
        {/* <Clock></Clock> */}
        {/* <Weather></Weather> */}
      </Header>
      <Content>
        <BgImg>
          <img src={props.backgroundImg} />
        </BgImg>
        <TextContainer>
          <h2>Our mission is</h2>
          <p>Nossa missão é</p>
          <h1>to transform the world</h1>
          <p>transformar o mundo</p>
          <h1>building digital experiences</h1>
          <p>construindo experiências digitais</p>
          <h1>that enable our client’s growth</h1>
          <p>que permitam o crescimento dos nossos clientes</p>
        </TextContainer>
      </Content>
      <Footer />
      {/*
      
      <Footer>
        <Text></Text>
        <Timer></Timer>
        <Buttons></Buttons>
      </Footer> */}
    </Main>
  );
};

export default MapTo("desafio-page404-aem/components/homepage")(
  Homepage,
  HomepageEditConfig
);