"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6208,98575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={},u=void 0,s={unversionedId:"partials/tutorial/headless-layout",id:"partials/tutorial/headless-layout",title:"headless-layout",description:"",source:"@site/docs/partials/tutorial/headless-layout.md",sourceDirName:"partials/tutorial",slug:"/partials/tutorial/headless-layout",permalink:"/docs/partials/tutorial/headless-layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/partials/tutorial/headless-layout.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1707218676,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{}},d={},c=[],p={toc:c};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},'body {\n    margin: 0px;\n}\n\ntable {\n    border-spacing: 0;\n    border: 1px solid black;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable tr:last-child td {\n    border-bottom: 0;\n}\n\ntable th,\ntd {\n    margin: 0;\n    padding: 0.5rem;\n    border-bottom: 1px solid black;\n    border-right: 1px solid black;\n}\n\ntable th:last-child,\ntd:last-child {\n    border-right: 0;\n}\n\n.layout {\n    display: flex;\n    gap: 16px;\n}\n\n@media screen and (max-width: 751px) {\n    .layout {\n        display: block;\n    }\n}\n\n.layout .content {\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.breadcrumb {\n    display: flex;\n    gap: 24px;\n    list-style-type: "/  ";\n    padding: 8px 16px;\n    border-bottom: 1px solid lightgray;\n}\n\n.breadcrumb a {\n    color: blue;\n    text-decoration: none;\n}\n\n.menu {\n    flex-shrink: 0;\n    padding: 8px 16px;\n    border-right: 1px solid lightgray;\n}\n\n.menu a {\n    color: black;\n}\n\n.menu .active {\n    font-weight: bold;\n}\n\n@media screen and (max-width: 751px) {\n    .menu {\n        border-right: none;\n        border-bottom: 1px solid lightgray;\n    }\n}\n\n.menu ul {\n    padding-left: 16px;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import { PropsWithChildren } from "react";\nimport { useMenu, useBreadcrumb } from "@refinedev/core";\nimport { NavLink, Link } from "react-router-dom";\n\nconst Breadcrumb = () => {\n    const { breadcrumbs } = useBreadcrumb();\n\n    return (\n        <ul className="breadcrumb">\n            {breadcrumbs.map((breadcrumb) => (\n                <li key={`breadcrumb-${breadcrumb.label}`}>\n                    {breadcrumb.href ? (\n                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>\n                    ) : (\n                        <span>{breadcrumb.label}</span>\n                    )}\n                </li>\n            ))}\n        </ul>\n    );\n};\n\nconst Menu = () => {\n    const { menuItems } = useMenu();\n\n    return (\n        <nav className="menu">\n            <ul>\n                {menuItems.map((item) => (\n                    <li key={item.key}>\n                        <NavLink to={item.route ?? "/"}>{item.label}</NavLink>\n                    </li>\n                ))}\n            </ul>\n        </nav>\n    );\n};\n\nconst Layout: React.FC<PropsWithChildren> = ({ children }) => {\n    return (\n        <div className="layout">\n            <Menu />\n            <div className="content">\n                <Breadcrumb />\n                <div>{children}</div>\n            </div>\n        </div>\n    );\n};\n')))}m.isMDXComponent=!0},48377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>p});n(67294);var r=n(3905),a=n(70151);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters",next:"tutorial/understanding-authprovider/index"}},s=void 0,d={unversionedId:"tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",id:"tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer and wrapped them with a `` component.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/layout-menu-breadcrumb.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",permalink:"/docs/tutorial/adding-crud-pages/headless/layout-menu-breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/layout-menu-breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1707218676,formattedLastUpdatedAt:"Feb 6, 2024",frontMatter:{id:"layout-menu-breadcrumb",title:"7. Layout, Menu and Breadcrumb",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters",next:"tutorial/understanding-authprovider/index"}}},c={},p=[{value:"Layout",id:"layout",level:2},{value:"Menu",id:"menu",level:2},{value:"Breadcrumb",id:"breadcrumb",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},b=m("Checklist"),f=m("ChecklistItem"),h={toc:p};function y(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.default,{mdxType:"SharedComponents"}),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/headless/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer and wrapped them with a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Layout>")," component."),(0,r.kt)("p",null,"This component is provided when you create a new application using ",(0,r.kt)("inlineCode",{parentName:"p"},"create-refine-app")," to help you get started quickly by providing simple implementations of ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," components using Refine's hooks, ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-menu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-breadcrumb"},(0,r.kt)("inlineCode",{parentName:"a"},"useBreadcrumb")),"."),(0,r.kt)("p",null,"Here is the preview for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," components:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, { NavigateToResource, UnsavedChangesNotifier } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Refine\n        routerProvider={routerBindings}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "blog_posts",\n            list: "/blog-posts",\n            show: "/blog-posts/show/:id",\n            create: "/blog-posts/create",\n            edit: "/blog-posts/edit/:id",\n          },\n        ]}\n        options={{\n          syncWithLocation: true,\n          warnWhenUnsavedChanges: true,\n        }}\n      >\n        <Routes>\n          <Route\n            element={\n              <Layout>\n                <Outlet />\n              </Layout>\n            }\n          >\n            <Route index element={<NavigateToResource resource="blog_posts" />} />\n\n            <Route path="/blog-posts">\n              <Route index element={<HeadlessInferencer />} />\n              <Route path="show/:id" element={<HeadlessInferencer />} />\n              <Route path="edit/:id" element={<HeadlessInferencer />} />\n              <Route path="create" element={<HeadlessInferencer />} />\n            </Route>\n\n            <Route path="*" element={<div>Error!</div>} />\n          </Route>\n        </Routes>\n\n        <UnsavedChangesNotifier />\n      </Refine>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("p",null,"When you create a new application with the Refine, it creates a default layout under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/layout.tsx")," file and it looks like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/layout.tsx"',title:'"src/components/layout.tsx"'},'import { PropsWithChildren } from "react";\n\nimport { Menu } from "../menu";\nimport { Breadcrumb } from "../breadcrumb";\n\nexport const Layout: React.FC<PropsWithChildren> = ({ children }) => {\n  return (\n    <div className="layout">\n      <Menu />\n      <div className="content">\n        <Breadcrumb />\n        <div>{children}</div>\n      </div>\n    </div>\n  );\n};\n')),(0,r.kt)("p",null,"It has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component and it renders the children. You can completely customize this component to your needs."),(0,r.kt)("h2",{id:"menu"},"Menu"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Menu")," component is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/menu.tsx")," file and it looks like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/menu.tsx"',title:'"src/components/menu.tsx"'},'import { useMenu } from "@refinedev/core";\nimport { NavLink } from "react-router-dom";\n\nexport const Menu = () => {\n  const { menuItems } = useMenu();\n\n  return (\n    <nav className="menu">\n      <ul>\n        {menuItems.map((item) => (\n          <li key={item.key}>\n            <NavLink to={item.route ?? "/"}>{item.label}</NavLink>\n          </li>\n        ))}\n      </ul>\n    </nav>\n  );\n};\n')),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to get the menu items and renders them as a list. Also, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"NavLink")," component from the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," package to render the links."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-menu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu")," documentation ","\u2192"))),(0,r.kt)("h2",{id:"breadcrumb"},"Breadcrumb"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/components/breadcrumb.tsx")," file and it looks like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/breadcrumb.tsx"',title:'"src/components/breadcrumb.tsx"'},'import { useBreadcrumb } from "@refinedev/core";\nimport { Link } from "react-router-dom";\n\nexport const Breadcrumb = () => {\n  const { breadcrumbs } = useBreadcrumb();\n\n  return (\n    <ul className="breadcrumb">\n      {breadcrumbs.map((breadcrumb) => (\n        <li key={`breadcrumb-${breadcrumb.label}`}>\n          {breadcrumb.href ? <Link to={breadcrumb.href}>{breadcrumb.label}</Link> : <span>{breadcrumb.label}</span>}\n        </li>\n      ))}\n    </ul>\n  );\n};\n')),(0,r.kt)("p",null,"It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useBreadcrumb")," hook to get the breadcrumb items and renders them as a list. Also, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," component from the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router-dom")," package to render the links."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/utilities/use-breadcrumb"},(0,r.kt)("inlineCode",{parentName:"a"},"useBreadcrumb")," documentation ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(b,{mdxType:"Checklist"},(0,r.kt)(f,{id:"layout-menu-breadcrumb",mdxType:"ChecklistItem"},"I have learned about the Layout, Menu and Breadcrumb components."),(0,r.kt)(f,{id:"layout-menu-breadcrumb",mdxType:"ChecklistItem"},"I understood the usage of `useMenu` and `useBreadcrumb` hooks.")))}y.isMDXComponent=!0}}]);