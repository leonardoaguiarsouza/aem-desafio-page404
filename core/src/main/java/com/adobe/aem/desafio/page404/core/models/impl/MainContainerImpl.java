package com.adobe.aem.desafio.page404.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.desafio.page404.core.models.MainContainerModel;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { MainContainerModel.class,
              ComponentExporter.class }, 
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
  resourceType = MainContainerImpl.RESOURCE_TYPE
  )

@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
  )

public class MainContainerImpl implements MainContainerModel {

    @ValueMapValue
    private String headerText;

    @ValueMapValue
    private String img;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String text;

    @ValueMapValue
    private String buttonText;

    @ValueMapValue
    private String buttonLink;
    
    static final String RESOURCE_TYPE = "desafio-page404-aem/components/maincontainer";

    @Override
    public String getHeaderText() {
        return headerText;
    }

    @Override
    public String getImg() {
        return img;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public String getButtonText() {
        return buttonText;
    }

    @Override
    public String getButtonLink() {
        return buttonLink;
    }

    @Override
    public String getExportedType() {
        return MainContainerImpl.RESOURCE_TYPE;
    }
}