(this["webpackJsonpdesafio-page404-aem"]=this["webpackJsonpdesafio-page404-aem"]||[]).push([[0],{206:function(e,t,i){var n={".":37,"./":37,"./index":37,"./index.js":37};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=206},214:function(e,t,i){},216:function(e,t,i){},217:function(e,t,i){"use strict";i.r(t);i(95),i(131),i(186);var n=i(24),o=i(12),a=i(0),s=i(88),c=i(9),r=i(5),l=i(1);class p extends r.Page{render(){return Object(l.jsxs)("div",{children:[this.childComponents,this.childPages]})}}var d=Object(r.withModel)(p);class h extends n.ModelClient{fetch(e){if(!e){const t=`Fetching model rejected for path: ${e}`;return Promise.reject(new Error(t))}const t=this._apiHost||"";return fetch(`${t}${e}`,{credentials:"same-origin",headers:{Authorization:""}}).then((e=>e.status>=200&&e.status<300?e.json():Promise.reject(e))).catch((e=>Promise.reject(e)))}}var x=i(51),m=i.n(x);const g=()=>Object(l.jsx)("div",{children:"Error loading chunks!"}),j=(b=e=>Object(l.jsx)("div",{className:"loading-skeleton loading-skeleton__block",style:{height:e.skeletonHeight?e.skeletonHeight:"50px"}}),f={skeletonHeight:1e3},function(e){return Object(l.jsx)(b,{...f,...e})});var b,f;var u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return m()(e,{loading:t,error:g})};i(214);class O extends r.Page{get containerProps(){let e=super.containerProps;return e.className=(e.className||"")+" page "+(this.props.cssClassNames||""),e}}Object(r.MapTo)("desafio-page404-aem/components/page")(Object(r.withComponentMappingContext)((y=O,class extends a.Component{render(){let e=this.props.cqPath;return e?(w=w||"html",Object(l.jsx)(c.d,{exact:!0,path:"(.*)"+e+"(."+w+")?",render:e=>Object(l.jsx)(y,{...this.props,...e})},e)):Object(l.jsx)(y,{...this.props})}})));var y,w,v=i(2);const F=v.a.a`
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
`;var E=e=>{let{link:t,text:i}=e;return Object(l.jsx)(F,{href:t,children:i})};const T=v.a.p`
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
`;var k=e=>{let{text:t}=e;return Object(l.jsx)(T,{children:t})};const C=v.a.p`
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
`;var I=e=>{let{text:t}=e;return Object(l.jsx)(C,{children:t})};const z=v.a.img`
  max-width: 540px;
  max-height: 450px;

  @media (max-width: 768px) {
    max-width: 287px;
  }
`;var M=e=>{let{imgPath:t}=e;return Object(l.jsx)(z,{src:t})};const P=v.a.div`
  width: 100%;
`,V=v.a.p`
  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  color: #333333;
`;var L=e=>{let{text:t}=e;return Object(l.jsx)(P,{children:Object(l.jsx)(V,{children:t})})};const S=v.a.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`,D=v.a.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,B=v.a.div`
  max-width: 586px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 350px;
    height: 400px;
  }
`;Object(r.MapTo)("desafio-page404-aem/components/maincontainer")((e=>Object(l.jsxs)(S,{children:[Object(l.jsx)(L,{text:e.headerText}),Object(l.jsxs)(D,{children:[Object(l.jsx)(M,{imgPath:e.img}),Object(l.jsxs)(B,{children:[Object(l.jsx)(k,{text:e.title}),Object(l.jsx)(I,{text:e.text}),Object(l.jsx)(E,{link:e.buttonLink,text:e.buttonText})]})]})]})),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e||!e.headerText||!e.img||!e.title||!e.text||!e.buttonLink||!e.buttonText}});const $=v.a.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  box-shadow: 4px 4px 70px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`,N=v.a.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,R=v.a.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  & *:not(img) {
    max-width: 379px;
    width: 90vw;
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
`,_=v.a.div`
  width: 50%;
  overflow: hidden;
  background-image: url(${e=>e.src});

  @media (max-width: 768px) {
    display: none;
  }
`,A=v.a.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  max-height: 500px;
`,H=v.a.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #E9B425 !important;
    visibility: ${e=>e.isLoginValid?"hidden":"visible"};
`,q=v.a.div`
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
`;var J=e=>{let{type:t,text:i}=e;return Object(l.jsx)(U,{type:t,children:i})},Y=i.p+"static/media/userIcon.548bc619.svg",G=i.p+"static/media/passwordIcon.9ad95b0d.svg";const K=v.a.div`
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
        border: 1px solid ${e=>e.isLoginValid?"#FFFFFF":"#E9B425"};
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
`;var Q=e=>{let{type:t,placeholder:i,icon:n,value:o,handleChange:a,isLoginValid:s}=e;return Object(l.jsxs)(K,{isLoginValid:s,children:[Object(l.jsx)("input",{type:t,placeholder:i,value:o,onChange:e=>a(e.target.value)}),Object(l.jsx)("img",{src:n})]})};Object(r.MapTo)("desafio-page404-aem/components/loginform")((e=>{const t=Object(c.k)(),i=Object(c.l)(),n=i.pathname.slice(0,i.pathname.lastIndexOf("/")),[o,s]=Object(a.useState)(""),[r,p]=Object(a.useState)(""),[d,h]=Object(a.useState)(!0);return Object(l.jsxs)($,{children:[Object(l.jsxs)(R,{children:[Object(l.jsx)(N,{children:Object(l.jsx)("img",{className:"logo",src:e.logoImg})}),Object(l.jsxs)(q,{children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("h3",{children:e.text})]}),Object(l.jsxs)(A,{onSubmit:i=>(i=>{i.preventDefault();let a=((e,t)=>"admin"===e&&"admin"===t)(o,r);h(a),a&&t.push(`${n}/${e.pageToRedirect}.html`,{isUserAuthenticated:!0})})(i),children:[Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)(Q,{isLoginValid:d,type:"text",placeholder:"Usu\xe1rio",icon:Y,value:o,handleChange:s}),Object(l.jsx)(Q,{isLoginValid:d,type:"password",placeholder:"Senha",icon:G,value:r,handleChange:p}),Object(l.jsx)(H,{isLoginValid:d,children:e.errorText}),Object(l.jsx)(J,{type:"submit",text:"Continuar"})]})]}),Object(l.jsx)(_,{src:`'${e.backgroundImg}'`,children:Object(l.jsx)(N,{children:Object(l.jsx)("img",{className:"logo",src:e.logoImg})})})]})}),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e||!e.title||!e.text||!e.errorText||!e.backgroundImg||!e.logoImg||!e.pageToRedirect}});const W=v.a.div`
  width: 100%;
  height: 100vh;
  background: #E5E5E5;

  display: flex;
  flex-direction: column;

  font-family: 'Poppins';
  font-style: normal;
`,X=v.a.div`
  z-index: 1;
  min-height: 185px;
  display: flex;
  justify-content: space-between;

  & img {
    height: fit-content;
  }
`,Z=v.a.div`
  height: 100%;
  display: flex;
  flex-grow: 1;

  /* & > * {
    height: 100%;
  } */

  /* @media (max-width: 768px) {
    width: 100%;
  } */
`,ee=v.a.div`
  height: 100%;
  display: flex;

  & img {
    position: absolute;
    object-position: -100px 100px;
    z-index: 0;
    align-self: flex-end;
  }

  @media (max-width: 768px) {
    & img {
      width: 100%;
      /* object-position: -250px 100px;
      transition: object-position 2s linear; */
    }
  }
`,te=v.a.div`
  /* width: 70%; */
  z-index: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding-right: 80px;

  text-align: right;
  color: #C12D18;
  font-size: 64px;

  & h1 {
    font-weight: 700;
    font-size: 1em;
    /* line-height: 96px; */
  }

  & h2 {
    font-weight: 700;
    font-size: 0.5625em;
    /* line-height: 54px; */
  }

  & p {
    font-weight: 400;
    font-size: 0.375em;
    /* line-height: 36px; */
    color: #222222;
  }

  @media (max-width: 996px) {
    & h1 {
      font-size: 0.8em;
    }

    & h2 {
      font-size: 0.4625em;
    }

    & p {
      font-size: 0.275em;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`,ie=v.a.div`
  z-index: 1;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: #FFFFFF;
`,ne=v.a.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 996px) {
    display: none;
  }
`,oe=v.a.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #FFFFFF;
    
    max-width: 540px;
    position: relative;  
`,ae=v.a.div`
  height: 100%;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    max-width: 110px;
    text-align: right;
  }
`,se=v.a.div`
  height: 100%;
  display: flex;
  justify-self: flex-end;

  @media (max-width: 996px) {
    width: 100%;
    flex-direction: row-reverse;
  }
`,ce=v.a.button`
  border: none;
  width: 130px;
  height: 100%;
  font-size: 12px;
  line-height: 18px;
  font-family: 'Poppins';
  font-style: normal;
  cursor: pointer;
`,re=Object(v.a)(ce)`
  background: #FFFFFF;
  color: #C13216;
  font-weight: 400;

  @media (max-width: 996px) {
    flex-grow: 1;
  }
`,le=Object(v.a)(ce)`
  background: #1C1D20;
  color: #FFFFFF;
  font-weight: 700;
`,pe=v.a.div`
  width: 95px;
  display: flex;
  flex-direction: column;

  & strong {
    font-weight: 700;
    font-size: 48px;
    text-align: center;

    margin-bottom: -20px;
  }

  & p {
    text-align: center;
    font-size: 14px;
    line-height: 21px;
  }
`,de=v.a.div`
  font-family: 'Poppins';
  font-style: normal;
  text-align: center;
  color: #222222;

  height: 100%;

  & h1 {
    font-weight: 700;
    /* font-size: 144px;  Tamanho q está no figma */
    font-size: 110px;
    /* line-height: 216px; */

    margin-bottom: -40px;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    /* line-height: 21px; */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;var he=i.p+"static/media/bgImg.54bc3577.png";Object(r.MapTo)("desafio-page404-aem/components/homepage")((e=>{const[t,i]=Object(a.useState)(600),n=Object(a.useRef)(),[o,s]=Object(a.useState)(0),[r,p]=Object(a.useState)(0),[d,h]=Object(a.useState)(0),[x,m]=Object(a.useState)(""),[g,j]=Object(a.useState)(""),[b,f]=Object(a.useState)(0),u=Object(c.k)(),O=Object(c.l)(),[y,w]=Object(a.useState)(!0),v=(!!O.state&&O.state.isUserAuthenticated,O.pathname.slice(0,O.pathname.lastIndexOf("/"))),F=()=>{w(!1)},E=e=>e<10?`0${e}`:e;Object(a.useEffect)((()=>{y||u.push(`${v}/login.html`)}),[y]),Object(a.useEffect)((()=>(n.current=t>0&&setTimeout((()=>i(t-1)),1e3),0===t&&F(),()=>{clearTimeout(n.current)})),[t]),Object(a.useEffect)((()=>{const e=()=>{const e=new Date;s(E(e.getHours())),p(E(e.getMinutes())),h(e.getDate()),m(e.toLocaleString("pt-BR",{weekday:"long"})),j(e.toLocaleString("pt-BR",{month:"long"})),f(e.getFullYear())};e();const t=setInterval((()=>{e()}),1e3);return()=>clearInterval(t)}),[]);let T=`${o}:${r}`,k=`${x}, ${d} de ${g} de ${b}`;return Object(l.jsxs)(W,{children:[Object(l.jsxs)(X,{children:[Object(l.jsx)("img",{className:"logo",src:e.logoImg}),Object(l.jsxs)(de,{children:[Object(l.jsx)("h1",{children:T}),Object(l.jsx)("p",{children:k})]}),Object(l.jsx)("p",{children:"Passo Fundo"})]}),Object(l.jsxs)(Z,{children:[Object(l.jsx)(ee,{children:Object(l.jsx)("img",{src:he})}),Object(l.jsxs)(te,{children:[Object(l.jsx)("h2",{children:e.enTextBlock1}),Object(l.jsx)("p",{children:e.ptTextBlock1}),Object(l.jsx)("h1",{children:e.enTextBlock2}),Object(l.jsx)("p",{children:e.ptTextBlock2}),Object(l.jsx)("h1",{children:e.enTextBlock3}),Object(l.jsx)("p",{children:e.ptTextBlock3}),Object(l.jsx)("h1",{children:e.enTextBlock4}),Object(l.jsx)("p",{children:e.ptTextBlock4})]})]}),Object(l.jsxs)(ie,{children:[Object(l.jsxs)(ne,{children:[Object(l.jsx)(oe,{children:Object(l.jsxs)("p",{children:["Essa janela do navegador \xe9 usada para manter sua sess\xe3o de autentica\xe7\xe3o ativa.",Object(l.jsx)("br",{}),"Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."]})}),Object(l.jsxs)(ae,{children:[Object(l.jsx)("label",{children:"Application refresh in"}),Object(l.jsxs)(pe,{children:[Object(l.jsx)("strong",{children:t}),Object(l.jsx)("p",{children:"seconds"})]})]})]}),Object(l.jsxs)(se,{children:[Object(l.jsx)(re,{onClick:()=>{clearTimeout(n.current),i(600)},children:"Continuar Navegando"}),Object(l.jsx)(le,{onClick:()=>{F()},children:"Logout"})]})]})]})}),{emptyLabel:"Preencha os campos necess\xe1rios",isEmpty:function(e){return!e}});var xe=i(92),me=i(93),ge=i(31),je=i(11);const be=u((()=>Promise.all([i.e(3),i.e(4)]).then(i.bind(null,285)))),fe=u((()=>i.e(5).then(i.t.bind(null,283,7)))),ue=u((()=>i.e(6).then(i.t.bind(null,284,7))));Object(r.MapTo)("desafio-page404-aem/components/download")(je.DownloadV1,{isEmpty:je.DownloadV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/list")(je.ListV2,{isEmpty:je.ListV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/separator")(je.SeparatorV1,{isEmpty:je.SeparatorV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/button")(je.ButtonV1,{isEmpty:je.ButtonV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/teaser")(je.TeaserV1,{isEmpty:je.TeaserV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/image")(je.ImageV2,{isEmpty:je.ImageV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/title")(fe,{isEmpty:me.TitleV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/breadcrumb")(je.BreadCrumbV2,{isEmpty:je.BreadCrumbV2IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/navigation")(je.NavigationV1),Object(r.MapTo)("desafio-page404-aem/components/languagenavigation")(je.LanguageNavigationV1),Object(r.MapTo)("desafio-page404-aem/components/tabs")(ge.TabsV1,{isEmpty:ge.TabsV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/accordion")(ge.AccordionV1,{isEmpty:ge.AccordionV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/carousel")(ue,{isEmpty:xe.CarouselV1IsEmptyFn}),Object(r.MapTo)("desafio-page404-aem/components/container")(ge.ContainerV1,{isEmpty:ge.ContainerV1IsEmptyFn});Object(r.MapTo)("desafio-page404-aem/components/text")(be,{emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1}});i(216);const Oe={};document.addEventListener("DOMContentLoaded",(()=>{n.ModelManager.initialize(Oe).then((e=>{const t=Object(o.a)();Object(s.render)(Object(l.jsx)(c.e,{history:t,children:Object(l.jsx)(d,{history:t,cqChildren:e[n.Constants.CHILDREN_PROP],cqItems:e[n.Constants.ITEMS_PROP],cqItemsOrder:e[n.Constants.ITEMS_ORDER_PROP],cqPath:e[n.Constants.PATH_PROP],locationPathname:window.location.pathname})}),document.getElementById("spa-root"))}))}))}},[[217,1,2]]]);
//# sourceMappingURL=main.6cc9f85f.chunk.js.map