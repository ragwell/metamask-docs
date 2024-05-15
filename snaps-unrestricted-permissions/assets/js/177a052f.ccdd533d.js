"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9566],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return t?a.createElement(g,s(s({ref:n},m),{},{components:t})):a.createElement(g,s({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const i={description:"Learn about the Snaps execution environment.",sidebar_position:3},s="Snaps execution environment",o={unversionedId:"learn/about-snaps/execution-environment",id:"learn/about-snaps/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/learn/about-snaps/execution-environment.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/execution-environment",permalink:"/snaps-unrestricted-permissions/snaps/learn/about-snaps/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/execution-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/snaps-unrestricted-permissions/snaps/learn/about-snaps/files"},next:{title:"Tutorials",permalink:"/snaps-unrestricted-permissions/snaps/learn/tutorials"}},p={},l=[{value:"Supported globals",id:"supported-globals",level:2},{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],m={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.yg)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.yg)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."),(0,r.yg)("p",null,"This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,r.yg)("inlineCode",{parentName:"p"},"snap")," global and MetaMask's ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global."),(0,r.yg)("p",null,"The execution environment is designed to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Prevent Snaps from polluting the global environment."),(0,r.yg)("li",{parentName:"ul"},"Prevent malicious Snaps from stealing from users."),(0,r.yg)("li",{parentName:"ul"},"Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,r.yg)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.yg)("li",{parentName:"ul"},'Be "fully virtualizable," or platform-independent.')),(0,r.yg)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.yg)("h2",{id:"supported-globals"},"Supported globals"),(0,r.yg)("p",null,"A Snap can access the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/learn/about-snaps/apis#snaps-api"},"Snaps API")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"snap")," global, and the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/learn/about-snaps/apis#metamask-json-rpc-api"},"MetaMask JSON-RPC API")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo access the ",(0,r.yg)("inlineCode",{parentName:"p"},"ethereum")," global, a Snap must request the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/reference/permissions#endowmentethereum-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission."),(0,r.yg)("p",null,"Almost all\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"standard JavaScript globals"),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.yg)("p",null,"The following globals are also available:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"console")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.yg)("a",{parentName:"li",href:"/snaps-unrestricted-permissions/snaps/reference/permissions#endowmentnetwork-access"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.yg)("a",{parentName:"li",href:"/snaps-unrestricted-permissions/snaps/reference/permissions#endowmentwebassembly"},(0,r.yg)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"btoa")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"URL"))),(0,r.yg)("admonition",{title:"note",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To use Node.js built-in modules such as ",(0,r.yg)("inlineCode",{parentName:"p"},"crypto")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"path"),", set the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/reference/cli/options#polyfills"},(0,r.yg)("inlineCode",{parentName:"a"},"polyfills"))," configuration option to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),".")),(0,r.yg)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)")," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,r.yg)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"JavaScript strict mode"),"."))}u.isMDXComponent=!0}}]);