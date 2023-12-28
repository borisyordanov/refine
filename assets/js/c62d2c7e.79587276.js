"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});n(67294);var i=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={title:"Migration Guide from v4 to v5",sidebar_label:"Migration Guide"},l=void 0,s={unversionedId:"ui-integrations/material-ui/migration-guide/index",id:"ui-integrations/material-ui/migration-guide/index",title:"Migration Guide from v4 to v5",description:"Material UI released a new major version for @mui/x-data-grid package as v6. This document will guide you through the migration process for the Refine related parts. While this document won't cover all the changes, it will help you get started with the migration process.",source:"@site/docs/ui-integrations/material-ui/migration-guide/index.md",sourceDirName:"ui-integrations/material-ui/migration-guide",slug:"/ui-integrations/material-ui/migration-guide/",permalink:"/docs/ui-integrations/material-ui/migration-guide/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/material-ui/migration-guide/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703748224,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"Migration Guide from v4 to v5",sidebar_label:"Migration Guide"},sidebar:"mainSidebar",previous:{title:"Theming",permalink:"/docs/ui-integrations/material-ui/theming/"},next:{title:"Introduction",permalink:"/docs/ui-integrations/chakra-ui/introduction/"}},p={},u=[{value:"Required Changes",id:"required-changes",level:2},{value:"Updating the packages",id:"updating-the-packages",level:3},{value:"<code>useDataGrid</code>",id:"usedatagrid",level:3},{value:"<code>GridColumns</code> to <code>GridColDef[]</code>",id:"gridcolumns-to-gridcoldef",level:3}],c={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,i.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Material UI released a new major version for ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," package as v6. This document will guide you through the migration process for the Refine related parts. While this document won't cover all the changes, it will help you get started with the migration process."),(0,i.kt)("admonition",{title:"Official Migration Guide",type:"simple"},(0,i.kt)("p",{parentName:"admonition"},"Check out the official ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"MUI X Migration Guide for ",(0,i.kt)("inlineCode",{parentName:"a"},"DataGrid"))," for detailed information and all the changes."),(0,i.kt)("p",{parentName:"admonition"},"You can also check out the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/blog/mui-x-v6"},"Introducing MUI X v6.0.0")," blog post for more information about the new version.")),(0,i.kt)("p",null,"The changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," API are included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@refinedev/mui"),"'s latest version (",(0,i.kt)("inlineCode",{parentName:"p"},"v5"),"). With this release, we've updated the peer dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"^6.6.0"),"."),(0,i.kt)("h2",{id:"required-changes"},"Required Changes"),(0,i.kt)("p",null,"The changes listed below are required to use ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with Refine. It doesn't cover all the changes in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," API. To see all the changes, please follow the ",(0,i.kt)("a",{parentName:"p",href:"https://mui.com/x/migration/migration-data-grid-v5/"},"official migration guide for MUI X"),"."),(0,i.kt)("h3",{id:"updating-the-packages"},"Updating the packages"),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid")," with version 6, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/mui"},(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/mui"))," must be updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"5.x.x")," as well."),(0,i.kt)("p",null,"Since there are some changes in the return values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDataGrid")," and the common usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataGrid")," component with TypeScript, we've also released a major release to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/inferencer"},(0,i.kt)("inlineCode",{parentName:"a"},"@refinedev/inferencer"))," package. If you're using the Inferencer package, you'll need to update it to ",(0,i.kt)("inlineCode",{parentName:"p"},"4.x.x")," as well."),(0,i.kt)("h3",{id:"usedatagrid"},(0,i.kt)("inlineCode",{parentName:"h3"},"useDataGrid")),(0,i.kt)("p",null,"We've updated the ",(0,i.kt)("inlineCode",{parentName:"p"},"useDataGrid")," hook to return ",(0,i.kt)("inlineCode",{parentName:"p"},"paginationModel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onPaginationModelChange")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pageSize"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onPageChange")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"onPageSizeChange"),". If you've modified these props, you'll need to update them to use the new API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},"const PostList = () => {\nconst { dataGridProps } = useDataGrid();\n-   const { page, pageSize, onPageChange, onPageSizeChange, ...restDataGridProps } = dataGridProps;\n+   const { paginationModel, onPaginationModelChange, ...restDataGridProps } = dataGridProps;\n\n    /* ... */\n    /* Your changes to use the new values */\n    /* ... */\n\n    return (\n        <DataGrid\n            {...restDataGridProps}\n-          page={page}\n-          pageSize={pageSize}\n-          onPageChange={onPageChange}\n-          onPageSizeChange={onPageSizeChange}\n+          paginationModel={paginationModel}\n+          onPaginationModelChange={onPaginationModelChange}\n        />\n    );\n}\n")),(0,i.kt)("h3",{id:"gridcolumns-to-gridcoldef"},(0,i.kt)("inlineCode",{parentName:"h3"},"GridColumns")," to ",(0,i.kt)("inlineCode",{parentName:"h3"},"GridColDef[]")),(0,i.kt)("p",null,"While updating our Material UI examples, we've encountered this issue and thought it deserves a mention here. When defining the ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DataGrid>"),", we've used ",(0,i.kt)("inlineCode",{parentName:"p"},"GridColumns")," type, with the changes in ",(0,i.kt)("inlineCode",{parentName:"p"},"@mui/x-data-grid"),"'s last version, this type is removed and should be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"GridColDef")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="posts/list.tsx"',title:'"posts/list.tsx"'},'import React from "react";\nimport { List, useDataGrid } from "@refinedev/mui";\n\n- import { DataGrid, GridColumns } from "@mui/x-data-grid";\n+ import { DataGrid, GridColDef } from "@mui/x-data-grid";\n\nimport { ICategory, IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n-   const columns = React.useMemo<GridColumns<IPost>>(\n+   const columns = React.useMemo<GridColDef<IPost>[]>(\n        () => [/* ... */],\n        [],\n    );\n\n    return (\n        <List>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n')))}m.isMDXComponent=!0}}]);