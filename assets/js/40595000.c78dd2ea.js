"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Audit Logs"},u=void 0,c={unversionedId:"guides-concepts/audit-logs/index",id:"guides-concepts/audit-logs/index",title:"Audit Logs",description:"Audit logs are useful tool for web applications, providing a reliable record of user actions and system changes. Capturing and storing these logs ensures transparency and accountability which can be crucial for security, compliance, and debugging purposes.",source:"@site/docs/guides-concepts/audit-logs/index.md",sourceDirName:"guides-concepts/audit-logs",slug:"/guides-concepts/audit-logs/",permalink:"/docs/guides-concepts/audit-logs/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/audit-logs/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1705316024,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{title:"Audit Logs"},sidebar:"mainSidebar",previous:{title:"Realtime",permalink:"/docs/guides-concepts/realtime/"},next:{title:"Multitenancy",permalink:"/docs/guides-concepts/multi-tenancy/"}},l={},p=[{value:"Audit Log Provider",id:"audit-log-provider",level:2},{value:"Hook Integrations",id:"hook-integrations",level:3},{value:"Hooks",id:"hooks",level:3},{value:"useLogList",id:"useloglist",level:4},{value:"useLog",id:"uselog",level:4}],d={toc:p};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Audit logs are useful tool for web applications, providing a reliable record of user actions and system changes. Capturing and storing these logs ensures transparency and accountability which can be crucial for ",(0,r.kt)("strong",{parentName:"p"},"security"),", ",(0,r.kt)("strong",{parentName:"p"},"compliance"),", and debugging purposes."),(0,r.kt)("h2",{id:"audit-log-provider"},"Audit Log Provider"),(0,r.kt)("p",null,"Refine offers ",(0,r.kt)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider"},"Audit Log Provider")," to centralize retrieving audit logs easily across your application."),(0,r.kt)("p",null,"CRUD operations are automatically logged when ",(0,r.kt)("strong",{parentName:"p"},"Audit Log Provider")," is provided, along with the current user information coming from ",(0,r.kt)("a",{parentName:"p",href:"/docs/authentication/hooks/use-get-identity"},"useGetIdentity")," hook."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Audit Log Provider")," is an object that contains ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="audit-log-provider.ts"',title:'"audit-log-provider.ts"'},'import { AuditLogProvider } from "@refinedev/core";\n\nexport const auditLogProvider: AuditLogProvider = {\n  get: async (params) => {\n    const { resource, meta, action, author, metaData } = params;\n\n    const response = await fetch(`https://example.com/api/audit-logs/${resource}/${meta.id}`, {\n      method: "GET",\n    });\n\n    const data = await response.json();\n\n    return data;\n  },\n  // Ideally, audit logs should be created in the backend.\n  // It\'s not reliable source of truth as it can be manipulated by the user.\n  create: async (params) => {\n    const { resource, meta, action, author, data, previousData } = params;\n\n    console.log(resource); // "produts", "posts", etc.\n    console.log(meta); // { id: "1" }, { id: "2" }, etc.\n    console.log(action); // "create", "update", "delete"\n    // author object is `useGetIdentity` hook\'s return value.\n    console.log(author); // { id: "1", name: "John Doe" }\n    console.log(data); // { name: "Product 1", price: 100 }\n    console.log(previousData); // { name: "Product 1", price: 50 }\n\n    await fetch("https://example.com/api/audit-logs", {\n      method: "POST",\n      body: JSON.stringify(params),\n    });\n\n    return { success: true };\n  },\n  update: async (params) => {\n    const { id, name, ...rest } = params;\n    console.log(id); // "1"\n    console.log(name); // "Created Product 1"\n    console.log(rest); // { foo: "bar" }\n\n    await fetch(`https://example.com/api/audit-logs/${id}`, {\n      method: "PATCH",\n      body: JSON.stringify(params),\n    });\n\n    return { success: true };\n  },\n};\n')),(0,r.kt)("p",null,"And can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,r.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport { auditLogProvider } from "./audit-log-provider";\n\nexport const App = () => {\n  return <Refine auditLogProvider={auditLogProvider}>{/* ... */}</Refine>;\n};\n')),(0,r.kt)("h3",{id:"hook-integrations"},"Hook Integrations"),(0,r.kt)("p",null,"Refine's mutation hooks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"useCreate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useCreateMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useUpdateMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," are already integrated with ",(0,r.kt)("strong",{parentName:"p"},"Audit Log Provider"),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider#supported-hooks"},"Supported Hooks")," section for more information."),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("h4",{id:"useloglist"},"useLogList"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/audit-logs/hooks/use-log"},"useLogList")," hook to retrieve audit logs. It uses ",(0,r.kt)("strong",{parentName:"p"},"Audit Log Provider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," method under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogList } from "@refinedev/core";\n\nconst postAuditLogResults = useLogList({\n  resource: "products",\n});\n')),(0,r.kt)("h4",{id:"uselog"},"useLog"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/audit-logs/hooks/use-log"},"useLog")," hook for your custom logging needs. It uses ",(0,r.kt)("strong",{parentName:"p"},"Audit Log Provider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method under the hood."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLog } from "@refinedev/core";\n\nconst { log } = useLog();\nconst { mutate } = log;\n\nmutate({\n  resource: "products",\n  action: "create",\n  author: {\n    username: "admin",\n  },\n  data: {\n    title: "New Product",\n  },\n  meta: {\n    id: 1,\n  },\n});\n')))}g.isMDXComponent=!0}}]);