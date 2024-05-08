"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39353],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>b});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,b=l["".concat(s,".").concat(d)]||l[d]||m[d]||i;return n?t.createElement(b,a(a({ref:r},u),{},{components:n})):t.createElement(b,a({ref:r},u))}));function b(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53426:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>l});n(96540);var t=n(15680);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"mui-breadcrumb",title:"Breadcrumb",swizzle:!0},s=void 0,p={unversionedId:"api-reference/mui/components/mui-breadcrumb",id:"version-3.xx.xx/api-reference/mui/components/mui-breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Material UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/breadcrumb.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-breadcrumb",permalink:"/docs/3.xx.xx/api-reference/mui/components/mui-breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/breadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715162860,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"mui-breadcrumb",title:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/mui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/3.xx.xx/api-reference/mui/components/buttons/clone-button"}},u={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],m=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",r)},d=m("DocThumbsUpDownFeedbackWidget"),b=m("PropsTable"),y={toc:l},h="wrapper";function f(e){var{components:r}=e,n=a(e,["components"]);return(0,t.yg)(h,i(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},y,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Material UI ",(0,t.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," components using the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},(0,t.yg)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,t.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,t.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,t.yg)("strong",{parentName:"a"},"refine CLI")))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-mui";\n\nconst PostShow: React.FC = () => {\n  return (\n    <Show\n      // highlight-next-line\n      breadcrumb={<Breadcrumb />}\n    >\n      <p>Content of your show page...</p>\n    </Show>\n  );\n};\n// visible-block-end\n\nconst PostList = () => {\n  return (\n    <RefineMui.List>\n      <p>Content of your list page...</p>\n    </RefineMui.List>\n  );\n};\n\nconst PostIcon = (\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    className="icon icon-tabler icon-tabler-list"\n    width={18}\n    height={18}\n    viewBox="0 0 24 24"\n    strokeWidth="2"\n    stroke="currentColor"\n    fill="none"\n    strokeLinecap="round"\n    strokeLinejoin="round"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n    <line x1={9} y1={6} x2={20} y2={6}></line>\n    <line x1={9} y1={12} x2={20} y2={12}></line>\n    <line x1={9} y1={18} x2={20} y2={18}></line>\n    <line x1={5} y1={6} x2={5} y2="6.01"></line>\n    <line x1={5} y1={12} x2={5} y2="12.01"></line>\n    <line x1={5} y1={18} x2={5} y2="18.01"></line>\n  </svg>\n);\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/posts/show/123"]}\n    resources={[\n      {\n        name: "posts",\n        icon: PostIcon,\n        show: PostShow,\n        list: PostList,\n      },\n    ]}\n  />,\n);\n')),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"breadcrumbprops"},(0,t.yg)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,t.yg)(d,{id:"breadcrumbprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Material UI ",(0,t.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," component so it can be configured with the ",(0,t.yg)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n  return (\n    <List breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}>\n      ...\n    </List>\n  );\n};\n'))),(0,t.yg)("h3",{id:"showhome"},(0,t.yg)("inlineCode",{parentName:"h3"},"showHome")),(0,t.yg)(d,{id:"showhome",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If your application has a ",(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"showHome")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n  return <List breadcrumb={<Breadcrumb showHome={false} />}>...</List>;\n};\n'))),(0,t.yg)("h3",{id:"hideicons"},(0,t.yg)("inlineCode",{parentName:"h3"},"hideIcons")),(0,t.yg)(d,{id:"hideicons",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,t.yg)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,t.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb hideIcons />}>...</List>;\n    );\n};\n'))),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(d,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(b,{module:"@pankod/refine-mui/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://mui.com/material-ui/react-breadcrumbs/#main-content)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://mui.com/material-ui/react-breadcrumbs/#api)",mdxType:"PropsTable"})))}f.isMDXComponent=!0}}]);