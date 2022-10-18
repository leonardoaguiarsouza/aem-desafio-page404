(this["webpackJsonpdesafio-page404-aem"]=this["webpackJsonpdesafio-page404-aem"]||[]).push([[0],{206:function(e,t,i){var n={".":36,"./":36,"./index":36,"./index.js":36};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=206},214:function(e,t,i){},216:function(e,t,i){},217:function(e,t,i){"use strict";i.r(t);i(95),i(131),i(186);var n=i(24),o=i(12),a=i(0),s=i(88),p=i(9),r=i(5),c=i(1);class l extends r.Page{render(){return Object(c.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var d=Object(r.withModel)(l);class x extends n.ModelClient{fetch(e){if(!e){const t=`Fetching model rejected for path: ${e}`;return Promise.reject(new Error(t))}const t=this._apiHost||"";return fetch(`${t}${e}`,{credentials:"same-origin",headers:{Authorization:""}}).then((e=>e.status>=200&&e.status<300?e.json():Promise.reject(e))).catch((e=>Promise.reject(e)))}}var h=i(51),m=i.n(h);const g=()=>Object(c.jsx)("div",{children:"Error loading chunks!"}),f=(b=e=>Object(c.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}}),j={skeletonHeight:1e3},function(e){return Object(c.jsx)(b,{...j,...e})});var b,j;var u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return m()(e,{loading:t,error:g})};i(214);class y extends r.Page{get containerProps(){let e=super.containerProps;return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}Object(r.MapTo)("desafio-page404-aem/components/page")(Object(r.withComponentMappingContext)((w=y,class extends a.Component{render(){let e=this.props.cqPath;return e?(O=O||"html",Object(c.jsx)(p.d,{exact:!0,path:"(.*)"+e+"(."+O+")?",render:e=>Object(c.jsx)(w,{...this.props,...e})},e)):Object(c.jsx)(w,{...this.props})}})));var w,O,v=i(4);const E=v.a.a`
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
`;var F=e=>{let{link:t,text:i}=e;return Object(c.jsx)(E,{href:t,children:i})};const T=v.a.p`
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  color: #333333;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 71px;
  }
`;var M=e=>{let{text:t}=e;return Object(c.jsx)(T,{children:t})};const k=v.a.p`
  width: 380px;
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  color: #4F4F4F;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 18px;
    line-height: 27px
  }
`;var I=e=>{let{text:t}=e;return Object(c.jsx)(k,{children:t})};const P=v.a.img`
  max-width: 540px;
  max-height: 450px;

  @media (max-width: 768px) {
    max-width: 287px;
  }
`;var V=e=>{let{imgPath:t}=e;return Object(c.jsx)(P,{src:t})};const C=v.a.div`
  width: 100%;
`,z=v.a.p`
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  color: #333333;
`;var L=e=>{let{text:t}=e;return Object(c.jsx)(C,{children:Object(c.jsx)(z,{children:t})})};const D=v.a.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,N=v.a.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,_=v.a.div`
  max-width: 586px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 350px;
    height: 400px;
  }
`;Object(r.MapTo)("desafio-page404-aem/components/maincontainer")((e=>Object(c.jsxs)(D,{children:[Object(c.jsx)(L,{text:e.headerText}),Object(c.jsxs)(N,{children:[Object(c.jsx)(V,{imgPath:e.img}),Object(c.jsxs)(_,{children:[Object(c.jsx)(M,{text:e.title}),Object(c.jsx)(I,{text:e.text}),Object(c.jsx)(F,{link:e.buttonLink,text:e.buttonText})]})]})]})),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e||!e.headerText||!e.img||!e.title||!e.text||!e.buttonLink||!e.buttonText}});const R=v.a.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`,S=v.a.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,$=v.a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  & *:not(img) {
    width: 379px;
    font-family: 'Poppins';
    font-style: normal;
    color: #E0E0E0;
  }

  & .logo {
    visibility: hidden;

    @media (max-width: 768px) {
      visibility: visible;
    }

  }

  & h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 90px;
  }

  & h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }

  & h3 {
    width: 301px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,B=v.a.div`
  width: 50%;
  overflow: hidden;
  background-image: url(${e=>e.src});

  @media (max-width: 768px) {
    display: none;
  }
`,H=v.a.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  max-height: 500px;
`,q=v.a.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #E9B425 !important;
    visibility: hidden;
`,A=v.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,U=v.a.button`
    height: 67px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15), 5px 5px 15px 0px black;
    border-radius: 50px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    border: none;
    cursor: pointer;
`;var J=e=>{let{type:t,text:i}=e;return Object(c.jsx)(U,{type:t,children:i})},G=i.p+"static/media/userIcon.548bc619.svg",K=i.p+"static/media/passwordIcon.9ad95b0d.svg";const Q=v.a.div`
    position: relative;

    & img {
        position: absolute;
        width: 20px;
        right: 20px;
        top: 16px;
    }

    & input {
        height: 60px;
        background: #26292C;
        border: 1px solid #FFFFFF;
        border-radius: 50px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding: 20px;
        padding-right: 45px;

        ::placeholder {
        color: #E0E0E0;
        }
    }

    & input[type='password']:not(:placeholder-shown) {
        font-family: Verdana;
        font-size: 25px;
        letter-spacing: 0.125em;
    }
`;var W=e=>{let{type:t,placeholder:i,icon:n}=e;return Object(c.jsxs)(Q,{children:[Object(c.jsx)("input",{type:t,placeholder:i}),Object(c.jsx)("img",{src:n})]})};Object(r.MapTo)("desafio-page404-aem/components/loginform")((e=>{const t=Object(p.k)(),i=Object(p.l)(),n=i.pathname.slice(0,i.pathname.lastIndexOf("/"));return Object(c.jsxs)(R,{children:[Object(c.jsxs)($,{children:[Object(c.jsx)(S,{children:Object(c.jsx)("img",{className:"logo",src:e.logoImg})}),Object(c.jsxs)(A,{children:[Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("h3",{children:e.text})]}),Object(c.jsxs)(H,{onSubmit:i=>(i=>{i.preventDefault(),t.push(`${n}/${e.pageToRedirect}.html`)})(i),children:[Object(c.jsx)("h2",{children:"Login"}),Object(c.jsx)(W,{type:"text",placeholder:"Usu\xe1rio",icon:G}),Object(c.jsx)(W,{type:"password",placeholder:"Senha",icon:K}),Object(c.jsx)(q,{children:e.errorText}),Object(c.jsx)(J,{type:"submit",text:"Continuar"})]})]}),Object(c.jsx)(B,{src:`'${e.backgroundImg}'`,children:Object(c.jsx)(S,{children:Object(c.jsx)("img",{className:"logo",src:e.logoImg})})})]})}),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e||!e.title||!e.text||!e.errorText||!e.backgroundImg||!e.logoImg||!e.pageToRedirect}});const X=v.a.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: blue;
`;v.a.div`
  display: flex;
  justify-content: center;
  /* position: absolute; */
  width: 100%;

  /* @media (max-width: 768px) {
    justify-content: center;
    position: relative;
  } */
`,v.a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  & *:not(img) {
    width: 379px;
    font-family: 'Poppins';
    font-style: normal;
    color: #E0E0E0;
  }

  & .logo {
    visibility: hidden;

    @media (max-width: 768px) {
      visibility: visible;
    }

  }

  & h1 {
    font-weight: 400;
    font-size: 60px;
    line-height: 90px;
  }

  & h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
  }

  & h3 {
    width: 301px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`,v.a.div`
  width: 50%;
  overflow: hidden;
  background-image: url(${e=>e.src});

  @media (max-width: 768px) {
    display: none;
  }
`,v.a.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  max-height: 500px;

  & label {
    position: relative;
  }

  & label img {
    position: absolute;
    width: 20px;
    right: 20px;
    top: 16px;
  }

  & input {
    height: 60px;
    background: #26292C;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 20px;
    padding-right: 45px;

    ::placeholder {
      color: #E0E0E0;
    }
  }

  & input[type='password']:not(:placeholder-shown) {
    font-family: Verdana;
    font-size: 25px;
    letter-spacing: 0.125em;
  }

  & p {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #E9B425;
    visibility: hidden;
  }

  & button {
    height: 67px;
    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15), 5px 5px 15px 0px black;
    border-radius: 50px;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    border: none;
  }
`,v.a.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;Object(r.MapTo)("desafio-page404-aem/components/homepage")((e=>Object(c.jsx)(X,{})),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e}});var Y=i(92),Z=i(93),ee=i(31),te=i(11);const ie=u((()=>Promise.all([i.e(3),i.e(4)]).then(i.bind(null,285)))),ne=u((()=>i.e(5).then(i.t.bind(null,283,7)))),oe=u((()=>i.e(6).then(i.t.bind(null,284,7))));Object(r.MapTo)("desafio-page404-aem/components/download")(te.DownloadV1,{isEmpty:te.DownloadV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/list")(te.ListV2,{isEmpty:te.ListV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/separator")(te.SeparatorV1,{isEmpty:te.SeparatorV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/button")(te.ButtonV1,{isEmpty:te.ButtonV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/teaser")(te.TeaserV1,{isEmpty:te.TeaserV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/image")(te.ImageV2,{isEmpty:te.ImageV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/title")(ne,{isEmpty:Z.TitleV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/breadcrumb")(te.BreadCrumbV2,{isEmpty:te.BreadCrumbV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/navigation")(te.NavigationV1),Object(r.MapTo)("desafio-page404-aem/components/languagenavigation")(te.LanguageNavigationV1),Object(r.MapTo)("desafio-page404-aem/components/tabs")(ee.TabsV1,{isEmpty:ee.TabsV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/accordion")(ee.AccordionV1,{isEmpty:ee.AccordionV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/carousel")(oe,{isEmpty:Y.CarouselV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/container")(ee.ContainerV1,{isEmpty:ee.ContainerV1IsEmptyFn});Object(r.MapTo)("desafio-page404-aem/components/text")(ie,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});i(216);const ae={};document.addEventListener("DOMContentLoaded",(()=>{n.ModelManager.initialize(ae).then((e=>{const t=Object(o.a)();Object(s.render)(Object(c.jsx)(p.e,{history:t,children:Object(c.jsx)(d,{history:t,cqChildren:e[n.Constants.CHILDREN_PROP],cqItems:e[n.Constants.ITEMS_PROP],cqItemsOrder:e[n.Constants.ITEMS_ORDER_PROP],cqPath:e[n.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[217,1,2]]]);
//# sourceMappingURL=main.4afc277a.chunk.js.map