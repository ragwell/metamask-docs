"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4961],{68799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453),s=n(11470),i=n(19365);const l={description:"Get the base fee percentile for a chain."},o="Get the base fee percentile",c={id:"gas-api/api-reference/basefeepercentile",title:"Get the base fee percentile",description:"Get the base fee percentile for a chain.",source:"@site/services/gas-api/api-reference/basefeepercentile.md",sourceDirName:"gas-api/api-reference",slug:"/gas-api/api-reference/basefeepercentile",permalink:"/ACT-1379-add-launchdarkly/services/gas-api/api-reference/basefeepercentile",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/gas-api/api-reference/basefeepercentile.md",tags:[],version:"current",frontMatter:{description:"Get the base fee percentile for a chain."},sidebar:"servicesSidebar",previous:{title:"Get the base fee history",permalink:"/ACT-1379-add-launchdarkly/services/gas-api/api-reference/basefeehistory"},next:{title:"Get the busy threshold",permalink:"/ACT-1379-add-launchdarkly/services/gas-api/api-reference/busythreshold"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"get-the-base-fee-percentile",children:"Get the base fee percentile"}),"\n",(0,r.jsx)(t.p,{children:"Returns the base fee percentile (50th percentile) of the specified blockchain network."}),"\n",(0,r.jsxs)(t.p,{children:["For example, if the API returns a value of ",(0,r.jsx)(t.code,{children:"20"})," Gwei, it means that 50% of the historical base fees\nare less than or equal to ",(0,r.jsx)(t.code,{children:"20"})," Gwei."]}),"\n",(0,r.jsx)(t.p,{children:"This can be useful for users or applications to estimate the optimal gas price for transactions\nbased on historical data."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET"})," ",(0,r.jsx)(t.code,{children:"https://gas.api.infura.io/networks/${chainId}/baseFeePercentile"})]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Path"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"chainId"}),": ",(0,r.jsx)(t.code,{children:"string"})," - ID of the chain to query."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"baseFeePercentile"}),": ",(0,r.jsx)(t.code,{children:"string"})," - The base fee in Gwei at the 50th percentile, meaning that 50% of the base fees are\nless than or equal to the provided amount."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.h3,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(t.p,{children:["Include your ",(0,r.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-id",children:"API key"}),"\nand optional ",(0,r.jsx)(t.a,{href:"https://docs.infura.io/networks/ethereum/how-to/secure-a-project/project-secret",children:"API key secret"}),"\nto authorize your account to use the APIs."]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You can call the API with only an API key, and ",(0,r.jsx)(t.a,{href:"/ACT-1379-add-launchdarkly/services/gas-api/api-reference/#supported-api-request-formats",children:"include it as a path parameter"}),"\ninstead of using the cURL authentication option (",(0,r.jsx)(t.code,{children:"-u"}),")."]})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(i.A,{value:"cURL",label:"cURL",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  -u <API_KEY>:<API_KEY_SECRET> \\\n  \"https://gas.api.infura.io/networks/1/baseFeeHistory\"\n"})})}),(0,r.jsx)(i.A,{value:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const axios = require("axios");\n\nconst apiKey = "<API-KEY>"; // Replace with your API key.\nconst apiKeySecret = "<API-KEY-SECRET>"; // Replace with your API key secret.\n\nconst Auth = Buffer.from(\n  apiKey + ":" + apiKeySecret,\n).toString("base64");\n\n// The chain ID of the supported network.\nconst chainId = 1;\n\n(async () => {\n  try {\n    const { data } = await axios.get(\n      `https://gas.api.infura.io/networks/${chainId}/baseFeePercentile`,\n      {\n        headers: {\n          Authorization: `Basic ${Auth}`,\n        },\n      }\n    );\n    console.log("Base fee history:", data);\n  } catch (error) {\n    console.log("Server responded with:", error);\n  }\n})();\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "baseFeePercentile": "23.227829059"\n}\n'})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(18215),s=n(23104),i=n(56347),l=n(205),o=n(57485),c=n(31682),u=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:a}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);