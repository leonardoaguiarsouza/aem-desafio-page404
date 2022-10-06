package com.adobe.aem.desafio.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface MainContainerModel extends ComponentExporter {

    public String getHeaderText();
    public String getImg();
    public String getTitle();
    public String getText();
    public String getButtonText();
    public String getButtonLink();
}