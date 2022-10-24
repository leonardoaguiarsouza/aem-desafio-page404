package com.adobe.aem.desafio.page404.core.models.impl;

import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.aem.desafio.page404.core.models.HomepageModel;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { HomepageModel.class,
              ComponentExporter.class }, 
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
  resourceType = HomepageImpl.RESOURCE_TYPE
  )

@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
  )

public class HomepageImpl implements HomepageModel {
    
    @ValueMapValue
    private String enTextBlock1;

    @ValueMapValue
    private String ptTextBlock1;
    
    @ValueMapValue
    private String enTextBlock2;

    @ValueMapValue
    private String ptTextBlock2;
    
    @ValueMapValue
    private String enTextBlock3;

    @ValueMapValue
    private String ptTextBlock3;
    
    @ValueMapValue
    private String enTextBlock4;

    @ValueMapValue
    private String ptTextBlock4;

    @ValueMapValue
    private String backgroundImg;
    
    @ValueMapValue
    private String logoImg;

    
    static final String RESOURCE_TYPE = "desafio-page404-aem/components/homepage";

    @Override
    public String getEnTextBlock1() {
        return enTextBlock1;
    }

    @Override
    public String getPtTextBlock1() {
        return ptTextBlock1;
    }

    @Override
    public String getEnTextBlock2() {
        return enTextBlock2;
    }

    @Override
    public String getPtTextBlock2() {
        return ptTextBlock2;
    }

    @Override
    public String getEnTextBlock3() {
        return enTextBlock3;
    }

    @Override
    public String getPtTextBlock3() {
        return ptTextBlock3;
    }

    @Override
    public String getEnTextBlock4() {
        return enTextBlock4;
    }

    @Override
    public String getPtTextBlock4() {
        return ptTextBlock4;
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
        return HomepageImpl.RESOURCE_TYPE;
    }
}