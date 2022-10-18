import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Button from "../../micro/Button";
import TitlePlaceholder from "../../micro/TitlePlaceholder";
import TextPlaceholder from "../../micro/TextPlaceholder";
import ImagePlaceholder from "../../micro/ImagePlaceholder";
import Header from "../../micro/Header";

import { Content, Main, TextContainer } from "./style";

const MainContainerEditConfig = {
  emptyLabel: "Preencha os campos necessários",
  
  isEmpty: function (props: any) {
    return !props || !props.headerText || !props.img || !props.title || !props.text || !props.buttonLink || !props.buttonText;
  },
};

const MainContainer = (props: any) => {
  return (
    <Content>
      <Header text={props.headerText} />
      <Main>
        <ImagePlaceholder imgPath={props.img} />
        <TextContainer>
          <TitlePlaceholder text={props.title} />
          <TextPlaceholder text={props.text} />
          <Button link={props.buttonLink} text={props.buttonText} />
        </TextContainer>
      </Main>
    </Content>
  );
};

export default MapTo("desafio-page404-aem/components/maincontainer")(
  MainContainer,
  MainContainerEditConfig
);