(this["webpackJsonpdesafio-page404-aem"]=this["webpackJsonpdesafio-page404-aem"]||[]).push([[0],{206:function(e,t,n){var o={".":36,"./":36,"./index":36,"./index.js":36};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id=206},214:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);n(95),n(131),n(186);var o=n(24),a=n(12),s=n(0),i=n(88),r=n(8),c=n(3),p=n(2);class m extends c.Page{render(){return Object(p.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var l=Object(c.withModel)(m);class d extends o.ModelClient{fetch(e){if(!e){const t=`Fetching model rejected for path: ${e}`;return Promise.reject(new Error(t))}const t=this._apiHost||"";return fetch(`${t}${e}`,{credentials:"same-origin",headers:{Authorization:""}}).then((e=>e.status>=200&&e.status<300?e.json():Promise.reject(e))).catch((e=>Promise.reject(e)))}}var h=n(51),g=n.n(h);const x=()=>Object(p.jsx)("div",{children:"Error loading chunks!"}),j=(f=e=>Object(p.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}}),b={skeletonHeight:1e3},function(e){return Object(p.jsx)(f,{...b,...e})});var f,b;var u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return g()(e,{loading:t,error:x})};n(214);class O extends c.Page{get containerProps(){let e=super.containerProps;return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}var y,E;Object(c.MapTo)("desafio-page404-aem/components/page")(Object(c.withComponentMappingContext)((y=O,class extends s.Component{render(){let e=this.props.cqPath;return e?(E=E||"html",Object(p.jsx)(r.d,{exact:!0,path:"(.*)"+e+"(."+E+")?",render:e=>Object(p.jsx)(y,{...this.props,...e})},e)):Object(p.jsx)(y,{...this.props})}})));Object(c.MapTo)("desafio-page404-aem/components/container")(Object(c.withComponentMappingContext)(c.AllowedComponentsContainer),{emptyLabel:"Container",isEmpty:function(e){return!e||!e.cqItemsOrder||0===e.cqItemsOrder.length}});Object(c.MapTo)("desafio-page404-aem/components/experiencefragment")(Object(c.withComponentMappingContext)(c.Container),{emptyLabel:"Experience Fragment",isEmpty:function(e){return!e||!e.configured}});var w=n(10);const M=w.a.p`
  font-size: ${e=>e.size}; 
  color: ${e=>e.color};
  font-family: 'Poppins', sans-serif;
  font-weight: ${e=>e.weight};
  margin: ${e=>e.margin};
  text-align: end;
`;Object(c.MapTo)("desafio-page404-aem/components/textcomponent")((e=>Object(p.jsx)(M,{size:`${e.size}px`,color:e.color,weight:e.weight,margin:`${e.margin}px`,children:e.text})),{emptyLabel:"Vazio",isEmpty:function(e){return!e||!e.size||!e.color||!e.text||!e.weight||!e.margin}});const T=w.a.a`
  width: 216px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333333;
  color: #FFFFFF;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;var v=e=>{let{link:t,text:n}=e;return Object(p.jsx)(T,{href:t,children:n})};const C=w.a.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  color: #333333;
`;var V=e=>{let{text:t}=e;return Object(p.jsx)(C,{children:t})};const F=w.a.p`
  width: 380px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
`;var P=e=>{let{text:t}=e;return Object(p.jsx)(F,{children:t})};const I=w.a.img`
  max-width: 540px;
`;var k=e=>{let{imgPath:t}=e;return Object(p.jsx)(I,{src:t})};const L=w.a.div`
  width: 100%;
`,z=w.a.p`
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  color: #333333;
`;var _=e=>{let{text:t}=e;return Object(p.jsx)(L,{children:Object(p.jsx)(z,{children:t})})};const N=w.a.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,$=w.a.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`,q=w.a.div`
  max-width: 586px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;Object(c.MapTo)("desafio-page404-aem/components/maincontainer")((e=>Object(p.jsxs)(N,{children:[Object(p.jsx)(_,{text:e.headerText}),Object(p.jsxs)($,{children:[Object(p.jsx)(k,{imgPath:e.img}),Object(p.jsxs)(q,{children:[Object(p.jsx)(V,{text:e.title}),Object(p.jsx)(P,{text:e.text}),Object(p.jsx)(v,{link:e.buttonLink,text:e.buttonText})]})]})]})),{emptyLabel:"Vazio",isEmpty:function(e){return!e||!e.title||!e.text||!e.buttonLink||!e.buttonText}});var D=n(92),R=n(93),S=n(31),H=n(11);const A=u((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,285)))),B=u((()=>n.e(5).then(n.t.bind(null,283,7)))),J=u((()=>n.e(6).then(n.t.bind(null,284,7))));Object(c.MapTo)("desafio-page404-aem/components/download")(H.DownloadV1,{isEmpty:H.DownloadV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/list")(H.ListV2,{isEmpty:H.ListV2IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/separator")(H.SeparatorV1,{isEmpty:H.SeparatorV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/button")(H.ButtonV1,{isEmpty:H.ButtonV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/teaser")(H.TeaserV1,{isEmpty:H.TeaserV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/image")(H.ImageV2,{isEmpty:H.ImageV2IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/title")(B,{isEmpty:R.TitleV2IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/breadcrumb")(H.BreadCrumbV2,{isEmpty:H.BreadCrumbV2IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/navigation")(H.NavigationV1),Object(c.MapTo)("desafio-page404-aem/components/languagenavigation")(H.LanguageNavigationV1),Object(c.MapTo)("desafio-page404-aem/components/tabs")(S.TabsV1,{isEmpty:S.TabsV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/accordion")(S.AccordionV1,{isEmpty:S.AccordionV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/carousel")(J,{isEmpty:D.CarouselV1IsEmptyFn}),Object(c.MapTo)("desafio-page404-aem/components/container")(S.ContainerV1,{isEmpty:S.ContainerV1IsEmptyFn});Object(c.MapTo)("desafio-page404-aem/components/text")(A,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});n(216);const U={};document.addEventListener("DOMContentLoaded",(()=>{o.ModelManager.initialize(U).then((e=>{const t=Object(a.a)();Object(i.render)(Object(p.jsx)(r.e,{history:t,children:Object(p.jsx)(l,{history:t,cqChildren:e[o.Constants.CHILDREN_PROP],cqItems:e[o.Constants.ITEMS_PROP],cqItemsOrder:e[o.Constants.ITEMS_ORDER_PROP],cqPath:e[o.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[217,1,2]]]);
//# sourceMappingURL=main.9a36973c.chunk.js.map