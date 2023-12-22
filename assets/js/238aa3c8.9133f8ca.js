"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={},a=void 0,p={unversionedId:"ui-integrations/ant-design/hooks/use-simple-list/search-live-preview",id:"ui-integrations/ant-design/hooks/use-simple-list/search-live-preview",title:"search-live-preview",description:"",source:"@site/docs/ui-integrations/ant-design/hooks/use-simple-list/search-live-preview.md",sourceDirName:"ui-integrations/ant-design/hooks/use-simple-list",slug:"/ui-integrations/ant-design/hooks/use-simple-list/search-live-preview",permalink:"/docs/ui-integrations/ant-design/hooks/use-simple-list/search-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-simple-list/search-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703228593,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{}},l={},u=[],m={toc:u};function d(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=420px",live:!0,url:"http://localhost:3000/products",previewHeight:"420px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useSimpleList } from "@refinedev/antd";\nimport { Typography, List, Form, Input, Button } from "antd";\nimport { HttpError } from "@refinedev/core";\n\nconst { Text } = Typography;\n\ninterface IProduct {\n  id: number;\n  name: string;\n  description: string;\n  price: string;\n}\n\ninterface ISearch {\n  name: string;\n  description: string;\n}\n\nconst ProductList: React.FC = () => {\n  const { listProps, searchFormProps } = useSimpleList<IProduct, HttpError, ISearch>({\n    onSearch: (values) => {\n      return [\n        {\n          field: "name",\n          operator: "contains",\n          value: values.name,\n        },\n        {\n          field: "description",\n          operator: "contains",\n          value: values.description,\n        },\n      ];\n    },\n  });\n\n  return (\n    <div>\n      <Form {...searchFormProps} layout="inline">\n        <Form.Item name="name">\n          <Input placeholder="Search by name" />\n        </Form.Item>\n        <Form.Item name="description">\n          <Input placeholder="Search by description" />\n        </Form.Item>\n        <Button type="primary" onClick={searchFormProps.form?.submit}>\n          Search\n        </Button>\n      </Form>\n      <List {...listProps} renderItem={renderItem} />\n    </div>\n  );\n};\n\nconst renderItem = (item: IProduct) => {\n  const { id, name, description, price } = item;\n\n  return (\n    <List.Item actions={[<Text key={id}>{price}</Text>]}>\n      <List.Item.Meta title={name} description={description} />\n    </List.Item>\n  );\n};\n// visible-block-end\n\nsetRefineProps({\n  resources: [\n    {\n      name: "products",\n      list: ProductList,\n    },\n  ],\n});\n\nrender(<RefineAntdDemo />);\n')))}d.isMDXComponent=!0}}]);