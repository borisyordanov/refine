"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?o.createElement(d,a(a({ref:t},p),{},{components:r})):o.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>s});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={id:"useAutocomplete",title:"useAutocomplete","example-title":"Material UI useAutocomplete hook","example-tags":["mui"]},c=void 0,u={unversionedId:"examples/field/useAutocomplete",id:"examples/field/useAutocomplete",title:"useAutocomplete",description:"This example shows how to use the useAutocomplete hook.",source:"@site/docs/examples/field/useAutocomplete.md",sourceDirName:"examples/field",slug:"/examples/field/useAutocomplete",permalink:"/docs/examples/field/useAutocomplete",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/field/useAutocomplete.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703228593,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{id:"useAutocomplete",title:"useAutocomplete","example-title":"Material UI useAutocomplete hook","example-tags":["mui"]},sidebar:"mainSidebar",previous:{title:"useSelect with infinite list",permalink:"/docs/examples/field/useSelect-with-infinite-list"},next:{title:"Custom Form Validation",permalink:"/docs/examples/form/antd/custom-form-validation"}},p={},s=[],m=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const d={toc:s};function b(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to use the ",(0,o.kt)("strong",{parentName:"p"},"useAutocomplete")," hook."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/ui-integrations/material-ui/hooks/use-auto-complete"},"Refer to the Refine useAutocomplete hook documentation for more information. \u2192")),(0,o.kt)(m,{path:"field-material-ui-use-autocomplete",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);