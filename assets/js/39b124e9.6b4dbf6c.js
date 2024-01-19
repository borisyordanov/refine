"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45841],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>g});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(r),g=o,c=h["".concat(p,".").concat(g)]||h[g]||u[g]||a;return r?t.createElement(c,i(i({ref:n},d),{},{components:r})):t.createElement(c,i({ref:n},d))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},56001:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});r(67294);var t=r(3905);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"packages/core/src/components/pages/auth/index.tsx"},p=void 0,l={unversionedId:"api-reference/core/components/auth-page",id:"version-3.xx.xx/api-reference/core/components/auth-page",title:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/auth-page.md",sourceDirName:"api-reference/core/components",slug:"/api-reference/core/components/auth-page",permalink:"/docs/3.xx.xx/api-reference/core/components/auth-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/auth-page.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ivan Vinokurov",lastUpdatedAt:1705660236,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{id:"auth-page",title:"<AuthPage>",sidebar_label:"<AuthPage>",description:"<AuthPage> component from refine is an authentication page that can be used to login, register, forgot password, and update password.",source:"packages/core/src/components/pages/auth/index.tsx"},sidebar:"someSidebar",previous:{title:"useMenu",permalink:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},next:{title:"<Refine>",permalink:"/docs/3.xx.xx/api-reference/core/components/refine-config"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Types",id:"types",level:2},{value:"Login",id:"login",level:3},{value:"Register",id:"register",level:3},{value:"ForgotPassword",id:"forgotpassword",level:3},{value:"UpdatePassword",id:"updatepassword",level:3},{value:"Props",id:"props",level:2},{value:"<code>providers</code>",id:"providers",level:3},{value:"<code>rememberMe</code>",id:"rememberme",level:3},{value:"<code>loginLink</code>",id:"loginlink",level:3},{value:"<code>registerLink</code>",id:"registerlink",level:3},{value:"<code>forgotPasswordLink</code>",id:"forgotpasswordlink",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>formProps</code>",id:"formprops",level:3},{value:"<code>renderContent</code>",id:"rendercontent",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Interface",id:"interface",level:3}],h=(g="PropsTable",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});var g;const c={toc:u};function m(e){var{components:n}=e,r=i(e,["components"]);return(0,t.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},c,r),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component from ",(0,t.kt)("strong",{parentName:"p"},"refine")," contains authentication pages that can be used to login, register, forgot password, and update password."),(0,t.kt)("p",null,"Before using ",(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component you need to add ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider")," that will be used to handle authentication."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n  background-color: #f5f5f5;\n}\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { useNavigation: useNavigationShared } = RefineCore;\n\nwindow.__refineAuthStatus = false;\n\nconst authProvider = {\n  login: () => {\n    window.__refineAuthStatus = true;\n    return Promise.resolve();\n  },\n  register: () => Promise.resolve(),\n  forgotPassword: () => Promise.resolve(),\n  updatePassword: () => Promise.resolve(),\n  logout: () => {\n    window.__refineAuthStatus = false;\n  },\n  checkAuth: () =>\n    window.__refineAuthStatus ? Promise.resolve() : Promise.reject(),\n  checkError: () => Promise.resolve(),\n  getPermissions: () => Promise.resolve(),\n  getUserIdentity: () => Promise.resolve(),\n};\n\nconst DashboardPage = () => {\n  const { replace } = useNavigationShared();\n  return (\n    <div>\n      <h1>Dashboard Page</h1>\n      <button\n        onClick={() => {\n          replace("/login");\n        }}\n      >\n        Logout\n      </button>\n    </div>\n  );\n};\n\nconst Wrapper = (children) => {\n  return (\n    <div\n      style={{\n        display: "flex",\n        justifyContent: "center",\n      }}\n    >\n      <div\n        style={{\n          width: "400px",\n        }}\n      >\n        {children}\n      </div>\n    </div>\n  );\n};\n')),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component can be used like this:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll  previewHeight=333px url=http://localhost:3000/login",live:!0,disableScroll:!0,"":!0,previewHeight:"333px",url:"http://localhost:3000/login"},'setInitialRoutes(["/login"]);\n\n// visible-block-start\nimport { Refine, AuthPage, useNavigation } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          { path: "/login", element: <AuthPage type="login" /> },\n          {\n            path: "/register",\n            element: <AuthPage type="register" />,\n          },\n          {\n            path: "/forgot-password",\n            element: <AuthPage type="forgotPassword" />,\n          },\n        ],\n      }}\n      authProvider={authProvider}\n      // highlight-next-line\n      LoginPage={AuthPage}\n      DashboardPage={DashboardPage}\n      resources={[\n        {\n          name: "posts",\n        },\n      ]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h2",{id:"types"},"Types"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component has the following types:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#login"},(0,t.kt)("inlineCode",{parentName:"a"},"login"))," - a type of login page and default type."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#register"},(0,t.kt)("inlineCode",{parentName:"a"},"register"))," - a type of registration page."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#forgotpassword"},(0,t.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," - a type of forgot password page."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#updatepassword"},(0,t.kt)("inlineCode",{parentName:"a"},"updatePassword"))," - a type of update password page.")),(0,t.kt)("h3",{id:"login"},"Login"),(0,t.kt)("p",null,"You can use the following props for the ",(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,t.kt)("inlineCode",{parentName:"p"},'"login"'),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll hideCode url=http://localhost:3000/login previewHeight=390px",live:!0,disableScroll:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"390px"},'setInitialRoutes(["/login"]);\nconst { useNavigation, useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { Refine, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    // highlight-next-line\n                    { path: "/login", element: <AuthPage /> }\n                ],\n            }}\n            // highlight-next-line\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            resources={[\n                name: "posts",\n            ]}\n        />\n    );\n};\n// visible-block-end\nrender(<App/>);\n')),(0,t.kt)("p",null,"After form submission, the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/#login-"},(0,t.kt)("inlineCode",{parentName:"a"},"login"))," method of the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/"},(0,t.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  // --\n  login: async ({ email, password, remember, providerName }) => {\n    // You can handle the login process according to your needs.\n\n    // If the process is successful.\n    return Promise.resolve();\n\n    return Promise.reject();\n  },\n  // --\n};\n')),(0,t.kt)("h3",{id:"register"},"Register"),(0,t.kt)("p",null,"The register page will be used to register new users. You can use the following props for the ",(0,t.kt)("inlineCode",{parentName:"p"},"<AuthPage>")," component when the type is ",(0,t.kt)("inlineCode",{parentName:"p"},'"register"'),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll hideCode url=http://localhost:3000/login previewHeight=390px",live:!0,disableScroll:!0,hideCode:!0,url:"http://localhost:3000/login",previewHeight:"390px"},'setInitialRoutes(["/register"]);\nconst { useNavigation, useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { Refine, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n    return (\n        <Refine\n            authProvider={authProvider}\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    { path: "/login", element: <AuthPage /> },\n                    // highlight-next-line\n                    { path: "/register", element: <AuthPage type="register" /> }\n                ],\n            }}\n            // highlight-next-line\n            LoginPage={AuthPage}\n            DashboardPage={DashboardPage}\n            resources={[\n                name: "posts",\n            ]}\n        />\n    );\n};\n// visible-block-end\nrender(<App/>);\n')),(0,t.kt)("p",null,"After form submission, the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/#register"},(0,t.kt)("inlineCode",{parentName:"a"},"register"))," method of the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/"},(0,t.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  // --\n  register: async ({ email, password, providerName }) => {\n    // You can handle the register process according to your needs.\n\n    // If the process is successful.\n    return Promise.resolve();\n\n    return Promise.reject();\n  },\n  // --\n};\n')),(0,t.kt)("h3",{id:"forgotpassword"},"ForgotPassword"),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"forgotPassword")," type is a page that allows users to reset their passwords. You can use this page to reset your password."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/forgot-password",live:!0,url:"http://localhost:3000/forgot-password"},'setInitialRoutes(["/forgot-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          // highlight-start\n          {\n            path: "/forgot-password",\n            element: <AuthPage type="forgotPassword" />,\n          },\n          // highlight-end\n        ],\n      }}\n      LoginPage={AuthPage}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("p",null,"After form submission, the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/#forgotpassword"},(0,t.kt)("inlineCode",{parentName:"a"},"forgotPassword"))," method of the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/"},(0,t.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  // --\n  forgotPassword: async ({ email }) => {\n    // You can handle the reset password process according to your needs.\n\n    // If process is successful.\n    return Promise.resolve();\n\n    return Promise.reject();\n  },\n  // --\n};\n')),(0,t.kt)("h3",{id:"updatepassword"},"UpdatePassword"),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"updatePassword")," type is the page used to update the password of the user."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/update-password",live:!0,url:"http://localhost:3000/update-password"},'setInitialRoutes(["/update-password"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          // highlight-start\n          {\n            path: "/update-password",\n            element: <AuthPage type="updatePassword" />,\n          },\n          // highlight-end\n        ],\n      }}\n      LoginPage={AuthPage}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("p",null,"After form submission, the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/#updatepassword"},(0,t.kt)("inlineCode",{parentName:"a"},"updatePassword"))," method of the ",(0,t.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider/"},(0,t.kt)("inlineCode",{parentName:"a"},"authProvider"))," will be called with the form values."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/authProvider.ts"',title:'"src/authProvider.ts"'},'import { AuthProvider } from "@pankod/refine-core";\n\nconst authProvider: AuthProvider = {\n  // --\n  updatePassword: async ({ password, confirmPassword }) => {\n    // You can handle the update password process according to your needs.\n\n    // If the process is successful.\n    return Promise.resolve();\n\n    return Promise.reject();\n  },\n  // --\n};\n')),(0,t.kt)("h2",{id:"props"},"Props"),(0,t.kt)("h3",{id:"providers"},(0,t.kt)("inlineCode",{parentName:"h3"},"providers")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("inlineCode",{parentName:"p"},"providers")," property is only available for types ",(0,t.kt)("inlineCode",{parentName:"p"},"login")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"register"),".")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"providers")," property defines the list of providers used to handle login authentication. ",(0,t.kt)("inlineCode",{parentName:"p"},"providers")," accepts an array of ",(0,t.kt)("inlineCode",{parentName:"p"},"Provider")," type. Check out the ",(0,t.kt)("a",{parentName:"p",href:"#interface"},"Interface")," section for more information."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=560px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"560px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport {\n  Refine,\n  useRouterContext,\n  useNavigation,\n  AuthPage,\n} from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst LoginPage = () => {\n  return (\n    <AuthPage\n      providers={[\n        {\n          name: "github",\n          icon: (\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />\n            </svg>\n          ),\n          label: "Sign in with GitHub",\n        },\n        {\n          name: "google",\n          icon: (\n            <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="24"\n              height="24"\n              viewBox="0 0 24 24"\n            >\n              <path\n                fill="#4285F4"\n                d="m23.7 12.3-.1-2.3H12.3v4.5h6.4a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.2-2.1 3.5-5.2 3.5-8.8Z"\n              />\n              <path\n                fill="#34A853"\n                d="M12.3 24c3.2 0 6-1 7.9-3l-3.9-3a7.2 7.2 0 0 1-10.8-3.7h-4v3c2 4 6 6.7 10.8 6.7Z"\n              />\n              <path\n                fill="#FBBC05"\n                d="M5.5 14.3a7 7 0 0 1 0-4.6v-3h-4a11.9 11.9 0 0 0 0 10.7l4-3.1Z"\n              />\n              <path\n                fill="#EA4335"\n                d="M12.3 4.8c1.7 0 3.3.6 4.6 1.8L20.3 3A12 12 0 0 0 1.6 6.6l4 3.1c.9-2.8 3.5-5 6.7-5Z"\n              />\n            </svg>\n          ),\n          label: "Sign in with Google",\n        },\n      ]}\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={routerProvider}\n      // highlight-start\n      LoginPage={LoginPage}\n      // highlight-end\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"rememberme"},(0,t.kt)("inlineCode",{parentName:"h3"},"rememberMe")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("inlineCode",{parentName:"p"},"rememberMe")," property is only available for type ",(0,t.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"rememberMe")," property defines to render your own remember me component or you can pass ",(0,t.kt)("inlineCode",{parentName:"p"},"false")," to don't render it."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      authProvider={authProvider}\n      // highlight-start\n      LoginPage={() => (\n        <AuthPage\n          rememberMe={\n            <div\n              style={{\n                border: "1px dashed cornflowerblue",\n                padding: 3,\n              }}\n            >\n              <input name="CustomRememberMe" type="checkbox" /> Custom remember\n              me\n            </div>\n          }\n        />\n      )}\n      // highlight-end\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"loginlink"},(0,t.kt)("inlineCode",{parentName:"h3"},"loginLink")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("inlineCode",{parentName:"p"},"loginLink")," property is only available for types ",(0,t.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"forgotPassword"),".")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"loginLink")," property defines the link to the login page and also you can give a node to render. The default value is ",(0,t.kt)("inlineCode",{parentName:"p"},'"/login"'),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/register hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/register",hideCode:!0},'setInitialRoutes(["/register"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useRouterContext, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n  const { Link } = useRouterContext();\n\n  return (\n    <AuthPage\n      {...props}\n      // highlight-start\n      loginLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            padding: 3,\n          }}\n        >\n          <Link to="/login">Login</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      // highlight-start\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          {\n            path: "/register",\n            element: <Auth type="register" />,\n          },\n        ],\n      }}\n      // highlight-end\n      LoginPage={Auth}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"registerlink"},(0,t.kt)("inlineCode",{parentName:"h3"},"registerLink")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("inlineCode",{parentName:"p"},"registerLink")," property is only available for type ",(0,t.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"registerLink")," property defines the link to the registration page and also you can give a node to render. The default value is ",(0,t.kt)("inlineCode",{parentName:"p"},'"/register"'),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useRouterContext, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n  const { Link } = useRouterContext();\n\n  return (\n    <AuthPage\n      {...props}\n      // highlight-start\n      registerLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/register">Register</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={{\n        ...routerProvider,\n        routes: [{ path: "/register", element: <Auth type="register" /> }],\n      }}\n      // highlight-next-line\n      LoginPage={Auth}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"forgotpasswordlink"},(0,t.kt)("inlineCode",{parentName:"h3"},"forgotPasswordLink")),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property is only available for type ",(0,t.kt)("inlineCode",{parentName:"p"},"login"),".")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"forgotPasswordLink")," property defines the link to the forgot password page and also you can give a node to render. The default value is ",(0,t.kt)("inlineCode",{parentName:"p"},'"/forgot-password"'),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useRouterContext, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst Auth = (props) => {\n  const { Link } = useRouterContext();\n\n  return (\n    <AuthPage\n      {...props}\n      // highlight-start\n      forgotPasswordLink={\n        <div\n          style={{\n            border: "1px dashed cornflowerblue",\n            marginTop: 5,\n            padding: 5,\n          }}\n        >\n          <Link to="/forgot-password">Forgot Password</Link>\n        </div>\n      }\n      // highlight-end\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={{\n        ...routerProvider,\n        routes: [\n          {\n            path: "/forgot-password",\n            element: <Auth type="forgotPassword" />,\n          },\n        ],\n      }}\n      // highlight-next-line\n      LoginPage={Auth}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"wrapperprops"},(0,t.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"wrapperProps")," uses for passing props to the wrapper component. In the example below you can see that the background color is changed with ",(0,t.kt)("inlineCode",{parentName:"p"},"wrapperProps")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      authProvider={authProvider}\n      routerProvider={routerProvider}\n      LoginPage={() => (\n        <AuthPage\n          // highlight-start\n          wrapperProps={{\n            style: {\n              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",\n              position: "absolute",\n              top: "0px",\n              right: "0px",\n              bottom: "0px",\n              left: "0px",\n            },\n          }}\n          // highlight-end\n        />\n      )}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"contentprops"},(0,t.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"contentProps")," uses for passing props to the content component which is the card component. In the example below you can see that the title, header, and content styles are changed with ",(0,t.kt)("inlineCode",{parentName:"p"},"contentProps"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      authProvider={authProvider}\n      LoginPage={() => (\n        <AuthPage\n          // highlight-start\n          contentProps={{\n            style: {\n              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",\n            },\n          }}\n          // highlight-end\n        />\n      )}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"formprops"},(0,t.kt)("inlineCode",{parentName:"h3"},"formProps")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"formProps")," uses for passing props to the form component."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useNavigation, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      authProvider={authProvider}\n      LoginPage={() => (\n        <AuthPage\n          // highlight-start\n          formProps={{\n            onSubmit: (e: any) => {\n              e.preventDefault();\n\n              const email = e.target.email.value;\n              const password = e.target.password.value;\n\n              alert(\n                JSON.stringify({\n                  email,\n                  password,\n                }),\n              );\n            },\n          }}\n          // highlight-end\n        />\n      )}\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h3",{id:"rendercontent"},(0,t.kt)("inlineCode",{parentName:"h3"},"renderContent")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"renderContent")," uses to render the form content. You can use this property to render your own content or ",(0,t.kt)("inlineCode",{parentName:"p"},"renderContent")," gives you default content you can use to add some extra elements to the content."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewHeight=500px url=http://localhost:3000/login hideCode",live:!0,previewHeight:"500px",url:"http://localhost:3000/login",hideCode:!0},'setInitialRoutes(["/login"]);\nsetRefineProps({ Sider: () => null });\n\n// visible-block-start\nimport { Refine, useRouterContext, AuthPage } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport { authProvider } from "./authProvider";\nimport { DashboardPage } from "./pages/dashboard";\n\nconst App = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      authProvider={authProvider}\n      // highlight-start\n      LoginPage={() => (\n        <AuthPage\n          contentProps={{\n            style: {\n              width: "400px",\n            },\n          }}\n          renderContent={(content: React.ReactNode) => {\n            return (\n              <div\n                style={{\n                  display: "flex",\n                  flexDirection: "column",\n                  justifyContent: "center",\n                  alignItems: "center",\n                }}\n              >\n                <h1>Extra Header</h1>\n                {content}\n                <h2>Extra Footer</h2>\n              </div>\n            );\n          }}\n        />\n      )}\n      // highlight-end\n      DashboardPage={DashboardPage}\n      resources={[{ name: "posts" }]}\n    />\n  );\n};\n// visible-block-end\nrender(<App />);\n')),(0,t.kt)("h2",{id:"api-reference"},"API Reference"),(0,t.kt)("h3",{id:"properties"},"Properties"),(0,t.kt)(h,{module:"@pankod/refine-core/AuthPage",mdxType:"PropsTable"}),(0,t.kt)("h3",{id:"interface"},"Interface"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-tsx"},"interface OAuthProvider {\n  name: string;\n  icon?: React.ReactNode;\n  label?: string;\n}\n")))}m.isMDXComponent=!0}}]);