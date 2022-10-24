package com.adobe.aem.desafio.page404.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.desafio.page404.core.models.LoginFormModel;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { LoginFormModel.class,
              ComponentExporter.class }, 
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
  resourceType = LoginFormImpl.RESOURCE_TYPE
  )

@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
  )

public class LoginFormImpl implements LoginFormModel {

    @ValueMapValue
    private String title;
    
    @ValueMapValue
    private String text;

    @ValueMapValue
    private String errorText;

    @ValueMapValue
    private String pageToRedirect;

    @ValueMapValue
    private String backgroundImg;
    
    @ValueMapValue
    private String logoImg;

    
    static final String RESOURCE_TYPE = "desafio-page404-aem/components/loginform";

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public String getErrorText() {
        return errorText;
    }

    @Override
    public String getPageToRedirect() {
        return pageToRedirect;
    }

    @Override
    public String getBackgroundImg() {
        return backgroundImg;
    }

    @Override
    public String getLogoImg() {
        return logoImg;
    }

    @Override
    public String getExportedType() {
        return LoginFormImpl.RESOURCE_TYPE;
    }
}