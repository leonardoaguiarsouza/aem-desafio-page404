/*******************************************************************************
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 ******************************************************************************/
package org.apache.sling.scripting.sightly.apps.desafio__002d__page404__002d__aem.clientlibs.clientlib__002d__react.resources;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class index__002e__html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

out.write("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta name=\"theme-color\" content=\"#000000\"/><meta name=\"description\" content=\"Desafio Page 404 AEM\"/><link rel=\"icon\" href=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/favicon.ico\"/><link rel=\"apple-touch-icon\" href=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/logo192.png\"/><link rel=\"manifest\" href=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/manifest.json\"/><title>Desafio Page 404 AEM</title><meta property=\"cq:pagemodel_root_url\" content=\"\"/><link rel=\"stylesheet\" href=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-base.css\"/><script>0</script><link href=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/static/css/main.108ba8fd.chunk.css\" rel=\"stylesheet\"/></head><body class=\"page basicpage\"><noscript>You need to enable JavaScript to run this app.</noscript><div id=\"spa-root\"></div><script>!function(e){function t(t){for(var n,o,u=t[0],c=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(t);d.length;)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a={1:0},i=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{4:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=\"static/css/\"+({}[e]||e)+\".\"+{3:\"31d6cfe0\",4:\"61b50e66\",5:\"31d6cfe0\",6:\"31d6cfe0\"}[e]+\".chunk.css\",a=u.p+n,i=document.getElementsByTagName(\"link\"),c=0;c<i.length;c++){var l=(f=i[c]).getAttribute(\"data-href\")||f.getAttribute(\"href\");if(\"stylesheet\"===f.rel&&(l===n||l===a))return t()}var s=document.getElementsByTagName(\"style\");for(c=0;c<s.length;c++){var f;if((l=(f=s[c]).getAttribute(\"data-href\"))===n||l===a)return t()}var d=document.createElement(\"link\");d.rel=\"stylesheet\",d.type=\"text/css\",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error(\"Loading CSS chunk \"+e+\" failed.\\n(\"+n+\")\");i.code=\"CSS_CHUNK_LOAD_FAILED\",i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=a,document.getElementsByTagName(\"head\")[0].appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var i,c=document.createElement(\"script\");c.charset=\"utf-8\",c.timeout=120,u.nc&&c.setAttribute(\"nonce\",u.nc),c.src=function(e){return u.p+\"static/js/\"+({}[e]||e)+\".\"+{3:\"827abd53\",4:\"7f3a15d5\",5:\"0a84d110\",6:\"573b59c8\"}[e]+\".chunk.js\"}(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=a[e];if(0!==r){if(r){var n=t&&(\"load\"===t.type?\"missing\":t.type),o=t&&t.target&&t.target.src;l.message=\"Loading chunk \"+e+\" failed.\\n(\"+n+\": \"+o+\")\",l.name=\"ChunkLoadError\",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var s=setTimeout((function(){i({type:\"timeout\",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,\"a\",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/\",u.oe=function(e){throw console.error(e),e};var c=this[\"webpackJsonpdesafio-page404-aem\"]=this[\"webpackJsonpdesafio-page404-aem\"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;r()}([])</script><script src=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/static/js/2.e1cce0e7.chunk.js\"></script><script src=\"/etc.clientlibs/desafio-page404-aem/clientlibs/clientlib-react/resources/static/js/main.4b16bbe2.chunk.js\"></script></body></html>");


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

