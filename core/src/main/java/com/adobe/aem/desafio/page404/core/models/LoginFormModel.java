package com.adobe.aem.desafio.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface LoginFormModel extends ComponentExporter {

    public String getTitle();
    public String getText();
    public String getErrorText();
    public String getPageToRedirect();
    public String getBackgroundImg();
    public String getLogoImg();
}