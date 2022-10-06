package com.adobe.aem.desafio.page404.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.desafio.page404.core.models.TextComponentModel;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { TextComponentModel.class,
              ComponentExporter.class }, 
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
  resourceType = TextComponentImpl.RESOURCE_TYPE
  )

@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
  )

public class TextComponentImpl implements TextComponentModel {

    @ValueMapValue
    private String text; //mapeia a variavel para a propiedade jcr nomeada como "text"

    @ValueMapValue
    private double size; //mapeia a variavel para a propiedade jcr nomeada como "size"

    @ValueMapValue
    private String color; //mapeia a variavel para a propiedade jcr nomeada como "color"

    @ValueMapValue
    private double weight; //mapeia a variavel para a propiedade jcr nomeada como "weight"

    @ValueMapValue
    private double margin; //mapeia a variavel para a propiedade jcr nomeada como "margin"
    
    
    //aponta para o diretorio do seu componente AEM criado no ui.apps
    static final String RESOURCE_TYPE = "desafio-page404-aem/components/textcomponent";

    //um metodo getter publico para expor o valor privado da variavel "text"
    //nestes metodos, tambem eh possivel adicionar alguma logica para tratar os argumentos.
    @Override
    public String getText() {
        return text;
    }
    @Override
    public double getSize() {
        return size;
    }
    @Override
    public String getColor() {
        return color;
    }
    @Override
    public double getWeight() {
        return weight;
    }
    @Override
    public double getMargin() {
        return margin;
    }
    //metodo necessario pela interface "ComponentExporter"
    //expoe uma propriedade JSON chamada de ":type" com um valor de "wknd-spa-react/components/textcomponent"
    //eh neceessaria para mapear a exportacao do JSON para as props do componente SPA por meio do "MapTo"
    @Override
    public String getExportedType() {
        return TextComponentImpl.RESOURCE_TYPE;
    }
}