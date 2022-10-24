package com.adobe.aem.desafio.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface HomepageModel extends ComponentExporter {

    public String getEnTextBlock1();
    public String getPtTextBlock1();
    public String getEnTextBlock2();
    public String getPtTextBlock2();
    public String getEnTextBlock3();
    public String getPtTextBlock3();
    public String getEnTextBlock4();
    public String getPtTextBlock4();
    public String getBackgroundImg();
    public String getLogoImg();
}