"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48908:(e,t,r)=>{r.d(t,{ZP:()=>s});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={toc:[]};function s(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can use the following auth provider examples as a starting point for your own auth provider or you can use them as it is. Check the links below to see the details of each example."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/authentication/headless/"},"Basic")," - A basic auth provider example."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/enterprise-edition/okta"},"Okta")," - Okta, the enterprise-grade identity management service."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/keycloak"},"Keycloak")," - An auth provider example with Keycloak."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/auth0"},"Auth0")," - An auth provider example with Auth0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/google-auth"},"Google Auth")," - An auth provider example with Google Auth."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/otpLogin"},"OTP Login")," - An auth provider example with OTP Login."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/appwrite"},"Appwrite")," - An auth provider example with Appwrite."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/supabase"},"Supabase")," - An auth provider example with Supabase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-v4"},"Strapi")," - An auth provider example with Strapi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/strapi-graphql"},"Strapi Graphql")," - An auth provider example with Strapi Graphql."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/data-provider/nhost"},"Nhost")," - An auth provider example with Nhost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/next-js/"},"Basic with Nextjs")," - A basic auth provider example with Nextjs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/remix/remix-headless"},"Basic with Remix")," - A basic auth provider example with Remix."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/examples/auth-provider/kinde"},"Kinde")," - An auth provider example with Kinde.")))}s.isMDXComponent=!0},78543:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>d});r(67294);var n=r(3905),a=r(48908);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}},u=void 0,l={unversionedId:"tutorial/understanding-authprovider/index",id:"tutorial/understanding-authprovider/index",title:"1. Auth Provider",description:"What is auth provider?",source:"@site/docs/tutorial/5-understanding-authprovider/0-intro.md",sourceDirName:"tutorial/5-understanding-authprovider",slug:"/tutorial/understanding-authprovider/index",permalink:"/docs/tutorial/understanding-authprovider/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/5-understanding-authprovider/0-intro.md",tags:[],version:"current",lastUpdatedBy:"Ivan Vinokurov",lastUpdatedAt:1705660236,formattedLastUpdatedAt:"Jan 19, 2024",sidebarPosition:0,frontMatter:{id:"index",title:"1. Auth Provider",tutorial:{order:0,prev:!1,next:"tutorial/understanding-authprovider/create-authprovider"}}},c={},d=[{value:"What is auth provider?",id:"what-is-auth-provider",level:2},{value:"Using Auth Providers in Refine",id:"using-auth-providers-in-refine",level:2},{value:"How are auth provider methods used in the app?",id:"how-are-auth-provider-methods-used-in-the-app",level:2},{value:"Auth Provider Examples",id:"auth-provider-examples",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=h("Checklist"),f=h("ChecklistItem"),v={toc:d};function y(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},v,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-auth-provider"},"What is auth provider?"),(0,n.kt)("p",null,"Auth provider is an object that contains methods to handle authentication and access control in your app by having Refine consume them. These methods expect to return a promise, so they can be used with async methods."),(0,n.kt)("p",null,"You can use any third-party authentication service like Auth0, Okta, etc. or your own custom methods while creating an auth provider from scratch, which we will explore in the next section."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Refine does offer built-in examples for auth providers that you can use as a starting point for your own auth providers as well."),(0,n.kt)("p",{parentName:"admonition"},"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"#auth-provider-examples"},"Auth Provider Examples ","\u2192"))),(0,n.kt)("p",null,"The typical auth provider has the following methods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  // required methods\n  login: async (params: any) => ({}),\n  check: async (params: any) => ({}),\n  logout: async (params: any) => ({}),\n  onError: async (params: any) => ({}),\n  // optional methods\n  register: async (params: any) => ({}),\n  forgotPassword: async (params: any) => ({}),\n  updatePassword: async (params: any) => ({}),\n  getPermissions: async (params: any) => ({}),\n  getIdentity: async (params?: any) => ({}),\n};\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information about these methods and how Refine hooks use them, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},"Auth Provider documentation","\u2192"))),(0,n.kt)("h2",{id:"using-auth-providers-in-refine"},"Using Auth Providers in Refine"),(0,n.kt)("p",null,"When creating a new auth provider, you need to pass it to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component as a prop for authentication:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'// ---\nimport { AuthProvider, Refine } from "@refinedev/core";\n\n// It is a mock auth provider.\nconst authProvider: AuthProvider = {\n  // required methods\n  login: async (params: any) => ({}),\n  check: async (params: any) => ({}),\n  logout: async (params: any) => ({}),\n  onError: async (params: any) => ({}),\n};\n\n<Refine\n  // ---\n  authProvider={authProvider}\n/>;\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,n.kt)("inlineCode",{parentName:"a"},"<Refine/>")," documentation","\u2192"))),(0,n.kt)("h2",{id:"how-are-auth-provider-methods-used-in-the-app"},"How are auth provider methods used in the app?"),(0,n.kt)("p",null,"Each method of auth provider corresponds to a hook in Refine that you can use these hooks to perform auth operations in your app."),(0,n.kt)("p",null,"For example, to show you how relationship between auth provider methods and hooks, here is how you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook to perform a login operation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\ntype LoginVariables = {\n  email: string;\n  password: string;\n};\n\nconst { mutate } = useLogin<LoginVariables>();\n\nconst handleLogin = async (values) => {\n  await mutate(values);\n};\n')),(0,n.kt)("p",null,"As you can see, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogin")," hook returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," function. When you call this function, it calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"login")," method of auth provider like the below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { AuthProvider } from "@refinedev/core";\n\nconst authProvider: AuthProvider = {\n  login: ({ email, password }) => {\n    const response = await axios.post("/api/login", { email, password });\n\n    if (response.status === 200) {\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    }\n\n    return {\n      success: false,\n      error: {\n        message: "Invalid credentials",\n        name: "Invalid credentials",\n      },\n    };\n  },\n  // ---\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All auth hooks are identical in usage")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For more information about each hook, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authentication/hooks/use-is-authenticated"},"Auth Hooks documentation","\u2192"))),(0,n.kt)("h2",{id:"auth-provider-examples"},"Auth Provider Examples"),(0,n.kt)(a.ZP,{mdxType:"AuthProviderExamplesLinks"}),(0,n.kt)("br",null),(0,n.kt)(m,{mdxType:"Checklist"},(0,n.kt)(f,{id:"auth-provider-intro",mdxType:"ChecklistItem"},"I understood what is auth provider and how it works."),(0,n.kt)(f,{id:"auth-provider-intro-2",mdxType:"ChecklistItem"},"I have learned that Refine offers built-in auth provider examples.")))}y.isMDXComponent=!0}}]);