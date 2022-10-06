import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Paragraph } from "./style";

//Logica para renderizar um placeholder se o componente nao renderizar
const TextComponentEditConfig = {
  emptyLabel: "Vazio",
  
  isEmpty: function (props: any) {
    return !props || !props.size || !props.color || !props.text || !props.weight || !props.margin;
  },
};

//Arrow function que possui o componente TextComponent
const TextComponent = (props: any) => { //Recebe as props do AEM JSON
  return (
    <Paragraph
      size={`${props.size}px`} //Recebe as props de tamanho do AEM JSON e mandam para o styled component
      color={props.color} //Recebe as props de cor do AEM JSON e mandam para o styled component
      weight={props.weight} //Recebe as props de peso do AEM JSON e mandam para o styled component
      margin={`${props.margin}px`} //Recebe as props de margem do AEM JSON e mandam para o styled component
    >
      {props.text}
    </Paragraph>
  );
};

//Mapeia o TextComponent para o AEM component
export default MapTo("desafio-page404-aem/components/textcomponent")(
  TextComponent,
  TextComponentEditConfig
);