"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9817],{31984:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),a=r(73727),o=r(25750),l=r(8241),i=r(47785),c=r(58087);const s=n.createContext({collectLink:()=>{}});var m=r(70676);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){var r,d,b,f,{isNavLink:h,to:v,href:y,activeClassName:x,isActive:E,"data-noBrokenLinkCheck":w,autoAddBaseUrl:O=!0}=e,k=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:L}}=(0,l.Z)(),{withBaseUrl:j}=(0,m.C)(),N=(0,n.useContext)(s),Z=(0,n.useRef)(null);(0,n.useImperativeHandle)(t,(()=>Z.current));const S=v||y;const C=(0,i.Z)(S),T=null===(d=S)||void 0===d||null===(r=d.replace)||void 0===r?void 0:r.call(d,"pathname://","");let D=void 0!==T?(I=T,O&&(e=>e.startsWith("/"))(I)?j(I):I):void 0;var I;D&&C&&(D=(0,o.applyTrailingSlash)(D,{trailingSlash:P,baseUrl:L}));const M=(0,n.useRef)(!1),B=h?a.OL:a.rU,R=c.Z.canUseIntersectionObserver,A=(0,n.useRef)(),V=()=>{M.current||null==D||(window.docusaurus.preload(D),M.current=!0)};var F;(0,n.useEffect)((()=>(!R&&C&&null!=D&&window.docusaurus.prefetch(D),()=>{R&&A.current&&A.current.disconnect()})),[A,D,R,C]);const U=null!==(F=null===(f=D)||void 0===f||null===(b=f.startsWith)||void 0===b?void 0:b.call(f,"#"))&&void 0!==F&&F,$=!D||!C||U;return $||w||N.collectLink(D),$?n.createElement("a",u({ref:Z,href:D},S&&!C&&{target:"_blank",rel:"noopener noreferrer"},k)):n.createElement(B,u(g(u({},k),{onMouseEnter:V,onTouchStart:V,innerRef:e=>{Z.current=e,R&&e&&C&&(A.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(A.current.unobserve(e),A.current.disconnect(),null!=D&&window.docusaurus.prefetch(D))}))})),A.current.observe(e))},to:D}),h&&{isActive:E,activeClassName:x}))}const f=n.forwardRef(b)},2085:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(67294),a=r(86010),o=r(8241),l=r(31984),i=r(92210),c=r(55995),s=r(65319),m=r(39085),d=r(27391);const u={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p({versionLabel:e,to:t,onClick:r}){return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:t,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b({className:e,versionMetadata:t}){const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:l}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(l),{latestDocSuggestion:d,latestVersionSuggestion:u}=(0,c.Jo)(l),b=null!=d?d:(f=u).docs.find((e=>e.id===f.mainDocId));var f;return n.createElement("div",{className:(0,a.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(g,{siteTitle:r,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:u.label,to:b.path,onClick:()=>i(u.name)})))}function f({className:e}){const t=(0,d.E)();return t.banner?n.createElement(b,{className:e,versionMetadata:t}):null}},65319:(e,t,r)=>{r.d(t,{k:()=>n});const n={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button",codeBlock:"theme-code-block",admonition:"theme-admonition",admonitionType:e=>`theme-admonition-${e}`},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docBreadcrumbs:"theme-doc-breadcrumbs",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarContainer:"theme-doc-sidebar-container",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:e=>`theme-doc-sidebar-item-category-level-${e}`,docSidebarItemLinkLevel:e=>`theme-doc-sidebar-item-link-level-${e}`},blog:{}}},33857:(e,t,r)=>{r.d(t,{E:()=>h});var n=r(67294),a=r(86010),o=r(31984),l=r(53964),i=r(87275),c=r(92210);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{fill:"currentColor",d:"M14.4 4.8a4 4 0 0 0-4.8 0l-4 3a4 4 0 0 0-1.431 4.35l1.5 5A4 4 0 0 0 9.5 20h.5a.5.5 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 3 0v2a.5.5 0 0 0 .5.5h.5a4 4 0 0 0 3.831-2.85l1.5-5A4 4 0 0 0 18.4 7.8l-4-3Z"}));function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.793 8.293a1 1 0 0 0 0 1.414L12.086 12l-2.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0Z",clipRule:"evenodd"})),g={landing:[720,960,1296,1440,1584],tw:[640,768,1024,1280,1536]},p=(e={variant:"tw"})=>{const[t,r]=n.useState(!0),[a,o]=n.useState(!0),[l,i]=n.useState(!0),[c,s]=n.useState(!0),[m,d]=n.useState(!1);return n.useEffect((()=>{if("undefined"!=typeof window){const[t,n,a,l,c]=g[e.variant].map((e=>window.matchMedia(`(min-width: ${e}px)`))),m=e=>{r(e.matches)},u=e=>{o(e.matches)},p=e=>{i(e.matches)},b=e=>{s(e.matches)},f=e=>{d(e.matches)};return t.addEventListener("change",m),n.addEventListener("change",u),a.addEventListener("change",p),l.addEventListener("change",b),c.addEventListener("change",f),r(t.matches),o(n.matches),i(a.matches),s(l.matches),d(c.matches),()=>{t.removeEventListener("change",m),n.removeEventListener("change",u),a.removeEventListener("change",p),l.removeEventListener("change",b),c.removeEventListener("change",f)}}}),[]),{sm:t,md:a,lg:l,xl:c,xxl:m}};function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const h=()=>{const e=p(),t=(0,l.s1)(),r=(0,i.Ns)();if(!t)return null;const[s,d]=(0,n.useMemo)((()=>{const r=t.length>3&&!e.sm;return[t.map(((e,t,n)=>f(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({},e),{hideOnMobile:r&&t>0&&t<n.length-2}))),r]}),[t]);return n.createElement("nav",{className:(0,a.Z)("refine-breadcrumbs","pb-6"),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},s.find((e=>"Examples"===e.label))&&n.createElement("div",{className:(0,a.Z)("example-full-title","hidden","h-0 w-0","overflow-hidden"),"aria-hidden":!0},s.slice(2).map((e=>e.label)).join(" ")," Example"),n.createElement("ul",{className:(0,a.Z)("breadcrumbs","flex flex-wrap items-center"),itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},r&&n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},n.createElement(o.Z,{href:"/docs",itemProp:"item"},n.createElement(m,{className:"text-gray-400 dark:text-gray-400"}),n.createElement("span",{className:"sr-only",itemProp:"name"},"Documentation"),n.createElement("meta",{itemProp:"position",content:"1"}))),s.map(((e,r)=>{const l=r===t.length-1;return n.createElement(n.Fragment,{key:r},n.createElement("li",{className:(0,a.Z)("flex-row flex-nowrap",e.hideOnMobile?"none":"flex"),itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},n.createElement(u,{className:"text-gray-300"}),e.href&&!l?n.createElement(o.Z,{href:e.href,className:(0,a.Z)("text-gray-600 dark:text-gray-400","text-sm","leading-6"),itemProp:"item",itemID:e.href},n.createElement("span",{itemProp:"name"},e.label)):n.createElement("span",{className:(0,a.Z)(l?"text-gray-500":"text-gray-600 dark:text-gray-400","text-sm","leading-6"),itemProp:"item",itemID:"#"},n.createElement("span",{itemProp:"name"},e.label)),n.createElement("meta",{itemProp:"position",content:String(r+2)})),0===r&&s.length>1&&d?n.createElement("li",{className:(0,a.Z)("flex flex-row flex-nowrap")},n.createElement(u,{className:"text-gray-300"}),n.createElement("div",{className:"text-gray-600 dark:text-gray-400"},"...")):null)}))))}},39681:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(67294),a=r(86010);const o=({version:e})=>n.createElement("div",{className:(0,a.Z)("text-xs","dark:text-white","text-gray-900","py-2 px-3","rounded","dark:bg-gray-700","bg-gray-100","font-mono")},"Version: ",e)},1526:(e,t,r)=>{r.d(t,{L:()=>o});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.29289 7.70711C7.68342 8.09763 8.31658 8.09763 8.70711 7.70711L11.7071 4.70711C12.0976 4.31658 12.0976 3.68342 11.7071 3.29289L8.70711 0.292893C8.31658 -0.0976313 7.68342 -0.0976313 7.29289 0.292893C6.90237 0.683417 6.90237 1.31658 7.29289 1.70711L8.58579 3L1 3C0.447715 3 -1.26563e-07 3.44771 -1.74846e-07 4C-2.23128e-07 4.55228 0.447715 5 1 5L8.58579 5L7.29289 6.29289C6.90237 6.68342 6.90237 7.31658 7.29289 7.70711Z",fill:"currentColor"}))},73370:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(67294),a=r(89712),o=r(53964),l=r(70676),i=r(86010),c=r(31984),s=r(47785);function m({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,i.Z)("no-underline","rounded-lg","dark:bg-gray-800 bg-gray-50","p-4","flex flex-col","gap-2 sm:gap-4 2xl:gap-6","hover:no-underline")},t)}function d({href:e,icon:t,title:r,description:a}){return n.createElement(m,{href:e},n.createElement("h2",{className:(0,i.Z)("line-clamp-1","text-xs sm:text-base 2xl:text-xl","dark:text-gray-200 text-gray-900","font-semibold","m-0"),title:r},n.createElement("span",{className:"mr-2"},t),n.createElement("span",null,r)),a&&n.createElement("p",{className:(0,i.Z)("line-clamp-3","m-0","text-xs sm:text-sm 2xl:text-lg","dark:text-gray-400 text-gray-700","font-normal","refine-prose"),title:a},a))}function u({item:e}){const t=(0,o.Wl)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:`${e.items.length} items`}):null;var r}function g({item:e}){var t;const r=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var a;const l=(0,o.xz)(null!==(a=e.docId)&&void 0!==a?a:void 0);var i;return n.createElement(d,{href:e.href,icon:r,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null===(t=l)||void 0===t?void 0:t.description})}const p=({item:e})=>{switch(e.type){case"link":return n.createElement(g,{item:e});case"category":return n.createElement(u,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}};function b({className:e}){const t=(0,o.jA)();return n.createElement(f,{items:t.items,className:e})}const f=e=>{const{items:t}=e;if(!t)return n.createElement(b,e);const r=(0,o.MN)(t);return n.createElement(n.Fragment,null,r.map(((e,t)=>n.createElement(p,{key:t,item:e}))))};var h=r(13257),v=r(2085),y=r(39681),x=r(33857),E=r(27391);function w({categoryGeneratedIndex:e}){return n.createElement(a.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,l.Z)(e.image)})}function O({categoryGeneratedIndex:e}){const t=(0,o.jA)(),{label:r}=(0,E.E)();return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,i.Z)("flex flex-1 flex-col","items-center justify-start","px-4 sm:px-0 py-4 sm:py-14","w-full")},n.createElement("div",{className:(0,i.Z)("max-w-screen-content w-full")},n.createElement(v.Z,null),n.createElement("div",{className:(0,i.Z)("flex flex-col","mb-8")},n.createElement(x.E,null),n.createElement("div",{className:"flex"},n.createElement(y.G,{version:r}))),n.createElement("div",{className:"refine-prose mb-16"},n.createElement("header",null,n.createElement("h1",null,e.title),e.description&&n.createElement("p",{className:"mb-8",dangerouslySetInnerHTML:{__html:e.description}})),n.createElement("article",{className:(0,i.Z)("grid grid-cols-1 sm:grid-cols-2","gap-2 sm:gap-4 2xl:gap-8","not-prose")},n.createElement(f,{items:t.items})))),n.createElement("div",{className:(0,i.Z)("max-w-screen-content","w-full")},n.createElement(h.Z,{previous:e.navigation.previous,next:e.navigation.next}))),n.createElement("div",{className:(0,i.Z)("hidden xl:block","w-full","sticky right-0 top-[67px]","max-w-[280px]","overflow-auto","h-[calc(100vh-67px)]","pl-3","pr-3","py-12","border-l dark:border-l-gray-700 border-l-gray-100","invisible")}))}const k=e=>n.createElement(n.Fragment,null,n.createElement(w,e),n.createElement(O,e))},13257:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010),o=r(31984);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=e=>n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.70711 0.292893C4.31658 -0.0976311 3.68342 -0.097631 3.29289 0.292893L0.292893 3.29289C-0.0976314 3.68342 -0.0976314 4.31658 0.292893 4.70711L3.29289 7.70711C3.68342 8.09763 4.31658 8.09763 4.70711 7.70711C5.09763 7.31658 5.09763 6.68342 4.70711 6.29289L3.41421 5L11 5C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3L3.41421 3L4.70711 1.70711C5.09763 1.31658 5.09763 0.683417 4.70711 0.292893Z",fill:"currentColor"}));var c=r(1526);const s=e=>{const{previous:t,next:r}=e;return n.createElement("div",{className:(0,a.Z)("grid grid-cols-2","gap-4 2xl:gap-8","w-full")},t&&n.createElement(o.Z,{href:t.permalink,className:(0,a.Z)("group","flex-1","p-4 2xl:p-6","rounded-lg","border border-gray-200 dark:border-gray-700","hover:bg-gray-100 hover:dark:bg-gray-700","hover:no-underline")},n.createElement("div",{className:"flex-1 flex items-start justify-center flex-col gap-2 2xl:gap-4 text-left"},n.createElement("div",{className:(0,a.Z)("flex items-center gap-2","text-xs leading-3 content-md:text-sm content-md:leading-6","text-gray-500 dark:text-gray-300","text-xs content-md:text-sm content-4xl:text-lg")},n.createElement("span",{className:(0,a.Z)("bg-gray-100 dark:bg-gray-800","dark:bg-opacity-50","group-hover:bg-gray-50 dark:group-hover:bg-gray-800 dark:group-hover:bg-opacity-100","flex items-center justify-center","rounded","w-6 h-6")},n.createElement(i,{className:"text-gray-400 dark:text-gray-500"})),"Previous"),n.createElement("span",{className:(0,a.Z)("text-xs content-md:text-base content-4xl:text-xl","text-refine-link-light dark:text-refine-link-dark","underline","ml-8")},t.title))),r&&n.createElement(o.Z,{href:r.permalink,className:(0,a.Z)("group","flex-1","p-4","rounded-lg","border border-gray-200 dark:border-gray-700","hover:bg-gray-100 hover:dark:bg-gray-700","hover:no-underline",!t&&"col-start-2")},n.createElement("div",{className:"flex-1 flex items-end justify-center flex-col gap-2 2xl:gap-4 text-right"},n.createElement("div",{className:(0,a.Z)("flex items-center gap-2","text-xs leading-3 content-md:text-sm content-md:leading-6","text-gray-500 dark:text-gray-300","text-xs content-md:text-sm content-4xl:text-lg")},"Next",n.createElement("span",{className:(0,a.Z)("bg-gray-100 dark:bg-gray-800","dark:bg-opacity-50","group-hover:bg-gray-50 dark:group-hover:bg-gray-800 dark:group-hover:bg-opacity-100","flex items-center justify-center","rounded","w-6 h-6")},n.createElement(c.L,{className:"text-gray-400 dark:text-gray-500"}))),n.createElement("span",{className:(0,a.Z)("text-xs content-md:text-base content-4xl:text-xl","text-refine-link-light dark:text-refine-link-dark","underline","mr-8")},r.title))))}}}]);