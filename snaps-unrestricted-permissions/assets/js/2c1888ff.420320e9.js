"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5593],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>h});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=i,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function h(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74079:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=a(58168),i=(a(96540),a(15680));const r={description:"Develop, test, and publish a Snap.",sidebar_position:7},o="Publish a Snap",s={unversionedId:"how-to/publish-a-snap",id:"how-to/publish-a-snap",title:"Publish a Snap",description:"Develop, test, and publish a Snap.",source:"@site/snaps/how-to/publish-a-snap.md",sourceDirName:"how-to",slug:"/how-to/publish-a-snap",permalink:"/snaps-unrestricted-permissions/snaps/how-to/publish-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/publish-a-snap.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Develop, test, and publish a Snap.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Troubleshoot common issues",permalink:"/snaps-unrestricted-permissions/snaps/how-to/debug-a-snap/common-issues"},next:{title:"Get allowlisted",permalink:"/snaps-unrestricted-permissions/snaps/how-to/get-allowlisted"}},p={},l=[{value:"Make a Snap available to users",id:"make-a-snap-available-to-users",level:2}],u={toc:l},c="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,t.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"publish-a-snap"},"Publish a Snap"),(0,i.yg)("p",null,"Snaps are npm packages, so publishing a Snap is as simple as publishing an npm package.\nRefer to the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/commands/npm-publish"},"npm CLI documentation")," for details\non publishing to the public registry.\nThe following details are specific to Snaps:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The version in ",(0,i.yg)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"repository.url")," field in ",(0,i.yg)("inlineCode",{parentName:"li"},"package.json")," should match the correct repository for your Snap."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"source.location.npm.packageName")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"snap.manifest.json")," should match the name in ",(0,i.yg)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"proposedName")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"snap.manifest.json"),' should be a human-readable name and should not include\nthe words "MetaMask" or "Snap." '),(0,i.yg)("li",{parentName:"ul"},"The image specified in ",(0,i.yg)("inlineCode",{parentName:"li"},"iconPath")," in the manifest file is used as the icon displayed when\ninstalling the Snap, in custom dialogs, and in the settings menu.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"This icon should be a valid SVG."),(0,i.yg)("li",{parentName:"ul"},"The icon will be cropped in a circle when displayed in MetaMask; you do not need to make the icon circular.")))),(0,i.yg)("p",null,"After publishing the Snap, any dapp can connect to the Snap by using the Snap ID ",(0,i.yg)("inlineCode",{parentName:"p"},"npm:[packageName]"),"."),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"If you are using the Snap monorepo project generated in the ",(0,i.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/get-started/quickstart"},"quickstart"),",\nmake sure to only publish the Snap package in ",(0,i.yg)("inlineCode",{parentName:"p"},"/packages/snap"),".\nYou can use the ",(0,i.yg)("a",{parentName:"p",href:"https://metamask.github.io/snaps/snaps-simulator/staging/#/manifest"},"Snaps Simulator")," to verify\nthat your Snap was published correctly ","\u2014"," just select ",(0,i.yg)("strong",{parentName:"p"},"localhost")," in the top right corner and change the\nSnap location to ",(0,i.yg)("strong",{parentName:"p"},"npm")," and the ID of your Snap. "),(0,i.yg)("p",{parentName:"admonition"},"Also, make sure to update the manifest file, icon file, and README to differentiate your Snap from the template.")),(0,i.yg)("h2",{id:"make-a-snap-available-to-users"},"Make a Snap available to users"),(0,i.yg)("p",null,"After publishing a Snap, you can make it available to MetaMask users by\n",(0,i.yg)("a",{parentName:"p",href:"/snaps-unrestricted-permissions/snaps/how-to/get-allowlisted"},"getting your Snap allowlisted"),".\nOnce allowlisted, anyone can install your Snap in the MetaMask extension."))}m.isMDXComponent=!0}}]);