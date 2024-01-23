"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"Delete",swizzle:!0},s=void 0,d={unversionedId:"ui-integrations/material-ui/components/buttons/delete-button/index",id:"ui-integrations/material-ui/components/buttons/delete-button/index",title:"Delete",description:"` uses Material UI's  and ` components.",source:"@site/docs/ui-integrations/material-ui/components/buttons/delete-button/index.md",sourceDirName:"ui-integrations/material-ui/components/buttons/delete-button",slug:"/ui-integrations/material-ui/components/buttons/delete-button/",permalink:"/docs/ui-integrations/material-ui/components/buttons/delete-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/components/buttons/delete-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1706016710,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"Delete",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Create",permalink:"/docs/ui-integrations/material-ui/components/buttons/create-button/"},next:{title:"Edit",permalink:"/docs/ui-integrations/material-ui/components/buttons/edit-button/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"recordItemId",id:"recorditemid",level:3},{value:"resource",id:"resource",level:3},{value:"onSuccess",id:"onsuccess",level:3},{value:"mutationMode",id:"mutationmode",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"How to override confirm texts?",id:"how-to-override-confirm-texts",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("PropTag"),f=p("PropsTable"),v={toc:u};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," uses Material UI's ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/loading-button/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<LoadingButton>"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-dialog/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Dialog>"))," components."),(0,r.kt)("p",null,"When you try to delete something, a pop-up shows up and asks for confirmation. When confirmed, it executes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete"))," method provided by your ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"dataProvider")),"."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("strong",{parentName:"a"},"Refine CLI"))," to customize it.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'const { Create } = RefineMui;\nimport dataProvider from "@refinedev/simple-rest";\n// visible-block-start\nimport {\n  useDataGrid,\n  List,\n  // highlight-next-line\n  DeleteButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nconst columns: GridColDef[] = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n  {\n    field: "actions",\n    headerName: "Actions",\n    renderCell: function render({ row }) {\n      // highlight-next-line\n      return <DeleteButton size="small" recordItemId={row.id} />;\n    },\n    align: "center",\n    headerAlign: "center",\n    minWidth: 80,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n      },\n    ]}\n  />,\n);\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"recorditemid"},"recordItemId"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," allows us to manage which record will be deleted. By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"recordItemId")," is inferred from the route params."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\n\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/mui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton resource="posts" recordItemId="1" />;\n};\n\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyDeleteComponent}\n  />,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-delete"},(0,r.kt)("inlineCode",{parentName:"a"},"useDelete"))," method and then the record whose resource is ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," and whose id is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," gets deleted."),(0,r.kt)("h3",{id:"resource"},"resource"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," allows us to manage which resource's record is going to be deleted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/mui";\n\nconst MyDeleteComponent = () => {\n  return <DeleteButton resource="categories" recordItemId="2" />;\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n      },\n      {\n        name: "categories",\n      },\n    ]}\n    DashboardPage={MyDeleteComponent}\n  />,\n);\n')),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," section of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192"))),(0,r.kt)("h3",{id:"onsuccess"},"onSuccess"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onSuccess")," can be used if you want to do anything on the result returned after the delete request."),(0,r.kt)("p",null,"For example, let's ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log")," after deletion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/mui";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      resource="posts"\n      recordItemId="1"\n      onSuccess={(value) => {\n        console.log(value);\n      }}\n    />\n  );\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n      },\n    ]}\n    DashboardPage={MyDeleteComponent}\n  />,\n);\n')),(0,r.kt)("h3",{id:"mutationmode"},"mutationMode"),(0,r.kt)("p",null,"Determines which mode mutation will have while executing ",(0,r.kt)("inlineCode",{parentName:"p"},"<DeleteButton>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable } from "@refinedev/core";\n\nimport {\n  List,\n  // highlight-next-line\n  DeleteButton,\n} from "@refinedev/mui";\nimport { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/x-data-grid";\n\nexport const PostList: React.FC = () => {\n  const { tableQueryResult } = useTable<IPost>();\n\n  const { data } = tableQueryResult;\n\n  return (\n    <List>\n      <Table aria-label="simple table">\n        <TableHead>\n          <TableRow>\n            <TableCell>ID</TableCell>\n            <TableCell>Title</TableCell>\n            <TableCell align="center">Action</TableCell>\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {data?.data.map((row) => (\n            <TableRow key={row.id}>\n              <TableCell>{row.id}</TableCell>\n              <TableCell component="th" scope="row">\n                {row.title}\n              </TableCell>\n              <TableCell align="center">\n                <DeleteButton\n                  recordItemId={row.id}\n                  // highlight-next-line\n                  mutationMode="undoable"\n                />\n              </TableCell>\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"mutation mode documentation ","\u2192"))),(0,r.kt)("h3",{id:"hidetext"},"hideText"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hideText")," is used to show or hide the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/mui";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n// visible-block-end\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n        list: MyDeleteComponent,\n      },\n    ]}\n  />,\n);\n')),(0,r.kt)("h3",{id:"accesscontrol"},"accessControl"),(0,r.kt)("p",null,"This prop can be used to skip access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { DeleteButton } from "@refinedev/mui";\n\nexport const MyListComponent = () => {\n  return <DeleteButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />;\n};\n')),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.kt)(m,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead."),(0,r.kt)("h2",{id:"how-to-override-confirm-texts"},"How to override confirm texts?"),(0,r.kt)("p",null,"You can change the text that appears when you confirm a transaction with ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmTitle")," prop, as well as what 'ok' and 'cancel' buttons text look like with ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmOkText")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmCancelText")," props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=200px",live:!0,disableScroll:!0,previewHeight:"200px"},'const { useRouterContext } = RefineCore;\nimport dataProvider from "@refinedev/simple-rest";\n\n// visible-block-start\nimport { DeleteButton } from "@refinedev/mui";\n\nconst MyDeleteComponent = () => {\n  return (\n    <DeleteButton\n      // highlight-start\n      confirmTitle="Title"\n      confirmOkText="Ok Text"\n      confirmCancelText="Delete Text"\n      // highlight-end\n    />\n  );\n};\n// visible-block-end\n\nconst simpleRestDataProvider = dataProvider("https://api.fake-rest.refine.dev");\n\nconst customDataProvider = {\n  ...simpleRestDataProvider,\n  deleteOne: async ({ resource, id, variables }) => {\n    await new Promise((resolve) => setTimeout(resolve, 500));\n\n    return {\n      message: "You have successfully deleted the record",\n    };\n  },\n};\n\nrender(\n  <RefineMuiDemo\n    initialRoutes={["/"]}\n    dataProvider={customDataProvider}\n    resources={[\n      {\n        name: "posts",\n        list: MyDeleteComponent,\n      },\n    ]}\n  />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(f,{module:"@refinedev/mui/DeleteButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),".")))}h.isMDXComponent=!0}}]);