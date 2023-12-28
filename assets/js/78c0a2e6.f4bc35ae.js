"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});a(67294);var r=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},l=void 0,p={unversionedId:"api-reference/core/hooks/data/useCustom/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useCustom/index",title:"useCustom",description:"useCustom is an extended version of TanStack Query's useQuery. It supports all the features of useQuery and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustom/index.md",sourceDirName:"api-reference/core/hooks/data/useCustom",slug:"/api-reference/core/hooks/data/useCustom/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustom/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703748224,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},sidebar:"someSidebar",previous:{title:"useCreateMany",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},next:{title:"useCustomMutation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"}},u={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>url</code> <PropTag required />",id:"url-",level:3},{value:"<code>method</code> <PropTag required />",id:"method-",level:3},{value:"<code>config.headers</code>",id:"configheaders",level:3},{value:"<code>config.query</code>",id:"configquery",level:3},{value:"<code>config.payload</code>",id:"configpayload",level:3},{value:"<code>config.sort</code>",id:"configsort",level:3},{value:"<code>config.filters</code>",id:"configfilters",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=c("PropTag"),f=c("PropsTable"),k={toc:d};function h(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," is an extended version of TanStack Query's ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")),". It supports all the features of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," and adds some extra features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"custom")," method as the ",(0,r.kt)("strong",{parentName:"li"},"query function")," from the ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,r.kt)("p",null,"It is useful when you want to send a custom query request using the TanStack Query advantages."),(0,r.kt)("admonition",{title:"attention",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,r.kt)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. To do these; ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},"useCreate"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},"useUpdate")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"useDelete")," hooks should be used instead."),(0,r.kt)("p",{parentName:"admonition"},"This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,r.kt)("p",{parentName:"admonition"},"If you need to custom mutation request, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"},"useCustomMutation")," hook.")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," hook expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," properties. These parameters will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("p",null,"When properties are changed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," hook will trigger a new request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n  isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n  url: `${apiUrl}/posts-unique-check`,\n  method: "get",\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"url-"},(0,r.kt)("inlineCode",{parentName:"h3"},"url")," ",(0,r.kt)(m,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  url: "www.example.com/api/get-products",\n});\n')),(0,r.kt)("h3",{id:"method-"},(0,r.kt)("inlineCode",{parentName:"h3"},"method")," ",(0,r.kt)(m,{required:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  method: "get",\n});\n')),(0,r.kt)("h3",{id:"configheaders"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.headers")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n')),(0,r.kt)("h3",{id:"configquery"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.query")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,r.kt)("h3",{id:"configpayload"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.payload")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the payload of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    payload: {\n      title: "Foo bar",\n    },\n  },\n});\n')),(0,r.kt)("h3",{id:"configsort"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.sort")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the sort query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    sort: [\n      {\n        field: "title",\n        order: "asc",\n      },\n    ],\n  },\n});\n')),(0,r.kt)("h3",{id:"configfilters"},(0,r.kt)("inlineCode",{parentName:"h3"},"config.filters")),(0,r.kt)("p",null,"It will be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the filter query parameters of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    filters: [\n      {\n        field: "title",\n        operator: "contains",\n        value: "Foo",\n      },\n    ],\n  },\n});\n')),(0,r.kt)("h3",{id:"queryoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"useCustom({\n  queryOptions: {\n    retry: 3,\n    enabled: false,\n  },\n});\n")),(0,r.kt)("h3",{id:"metadata"},(0,r.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/general-concepts/#metadata"},(0,r.kt)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,r.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,r.kt)("p",null,"In the following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"metaData")," is passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  metaData: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({\n    url,\n    method,\n    sort,\n    filters,\n    payload,\n    query,\n    headers,\n    metaData,\n  }) => {\n    const foo = metaData?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n')),(0,r.kt)("h3",{id:"dataprovidername"},(0,r.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,r.kt)("p",null,"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  dataProviderName: "second-data-provider",\n});\n')),(0,r.kt)("h3",{id:"successnotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data is fetched successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," can call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n')),(0,r.kt)("h3",{id:"errornotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,r.kt)("p",null,"After data fetching is failed, ",(0,r.kt)("inlineCode",{parentName:"p"},"useCustom")," will call ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,r.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(f,{module:"@pankod/refine-core/useCustom",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,r.kt)("td",{parentName:"tr",align:null},"unknown")))),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useQuery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>")))))))}h.isMDXComponent=!0}}]);