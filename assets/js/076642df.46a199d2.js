"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Hasura",source:"https://github.com/refinedev/refine/tree/master/packages/hasura",swizzle:!0},p=void 0,s={unversionedId:"packages/data-providers/hasura/index",id:"packages/data-providers/hasura/index",title:"Hasura",description:"Refine provides a data provider for APIs powered with Hasura, a platform to build and deploy GraphQL APIs.",source:"@site/docs/packages/data-providers/hasura/index.md",sourceDirName:"packages/data-providers/hasura",slug:"/packages/data-providers/hasura/",permalink:"/docs/packages/data-providers/hasura/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/data-providers/hasura/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703228593,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Hasura",source:"https://github.com/refinedev/refine/tree/master/packages/hasura",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Airtable",permalink:"/docs/packages/data-providers/airtable/"},next:{title:"Community Data Providers",permalink:"/docs/packages/data-providers/community-data-providers/"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Realtime",id:"realtime",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("InstallPackagesCommand"),f=u("CodeSandboxExample"),h={toc:d};function g(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Refine provides a data provider for APIs powered with ",(0,a.kt)("a",{parentName:"p",href:"https://hasura.io"},"Hasura"),", a platform to build and deploy GraphQL APIs."),(0,a.kt)("admonition",{title:"Good to know",type:"simple"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"This library uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,a.kt)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://the-guild.dev/graphql/ws"},(0,a.kt)("inlineCode",{parentName:"a"},"graphql-ws@5"))," package, used to handle the realtime subscriptions is included in the package."),(0,a.kt)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."),(0,a.kt)("li",{parentName:"ul"},"To learn more about realtime features of Refine, check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/guides-concepts/realtime"},"Realtime")," guide."))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(m,{args:"@refinedev/hasura",mdxType:"InstallPackagesCommand"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/hasura";\n\n// highlight-start\nconst client = new GraphQLClient("<API_URL>", {\n  headers: {\n    "x-hasura-role": "public",\n  },\n});\n// highlight-end\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,a.kt)("h3",{id:"realtime"},"Realtime"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/hasura")," also provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,a.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,a.kt)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, { GraphQLClient, liveProvider, graphqlWS } from "@refinedev/hasura";\n\nconst client = new GraphQLClient("<API_URL>", {\n  headers: {\n    "x-hasura-role": "public",\n  },\n});\n// highlight-next-line\nconst wsClient = graphqlWS.createClient({\n  url: "<WS_URL>",\n});\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(f,{path:"data-provider-hasura",mdxType:"CodeSandboxExample"}))}g.isMDXComponent=!0}}]);