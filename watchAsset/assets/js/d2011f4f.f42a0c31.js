"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(n),m=i,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||s;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const s={description:"Available RPC methods for signing transactions in MetaMask.",sidebar_position:2},r="Signing methods",o={unversionedId:"concepts/signing-methods",id:"concepts/signing-methods",title:"Signing methods",description:"Available RPC methods for signing transactions in MetaMask.",source:"@site/wallet/concepts/signing-methods.md",sourceDirName:"concepts",slug:"/concepts/signing-methods",permalink:"/watchAsset/wallet/concepts/signing-methods",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/signing-methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Available RPC methods for signing transactions in MetaMask.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"MetaMask SDK connections",permalink:"/watchAsset/wallet/concepts/sdk-connections"},next:{title:"Convenience libraries",permalink:"/watchAsset/wallet/concepts/convenience-libraries"}},p={},l=[{value:"eth_signTypedData_v4",id:"eth_signtypeddata_v4",level:2},{value:"personal_sign",id:"personal_sign",level:2},{value:"Deprecated signing methods",id:"deprecated-signing-methods",level:2},{value:"eth_sign",id:"eth_sign",level:3},{value:"eth_signTypedData_v1 and eth_signTypedData_v3",id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3",level:3}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing-methods"},"Signing methods"),(0,i.kt)("p",null,"This page describes the signing RPC methods in MetaMask.\nLearn how to ",(0,i.kt)("a",{parentName:"p",href:"/watchAsset/wallet/how-to/sign-data"},"use the recommended signing methods"),"."),(0,i.kt)("h2",{id:"eth_signtypeddata_v4"},"eth_signTypedData_v4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#eth_signTypedDatav4"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"\nis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cheap to verify on chain."),(0,i.kt)("li",{parentName:"ul"},"Human-readable."),(0,i.kt)("li",{parentName:"ul"},"Protected against phishing signatures.")),(0,i.kt)("p",null,"If onchain verifiability cost is a high priority,\n",(0,i.kt)("a",{parentName:"p",href:"/watchAsset/wallet/how-to/sign-data#use-eth_signtypeddata_v4"},"use ",(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."),(0,i.kt)("h2",{id:"personal_sign"},"personal_sign"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metamask.github.io/api-playground/api-documentation/#personal_sign"},(0,i.kt)("inlineCode",{parentName:"a"},"personal_sign")),": "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Displays human-readable text when UTF-8 encoded, making it a popular choice for site logins\n(for example, ",(0,i.kt)("a",{parentName:"li",href:"/watchAsset/wallet/how-to/use-siwe"},"Sign-In with Ethereum"),"). "),(0,i.kt)("li",{parentName:"ul"},"Is protected against phishing signatures.")),(0,i.kt)("p",null,"The text prefix of ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign")," makes signatures expensive to verify on-chain.\nIf onchain verifiability cost is not a priority, you can\n",(0,i.kt)("a",{parentName:"p",href:"/watchAsset/wallet/how-to/sign-data#use-personal_sign"},"use ",(0,i.kt)("inlineCode",{parentName:"a"},"personal_sign")),"."),(0,i.kt)("h2",{id:"deprecated-signing-methods"},"Deprecated signing methods"),(0,i.kt)("admonition",{title:"important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v1"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v3")," are deprecated.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData_v4")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"personal_sign"),".")),(0,i.kt)("h3",{id:"eth_sign"},"eth_sign"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," allows signing an arbitrary hash, which means it can be used to sign transactions, or any other\ndata. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," is a dangerous phishing risk."),(0,i.kt)("p",null,"MetaMask disables ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," by default and does not recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," in production.\nSome applications (usually internal administrator panels) use ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," for ease of\nuse, or due to an inability to change the associated dapp.\nIf a wallet user must interact with a dapp that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," and accepts the risks,\nthe wallet user can re-enable ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sign")," through advanced settings."),(0,i.kt)("h3",{id:"eth_signtypeddata_v1-and-eth_signtypeddata_v3"},"eth_signTypedData_v1 and eth_signTypedData_v3"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData")," was introduced by ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),".\nThe EIP-712 specification changed several times resulting in multiple versions\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_signTypedData"),"."),(0,i.kt)("p",null,"The earlier versions are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v1")," \u2013 The same as ",(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData"),".\nRead the\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290"},"introductory blog post to this method"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eth_signTypedData_v3")," \u2013 A highly used version of the EIP-712 specification.\nRead the\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26"},"introductory blog post to this method"),".")),(0,i.kt)("p",null,"The missing ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," represents an intermediary design that the Cipher browser implemented. "),(0,i.kt)("p",null,"All early versions of this method lack later security improvements.\nUse the latest version, ",(0,i.kt)("a",{parentName:"p",href:"#eth_signtypeddata_v4"},(0,i.kt)("inlineCode",{parentName:"a"},"eth_signTypedData_v4")),"."))}h.isMDXComponent=!0}}]);