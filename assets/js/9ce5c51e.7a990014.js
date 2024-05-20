"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88651],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>u});var i=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,u=d["".concat(s,".").concat(f)]||d[f]||g[f]||r;return t?i.createElement(u,a(a({ref:n},l),{},{components:t})):i.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},14148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>d});t(37953);var i=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p={id:"notification-provider",title:"Notification Provider"},s=void 0,c={unversionedId:"api-reference/core/providers/notification-provider",id:"version-3.xx.xx/api-reference/core/providers/notification-provider",title:"Notification Provider",description:"refine let's you set a notification API by providing the notificationProvider property to the `` component.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/notification-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/notification-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/notification-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/notification-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716209996,formattedLastUpdatedAt:"May 20, 2024",frontMatter:{id:"notification-provider",title:"Notification Provider"},sidebar:"someSidebar",previous:{title:"Live Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/live-provider"},next:{title:"Router Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/router-provider"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:2},{value:"Creating an <code>notificationProvider</code>",id:"creating-an-notificationprovider",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"Example",id:"example",level:2}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.yg)("div",n)},f=g("DocThumbsUpDownFeedbackWidget"),u=g("Tabs"),m=g("TabItem"),y=g("CodeSandboxExample"),h={toc:d},v="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,i.yg)(v,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"refine")," let's you set a notification API by providing the ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,i.yg)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. ",(0,i.yg)("strong",{parentName:"p"},"refine")," uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"},(0,i.yg)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.yg)("p",null,"An ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," must include following methods:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"const notificationProvider = {\n  show: () => {},\n  close: () => {},\n};\n")),(0,i.yg)("p",null,"And these methods types like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)(f,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"To use ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," in refine, we have to pass the notificationProvider to the ",(0,i.yg)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, NotificationProvider } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n//highlight-start\nconst notificationProvider: NotificationProvider = {\n  open: () => {},\n  close: () => {},\n};\n//highlight-end\n\nconst App = () => {\n  return (\n    <Refine\n      //highlight-next-line\n      notificationProvider={useNotificationProvider}\n      routerProvider={routerProvider}\n      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n    />\n  );\n};\n')),(0,i.yg)("p",null,"By default, ",(0,i.yg)("strong",{parentName:"p"},"refine")," doesn't require ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," configuration."),(0,i.yg)("p",null,"If an ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," property is not provided, ",(0,i.yg)("strong",{parentName:"p"},"refine")," will use the default ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider"),". This default ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," lets the app work without an notification.\nIf your app doesn't require ",(0,i.yg)("inlineCode",{parentName:"p"},"notification"),", no further setup is necessary for the app to work.")),(0,i.yg)("h2",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,i.yg)(f,{id:"built-in-notification-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"If you're looking for a complete notification infrastructure, ",(0,i.yg)("strong",{parentName:"p"},"refine")," has out-of-the-box support for the libraries below:"),(0,i.yg)(u,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra"},{label:"Custom",value:"custom"}],mdxType:"Tabs"},(0,i.yg)(m,{value:"custom",mdxType:"TabItem"},(0,i.yg)("p",null,"Create a custom notification provider by following the ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/#creating-an-notificationprovider"},"guide"),".")),(0,i.yg)(m,{value:"antd",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@pankod/refine-antd";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={useNotificationProvider}\n  />\n);\n'))),(0,i.yg)(m,{value:"mui",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  useNotificationProvider,\n  RefineSnackbarProvider,\n} from "@pankod/refine-mui";\n\nreturn (\n  <RefineSnackbarProvider>\n    <Refine\n      //...\n      notificationProvider={useNotificationProvider}\n    />\n  </RefineSnackbarProvider>\n);\n'))),(0,i.yg)(m,{value:"mantine",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  useNotificationProvider,\n  NotificationsProvider,\n} from "@pankod/refine-mantine";\n\nreturn (\n  <NotificationsProvider position="top-right">\n    <Refine\n      //...\n      notificationProvider={useNotificationProvider}\n    />\n  </NotificationsProvider>\n);\n'))),(0,i.yg)(m,{value:"chakra",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { notificationProvider } from "@pankod/refine-chakra";\n\nreturn (\n  <Refine\n    //...\n    notificationProvider={notificationProvider()}\n  />\n);\n'))))),(0,i.yg)("h2",{id:"creating-an-notificationprovider"},"Creating an ",(0,i.yg)("inlineCode",{parentName:"h2"},"notificationProvider")),(0,i.yg)(f,{id:"creating-an-notificationprovider",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,"We will build a simple ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," from scratch to show the logic of how ",(0,i.yg)("inlineCode",{parentName:"p"},"notificationProvider")," methods interact with the app. For this, we will use the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,i.yg)("inlineCode",{parentName:"a"},"react-toastify"))," package, which is very ",(0,i.yg)("strong",{parentName:"p"},"popular")," in the ",(0,i.yg)("strong",{parentName:"p"},"React Ecosystem"),". If you want to use another notification library, you can use the same approach."),(0,i.yg)("p",null,"Before we start, we need set up the ",(0,i.yg)("inlineCode",{parentName:"p"},"react-toastify")," requirements."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\n\n//highlight-start\nimport { ToastContainer } from "react-toastify";\nimport "react-toastify/dist/ReactToastify.css";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            ...\n            //highlight-start\n            Layout={({ children }) => (\n                <div>\n                    {children}\n                    <ToastContainer />\n                </div>\n            )}\n            //highlight-end\n        />\n    );\n};\n\nexport default App;\n\n'))),(0,i.yg)("h3",{id:"open"},(0,i.yg)("inlineCode",{parentName:"h3"},"open")),(0,i.yg)(f,{id:"open",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"refine")," calls this method when it wants to open a notification. It also helps you to get the right notification by sending some parameters to the ",(0,i.yg)("strong",{parentName:"p"},"refine")," open method. For example, ",(0,i.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"description"),", etc..."),(0,i.yg)("p",null,"Here we open a ",(0,i.yg)("strong",{parentName:"p"},"notification")," with ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/fkhadra/react-toastify"},(0,i.yg)("inlineCode",{parentName:"a"},"react-toastify")),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    toast(message, {\n      toastId: key,\n      type,\n    });\n  },\n};\n')),(0,i.yg)("p",null,"In case the notification is called repeatedly with the same ",(0,i.yg)("inlineCode",{parentName:"p"},"key"),", let's update the previous notification instead of creating a new one."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"toast.isActive(key)")," returns ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," if the notification is still active. So we can check if the notification is already active and update it instead of creating a new one."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    //highlight-start\n    if (toast.isActive(key)) {\n      toast.update(key, {\n        render: message,\n        type,\n      });\n    } else {\n      //highlight-end\n      toast(message, {\n        toastId: key,\n        type,\n      });\n    }\n  },\n};\n')),(0,i.yg)("p",null,"Now, let's create a custom notification when the mutation mode is ",(0,i.yg)("inlineCode",{parentName:"p"},"undoable"),". In this case, ",(0,i.yg)("strong",{parentName:"p"},"refine")," sends notification's type as ",(0,i.yg)("inlineCode",{parentName:"p"},"progress")," as well as the ",(0,i.yg)("inlineCode",{parentName:"p"},"cancelMutation")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"undoableTimeout"),"."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"undoableTimeout")," decreases by 1 every second until it reaches 0. When it reaches 0, the notification is closed. ",(0,i.yg)("inlineCode",{parentName:"p"},"open")," method is called again with the same ",(0,i.yg)("inlineCode",{parentName:"p"},"key")," each countdown. So, the notification should be updated with the new ",(0,i.yg)("inlineCode",{parentName:"p"},"undoableTimeout")," value."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  open: ({ message, key, type }) => {\n    //highlight-start\n    if (type === "progress") {\n      if (toast.isActive(key)) {\n        toast.update(key, {\n          progress: undoableTimeout && (undoableTimeout / 10) * 2,\n          render: (\n            <UndoableNotification\n              message={message}\n              cancelMutation={cancelMutation}\n            />\n          ),\n          type: "default",\n        });\n      } else {\n        toast(\n          <UndoableNotification\n            message={message}\n            cancelMutation={cancelMutation}\n          />,\n          {\n            toastId: key,\n            updateId: key,\n            closeOnClick: false,\n            closeButton: false,\n            autoClose: false,\n            progress: undoableTimeout && (undoableTimeout / 10) * 2,\n          },\n        );\n      }\n    } else {\n      //highlight-end\n      if (toast.isActive(key)) {\n        toast.update(key, {\n          render: message,\n          //highlight-start\n          closeButton: true,\n          autoClose: 5000,\n          //highlight-end\n          type,\n        });\n      } else {\n        toast(message, {\n          toastId: key,\n          type,\n        });\n      }\n    }\n  },\n};\n')),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Note"),": We add ",(0,i.yg)("inlineCode",{parentName:"p"},"closeButton")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"autoClose")," for progress notifications are not closable by default. Because, when progress is done, the progress notification to be updated should be closeable.")),(0,i.yg)("details",null,(0,i.yg)("summary",null,"See UndoableNotification Component"),(0,i.yg)("p",null,(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"type UndoableNotification = {\n  message: string;\n  cancelMutation?: () => void;\n  closeToast?: () => void;\n};\n\nexport const UndoableNotification: React.FC<UndoableNotification> = ({\n  closeToast,\n  cancelMutation,\n  message,\n}) => {\n  return (\n    <div>\n      <p>{message}</p>\n      <button\n        onClick={() => {\n          cancelMutation?.();\n          closeToast?.();\n        }}\n      >\n        Undo\n      </button>\n    </div>\n  );\n};\n")))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"open")," method will be accessible via ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"},(0,i.yg)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { open } = useNotification();\n\nopen?.({\n  type: "success",\n  message: "Hey",\n  description: "I <3 Refine",\n  key: "unique-id",\n});\n')))),(0,i.yg)("h3",{id:"close"},(0,i.yg)("inlineCode",{parentName:"h3"},"close")),(0,i.yg)(f,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"refine")," calls this method when it wants to close a notification. ",(0,i.yg)("strong",{parentName:"p"},"refine")," pass the ",(0,i.yg)("inlineCode",{parentName:"p"},"key")," of the notification to the ",(0,i.yg)("inlineCode",{parentName:"p"},"close")," method. So, we can handle the notification close logic with this ",(0,i.yg)("inlineCode",{parentName:"p"},"key"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { toast } from "react-toastify";\n\nconst notificationProvider: NotificationProvider = {\n  //...\n  close: (key) => toast.dismiss(key),\n};\n')),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"close")," method will be accessible via ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"},(0,i.yg)("inlineCode",{parentName:"a"},"useNotification"))," hook."),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useNotification } from "@pankod/refine-core";\n\nconst { close } = useNotification();\n\nclose?.("displayed-notification-key");\n')))),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)(f,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.yg)(y,{path:"with-react-toastify",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);