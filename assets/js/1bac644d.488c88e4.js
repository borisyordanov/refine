"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19004],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,y=d["".concat(c,".").concat(m)]||d[m]||g[m]||o;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>d});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={id:"access-control",title:"Access Control",sidebar_label:"Access Control"},c=void 0,l={unversionedId:"advanced-tutorials/access-control",id:"version-3.xx.xx/advanced-tutorials/access-control",title:"Access Control",description:"Introduction",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/access-control.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/access-control",permalink:"/docs/3.xx.xx/advanced-tutorials/access-control",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/access-control.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1716535331,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"access-control",title:"Access Control",sidebar_label:"Access Control"},sidebar:"someSidebar",previous:{title:"Advanced Tutorials",permalink:"/docs/3.xx.xx/advanced-tutorials"},next:{title:"Auth0 Login",permalink:"/docs/3.xx.xx/advanced-tutorials/auth/auth0"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding Policy and Model",id:"adding-policy-and-model",level:2},{value:"Adding <code>accessControlProvider</code>",id:"adding-accesscontrolprovider",level:2},{value:"Adding Different Roles",id:"adding-different-roles",level:2},{value:"Handling access with params",id:"handling-access-with-params",level:2},{value:"ID Based Access",id:"id-based-access",level:3},{value:"Field Based Access",id:"field-based-access",level:3},{value:"Example",id:"example",level:2},{value:"Casbin",id:"casbin",level:3},{value:"Cerbos",id:"cerbos",level:3}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",n)},m=g("DocThumbsUpDownFeedbackWidget"),y=g("InstallPackagesCommand"),u=g("CodeSandboxExample"),h={toc:d},f="wrapper";function b(e){var{components:n}=e,t=s(e,["components"]);return(0,a.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)(m,{id:"introduction",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Access control is a broad topic where there are lots of advanced solutions that provide a different sets of features. ",(0,a.yg)("strong",{parentName:"p"},"refine")," is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,a.yg)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,a.yg)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos"),", ",(0,a.yg)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"). ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method would be the entry point for those solutions."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},"Refer to the Access Control Provider documentation for detailed information. ","\u2192")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app."),(0,a.yg)("p",null,"An ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," must implement only one async method named ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," to be used to check if the desired access will be granted."),(0,a.yg)("p",null,"We will be using ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://casbin.org/"},"Casbin"))," in this guide for users with different roles who have different access rights for parts of the app.")),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We need to install Casbin."),(0,a.yg)(y,{args:"casbin",mdxType:"InstallPackagesCommand"}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/antd"},(0,a.yg)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package."))),(0,a.yg)("h2",{id:"setup"},"Setup"),(0,a.yg)(m,{id:"setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The app will have three resources: ",(0,a.yg)("strong",{parentName:"p"},"posts"),", ",(0,a.yg)("strong",{parentName:"p"},"users"),", and ",(0,a.yg)("strong",{parentName:"p"},"categories")," with CRUD pages(list, create, edit, and show)."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"#example"},"You can refer to CodeSandbox to see how they are implemented ","\u2192")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"App.tsx")," will look like this before we begin implementing access control:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n  Layout,\n  ReadyPage,\n  useNotificationProvider,\n  ErrorComponent,\n} from "@pankod/refine-antd";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport { UserList, UserCreate, UserEdit, UserShow } from "pages/users";\nimport {\n  CategoryList,\n  CategoryCreate,\n  CategoryEdit,\n  CategoryShow,\n} from "pages/categories";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      routerProvider={routerProvider}\n      dataProvider={dataProvider(API_URL)}\n      Layout={Layout}\n      ReadyPage={ReadyPage}\n      notificationProvider={useNotificationProvider}\n      catchAll={<ErrorComponent />}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          create: PostCreate,\n          edit: PostEdit,\n          show: PostShow,\n          canDelete: true,\n        },\n        {\n          name: "users",\n          list: UserList,\n          create: UserCreate,\n          edit: UserEdit,\n          show: UserShow,\n        },\n        {\n          name: "categories",\n          list: CategoryList,\n          create: CategoryCreate,\n          edit: CategoryEdit,\n          show: CategoryShow,\n        },\n      ]}\n    />\n  );\n};\n\nexport default App;\n'))),(0,a.yg)("h2",{id:"adding-policy-and-model"},"Adding Policy and Model"),(0,a.yg)(m,{id:"adding-policy-and-model",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The way ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://casbin.org/"},"Casbin"))," works is that access rights are checked according to policies that are defined based on a model. You can find further information about how models and policies work ",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/docs/how-it-works"},"here"),"."),(0,a.yg)("p",null,"Let's add a model and a policy for a role ",(0,a.yg)("strong",{parentName:"p"},"editor")," that have ",(0,a.yg)("strong",{parentName:"p"},"list")," access for ",(0,a.yg)("strong",{parentName:"p"},"posts")," resource."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/accessControl.ts"',title:'"src/accessControl.ts"'},'import { newModel, StringAdapter } from "casbin";\n\nexport const model = newModel(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\np = sub, obj, act\n\n[role_definition]\ng = _, _\n\n[policy_effect]\ne = some(where (p.eft == allow))\n\n[matchers]\nm = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n`);\n\nexport const adapter = new MemoryAdapter(`\np, editor, posts, list\n`);\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"You can can find more examples in ",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/docs/supported-models"},"Casbin documentation")," or play with lots of examples in ",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/editor"},"Casbin editor")))),(0,a.yg)("h2",{id:"adding-accesscontrolprovider"},"Adding ",(0,a.yg)("inlineCode",{parentName:"h2"},"accessControlProvider")),(0,a.yg)(m,{id:"adding-accesscontrolprovider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Now we will implement the ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method for ",(0,a.yg)("inlineCode",{parentName:"p"},"accessControlProvider")," to integrate our policy."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n// highlight-next-line\nimport { newEnforcer } from "casbin";\n\n// highlight-next-line\nimport { model, adapter } from "./accessControl";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      // ...\n      // highlight-start\n      accessControlProvider={{\n        can: async ({ resource, action }) => {\n          const enforcer = await newEnforcer(model, adapter);\n          const can = await enforcer.enforce("editor", resource, action);\n\n          return Promise.resolve({ can });\n        },\n      }}\n      // highlight-end\n      // ...\n    />\n  );\n};\n\nexport default App;\n')),(0,a.yg)("p",null,"Whenever a part of the app checks for access control, refine passes ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"action"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"params")," parameters to ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," and then we can use these parameters to integrate our specific access control solution which is ",(0,a.yg)("strong",{parentName:"p"},"Casbin")," in this case."),(0,a.yg)("p",null,"Our model provides that user with role ",(0,a.yg)("strong",{parentName:"p"},"editor")," have access for ",(0,a.yg)("strong",{parentName:"p"},"list")," action on ",(0,a.yg)("strong",{parentName:"p"},"posts")," resource. Even though we have two other resources, since our policy doesn't include them, they will not appear on the sidebar menu. Also in the list page of ",(0,a.yg)("inlineCode",{parentName:"p"},"posts"),", buttons for ",(0,a.yg)("strong",{parentName:"p"},"create"),", ",(0,a.yg)("strong",{parentName:"p"},"edit")," and ",(0,a.yg)("strong",{parentName:"p"},"show")," buttons will be disabled since they are not included in the policy."),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/simple-access.png",alt:"Simple Access Control"}),(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"adding-different-roles"},"Adding Different Roles"),(0,a.yg)(m,{id:"adding-different-roles",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We can provide different access rights to a different types of users for different parts of the app. We can do that by adding policies for the different roles."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\np, admin, users, (list)|(create)\np, admin, categories, (list)|(create)\n\np, editor, posts, (list)|(create)\np, editor, categories, list\n`);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"admin")," will have access to ",(0,a.yg)("strong",{parentName:"li"},"list")," and ",(0,a.yg)("strong",{parentName:"li"},"create")," for every resource"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"editor")," will have access to ",(0,a.yg)("strong",{parentName:"li"},"list")," and ",(0,a.yg)("strong",{parentName:"li"},"create")," for ",(0,a.yg)("strong",{parentName:"li"},"posts")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"editor")," won't have any access for ",(0,a.yg)("strong",{parentName:"li"},"users")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"editor")," will have only ",(0,a.yg)("strong",{parentName:"li"},"list")," access for ",(0,a.yg)("strong",{parentName:"li"},"categories"))),(0,a.yg)("p",null,"We can demonstrate the effect of different roles by changing the ",(0,a.yg)("inlineCode",{parentName:"p"},"role")," dynamically. Let's implement a switch in the header for selecting either ",(0,a.yg)("strong",{parentName:"p"},"admin")," or ",(0,a.yg)("strong",{parentName:"p"},"editor")," role to see the effect on the app."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n// highlight-next-line\nimport { Header } from "components/header";\n\nconst App: React.FC = () => {\n  // highlight-next-line\n  const [role, setRole] = useState("admin");\n\n  return (\n    <Refine\n      // ...\n      accessControlProvider={{\n        can: async ({ resource, action }) => {\n          const enforcer = await newEnforcer(model, adapter);\n          // highlight-next-line\n          const can = await enforcer.enforce(role, resource, action);\n\n          return Promise.resolve({\n            can,\n          });\n        },\n      }}\n      // highlight-next-line\n      Header={() => <Header role={role} setRole={setRole} />}\n      // ...\n    />\n  );\n};\n\nexport default App;\n')),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Header Component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { AntdLayout, Radio } from "@pankod/refine-antd";\n\ninterface HeaderProps {\n  role: string;\n  setRole: React.Dispatch<React.SetStateAction<string>>;\n}\n\nexport const Header: React.FC<HeaderProps> = ({ role, setRole }) => {\n  return (\n    <AntdLayout.Header\n      style={{\n        display: "flex",\n        justifyContent: "center",\n        alignItems: "center",\n        height: "48px",\n        backgroundColor: "#FFF",\n      }}\n    >\n      <Radio.Group\n        value={role}\n        onChange={(event) => setRole(event.target.value)}\n      >\n        <Radio.Button value="admin">Admin</Radio.Button>\n        <Radio.Button value="editor">Editor</Radio.Button>\n      </Radio.Group>\n    </AntdLayout.Header>\n  );\n};\n'))),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/dynamic-role.gif",alt:"Dynamic Role"}),(0,a.yg)("br",null)),(0,a.yg)("h2",{id:"handling-access-with-params"},"Handling access with params"),(0,a.yg)("h3",{id:"id-based-access"},"ID Based Access"),(0,a.yg)(m,{id:"id-based-access",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's update our policies to handle ",(0,a.yg)("strong",{parentName:"p"},"id")," based access control points like ",(0,a.yg)("strong",{parentName:"p"},"edit"),", ",(0,a.yg)("strong",{parentName:"p"},"show")," pages, and ",(0,a.yg)("strong",{parentName:"p"},"delete")," button."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\n// highlight-next-line\np, admin, posts/*, (edit)|(show)|(delete)\n\np, admin, users, (list)|(create)\n// highlight-next-line\np, admin, users/*, (edit)|(show)|(delete)\n\np, admin, categories, (list)|(create)\n// highlight-next-line\np, admin, categories/*, (edit)|(show)|(delete)\n\np, editor, posts, (list)|(create)\n// highlight-next-line\np, editor, posts/*, (edit)|(show)\n\np, editor, categories, list\n`);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"admin")," will have ",(0,a.yg)("strong",{parentName:"li"},"edit"),", ",(0,a.yg)("strong",{parentName:"li"},"show")," and ",(0,a.yg)("strong",{parentName:"li"},"delete")," access for every resource"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"editor")," will have ",(0,a.yg)("strong",{parentName:"li"},"edit")," and ",(0,a.yg)("strong",{parentName:"li"},"show")," access for ",(0,a.yg)("strong",{parentName:"li"},"posts"))),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"*")," is a wildcard. Specific ids can be targeted too. For example If you want ",(0,a.yg)("strong",{parentName:"p"},"editor")," role to have ",(0,a.yg)("strong",{parentName:"p"},"delete")," access for ",(0,a.yg)("strong",{parentName:"p"},"post")," with ",(0,a.yg)("strong",{parentName:"p"},"id")," ",(0,a.yg)("inlineCode",{parentName:"p"},"5"),", you can add this policy:"),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export const adapter = new MemoryAdapter(`\np, editor, posts/5, delete\n`);\n"))),(0,a.yg)("p",null,"We must handle id based access controls in the ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method. ",(0,a.yg)("strong",{parentName:"p"},"id")," parameter will be accessible in ",(0,a.yg)("inlineCode",{parentName:"p"},"params"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n  // ...\n\n  return (\n    <Refine\n      // ...\n      accessControlProvider={{\n        // highlight-start\n        can: async ({ resource, action, params }) => {\n          const enforcer = await newEnforcer(model, adapter);\n          if (action === "delete" || action === "edit" || action === "show") {\n            const can = await enforcer.enforce(\n              role,\n              `${resource}/${params?.id}`,\n              action,\n            );\n            return Promise.resolve({ can });\n          }\n          // highlight-end\n\n          const can = await enforcer.enforce(role, resource, action);\n          return Promise.resolve({ can });\n        },\n      }}\n      // ...\n    />\n  );\n};\n\nexport default App;\n'))),(0,a.yg)("h3",{id:"field-based-access"},"Field Based Access"),(0,a.yg)(m,{id:"field-based-access",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We can also check access control for specific areas in our app like a certain field of a table. This can be achieved by adding a special action for the custom access control point in our policies."),(0,a.yg)("p",null,"For example, we may want to ",(0,a.yg)("strong",{parentName:"p"},"deny")," ",(0,a.yg)("strong",{parentName:"p"},"editor")," roles to access ",(0,a.yg)("strong",{parentName:"p"},"hit")," field in the ",(0,a.yg)("strong",{parentName:"p"},"posts")," resource without denying the ",(0,a.yg)("strong",{parentName:"p"},"admin")," role. This can be done with ",(0,a.yg)("a",{parentName:"p",href:"https://casbin.org/docs/supported-models"},"RBAC with deny-override")," model."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export const model = newModel(`\n[request_definition]\nr = sub, obj, act\n\n[policy_definition]\n// highlight-next-line\np = sub, obj, act, eft\n\n[role_definition]\ng = _, _\n\n[policy_effect]\n// highlight-next-line\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n\n[matchers]\nm = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n`);\n\nexport const adapter = new MemoryAdapter(`\np, admin, posts, (list)|(create)\np, admin, posts/*, (edit)|(show)|(delete)\n// highlight-next-line\np, admin, posts/*, field\n\np, admin, users, (list)|(create)\np, admin, users/*, (edit)|(show)|(delete)\n\np, admin, categories, (list)|(create)\np, admin, categories/*, (edit)|(show)|(delete)\n\np, editor, posts, (list)|(create)\np, editor, posts/*, (edit)|(show)\n// highlight-next-line\np, editor, posts/hit, field, deny\n\np, editor, categories, list\n`);\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"admin")," have ",(0,a.yg)("strong",{parentName:"li"},"field")," access for every field of ",(0,a.yg)("strong",{parentName:"li"},"posts")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"editor")," won't have ",(0,a.yg)("strong",{parentName:"li"},"field")," access for ",(0,a.yg)("strong",{parentName:"li"},"hit")," field of ",(0,a.yg)("strong",{parentName:"li"},"posts"))),(0,a.yg)("p",null,"Then we must handle the ",(0,a.yg)("strong",{parentName:"p"},"field")," action in the ",(0,a.yg)("inlineCode",{parentName:"p"},"can")," method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'// ...\n\nconst App: React.FC = () => {\n  // ...\n\n  return (\n    <Refine\n      // ...\n      accessControlProvider={{\n        can: async ({ resource, action, params }) => {\n          const enforcer = await newEnforcer(model, adapter);\n          if (action === "delete" || action === "edit" || action === "show") {\n            const can = await enforcer.enforce(\n              role,\n              `${resource}/${params?.id}`,\n              action,\n            );\n            return Promise.resolve({ can });\n          }\n\n          // highlight-start\n          if (action === "field") {\n            const can = await enforcer.enforce(\n              role,\n              `${resource}/${params?.field}`,\n              action,\n            );\n            return Promise.resolve({ can });\n          }\n          // highlight-end\n\n          const can = await enforcer.enforce(role, resource, action);\n          return Promise.resolve({ can });\n        },\n      }}\n      // ...\n    />\n  );\n};\n\nexport default App;\n')),(0,a.yg)("p",null,"Then it can be used with ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan"},(0,a.yg)("inlineCode",{parentName:"a"},"useCan"))," in the related area:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n  // ...\n  useCan,\n} from "@pankod/refine-core";\n\nexport const PostList: React.FC = () => {\n  // ...\n\n  // highlight-start\n  const { data: canAccess } = useCan({\n    resource: "posts",\n    action: "field",\n    params: { field: "hit" },\n  });\n  // highlight-end\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        // ... // highlight-start\n        {canAccess?.can && (\n          <Table.Column\n            dataIndex="hit"\n            title="Hit"\n            render={(value: number) => (\n              <NumberField value={value} options={{ notation: "compact" }} />\n            )}\n          />\n        )}\n        // highlight-end // ...\n      </Table>\n    </List>\n  );\n};\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/accessControl/can-access"},(0,a.yg)("inlineCode",{parentName:"a"},"<CanAccess />"))," can be used too to check access control in custom places in your app.")),(0,a.yg)("br",null),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/access-control/access-control.gif",alt:"Full Example Sample"})),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("h3",{id:"casbin"},"Casbin"),(0,a.yg)(m,{id:"casbin",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(u,{path:"access-control-casbin",mdxType:"CodeSandboxExample"})),(0,a.yg)("h3",{id:"cerbos"},"Cerbos"),(0,a.yg)(m,{id:"cerbos",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(u,{path:"access-control-cerbos",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);