"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87816,73648,51267,28886,6505,84124,61743,39362,16981,94600,72219,11657,34038,56419,78800,44514,66895,89276,32609,54990,24466,2085,69228,46847],{58860:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47191:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(37953),o=r(68835);const a={tabItem:"tabItem_gjFz"};function i({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t},e)}},82433:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(37953),o=r(68835),a=r(82204),i=r(83291),l=r(21132);const u={tabList:"tabList_yELn",tabItem:"tabItem_q25w"};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d({className:e,block:t,selectedValue:r,selectValue:i,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),y=e=>{const t=e.currentTarget,n=c.indexOf(t),o=l[n].value;o!==r&&(d(t),i(o))},m=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;var r;t=null!==(r=c[n])&&void 0!==r?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;var n;t=null!==(n=c[r])&&void 0!==n?n:c[c.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:a})=>n.createElement("li",p(s({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>c.push(e),onKeyDown:m,onClick:y},a),{className:(0,o.A)("tabs__item",u.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:r}){const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function m(e){const t=(0,i.u)(e);return n.createElement("div",{className:(0,o.A)("tabs-container",u.tabList)},n.createElement(d,s({},e,t)),n.createElement(y,s({},e,t)))}function g(e){const t=(0,l.A)();return n.createElement(m,s({key:String(t)},e))}},83291:(e,t,r)=>{r.d(t,{u:()=>y});var n=r(37953),o=r(45926),a=r(97817);var i=r(61046);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e){return function(e){var t,r;return null!==(r=null===(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function s(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:c(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,o.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,a.aZ)(i),s=(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[i,r]);return[c,s]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:o}=e,a=s(e),[l,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,y]=d({queryString:r,groupId:o}),[m,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,o]=(0,i.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:o}),f=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:a})?e:null})();(0,n.useLayoutEffect)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),y(e),g(e)}),[y,g,a]),tabValues:a}}},36889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>O,frontMatter:()=>c,metadata:()=>p,toc:()=>y});r(37953);var n=r(58860),o=r(82433),a=r(47191);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}},s=void 0,p={unversionedId:"tutorial/getting-started/mantine/create-project",id:"version-3.xx.xx/tutorial/getting-started/mantine/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/2-create-project.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/mantine/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716209996,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},d={},y=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your website",id:"viewing-a-preview-of-your-website",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},g=m("DocThumbsUpDownFeedbackWidget"),f=m("CreateRefineAppCommand"),b=m("Checklist"),h=m("ChecklistItem"),v={toc:y},w="wrapper";function O(e){var{components:t}=e,r=u(e,["components"]);return(0,n.yg)(w,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},v,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.yg)(g,{id:"launch-the-refine-cli-setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The easiest way to create a new project is to use the ",(0,n.yg)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Launch your terminal and type the following command using your preferred package manager:")),(0,n.yg)(f,{args:"-o refine-mantine tutorial",mdxType:"CreateRefineAppCommand"}),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Confirm ",(0,n.yg)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.yg)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"-o refine-mantine")," flag in the command above tells the CLI to install the project with the ",(0,n.yg)("inlineCode",{parentName:"p"},"refine-mantine")," preset. This preset selects some options for you in accordance with this tutorial."),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,n.yg)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,n.yg)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey.")),(0,n.yg)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.yg)(g,{id:"open-your-project-in-vs-code",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.yg)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.yg)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.yg)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal.")),(0,n.yg)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.yg)(g,{id:"running-the-dev-server",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.yg)("h4",null,"Start the dev server"),(0,n.yg)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.yg)(o.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.yg)(a.A,{value:"npm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.yg)(a.A,{value:"pnpm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.yg)(a.A,{value:"yarn",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.yg)("p",null,"You should see confirmation in the terminal that the ",(0,n.yg)("strong",{parentName:"p"},"refine")," app is running in dev mode.")),(0,n.yg)("h3",{id:"viewing-a-preview-of-your-website"},"Viewing a preview of your website"),(0,n.yg)(g,{id:"viewing-a-preview-of-your-website",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on the ",(0,n.yg)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.yg)("p",{parentName:"li"},"(",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/mantine/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.yg)("p",null,"Here's what you should see:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.yg)(b,{mdxType:"Checklist"},(0,n.yg)(h,{id:"getting-started-mantine",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.yg)(h,{id:"getting-started-mantine-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app."))))}O.isMDXComponent=!0}}]);