"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92215],{58860:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"text",title:"Text",swizzle:!0},p=void 0,c={unversionedId:"api-reference/mantine/components/fields/text",id:"version-3.xx.xx/api-reference/mantine/components/fields/text",title:"Text",description:"This field lets you show basic text. It uses Mantine `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/text.md",sourceDirName:"api-reference/mantine/components/fields",slug:"/api-reference/mantine/components/fields/text",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/text",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mantine/components/fields/text.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716209996,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"text",title:"Text",swizzle:!0},sidebar:"someSidebar",previous:{title:"Tag",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/tag"},next:{title:"Url",permalink:"/docs/3.xx.xx/api-reference/mantine/components/fields/url"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},f=u("DocThumbsUpDownFeedbackWidget"),m=u("PropsTable"),y={toc:d},g="wrapper";function b(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: routerProvider } = RefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  routerProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  notificationProvider: RefineMantine.useNotificationProvider,\n  Layout: RefineMantine.Layout,\n  Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <RefineMantine.MantineProvider\n      theme={RefineMantine.LightTheme}\n      withNormalizeCSS\n      withGlobalStyles\n    >\n      <RefineMantine.Global\n        styles={{ body: { WebkitFontSmoothing: "auto" } }}\n      />\n      <RefineMantine.NotificationsProvider position="top-right">\n        {children}\n      </RefineMantine.NotificationsProvider>\n    </RefineMantine.MantineProvider>\n  );\n};\n')),(0,r.yg)("p",null,"This field lets you show basic text. It uses Mantine ",(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/core/text/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Text>"))," component."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how to use it in a basic show page:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/show/123"]);\nimport { Refine } from "@pankod/refine-core";\nimport { ShowButton } from "@pankod/refine-mantine";\n\n// visible-block-start\nimport { useShow, useOne } from "@pankod/refine-core";\nimport { Show, Title, Text, TextField } from "@pankod/refine-mantine";\n\nconst PostShow: React.FC<IResourceComponentsProps> = () => {\n  const { queryResult } = useShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  const { data: categoryData, isLoading: categoryIsLoading } =\n    useOne<ICategory>({\n      resource: "categories",\n      id: record?.category?.id,\n      queryOptions: {\n        enabled: !!record,\n      },\n    });\n\n  return (\n    <Show isLoading={isLoading}>\n      <Title order={5}>Id</Title>\n      <Text mt="sm">{record?.id}</Text>\n\n      <Title mt="sm" order={5}>\n        Category\n      </Title>\n      <TextField\n        value={categoryIsLoading ? "Loading..." : categoryData?.data?.title}\n      />\n    </Show>\n  );\n};\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  category: { id: number };\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          show: PostShow,\n          list: () => (\n            <div>\n              <p>This page is empty.</p>\n              <ShowButton recordItemId="123">Show Item 123</ShowButton>\n            </div>\n          ),\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(f,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@pankod/refine-mantine/TextField",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Mantine ",(0,r.yg)("a",{parentName:"p",href:"https://mantine.dev/core/text/?t=props"},"Text"),"."))))}b.isMDXComponent=!0}}]);