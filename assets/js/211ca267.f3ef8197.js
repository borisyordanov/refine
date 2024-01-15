"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(l,".").concat(f)]||b[f]||p[f]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},26627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={id:"basic",title:"Tables with Chakra UI",sidebar_label:"Basic Table","example-title":"Basic React Table with Chakra UI","example-tags":["table","chakra-ui","react-table"]},l=void 0,s={unversionedId:"examples/table/chakra-ui/basic",id:"examples/table/chakra-ui/basic",title:"Tables with Chakra UI",description:"Refine allows you to use all the features of React Table with @refinedev/react-table adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your Refine project. For more information, you can view the live example or review the source code to see how it's used with Chakra UI.",source:"@site/docs/examples/table/chakra-ui/basic.md",sourceDirName:"examples/table/chakra-ui",slug:"/examples/table/chakra-ui/basic",permalink:"/docs/examples/table/chakra-ui/basic",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/chakra-ui/basic.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1705316024,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"basic",title:"Tables with Chakra UI",sidebar_label:"Basic Table","example-title":"Basic React Table with Chakra UI","example-tags":["table","chakra-ui","react-table"]},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/examples/authentication/chakra-ui"},next:{title:"Advanced Table",permalink:"/docs/examples/table/chakra-ui/advanced-react-table"}},u={},p=[],b=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var f;const d={toc:p};function m(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Refine allows you to use all the features of ",(0,a.kt)("a",{parentName:"p",href:"https://react-table.tanstack.com/"},"React Table")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," adapter. In this way, you can manage your server-side data operations. By using this adapter, you can directly use all the features of React Table in your Refine project. For more information, you can view the live example or review the source code to see how it's used with Chakra UI."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the React Table documentation for more information. \u2192")),(0,a.kt)(b,{path:"table-chakra-ui-basic",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);