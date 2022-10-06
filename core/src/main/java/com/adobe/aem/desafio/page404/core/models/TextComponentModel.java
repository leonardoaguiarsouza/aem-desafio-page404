package com.adobe.aem.desafio.page404.core.models;

import com.adobe.cq.export.json.ComponentExporter;

public interface TextComponentModel extends ComponentExporter {

    public String getText();
    public double getSize();
    public String getColor();
    public double getWeight();
    public double getMargin();
}