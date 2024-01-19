"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"<FilterDropdown />"},s=void 0,p={unversionedId:"ui-integrations/ant-design/components/filter-dropdown/index",id:"ui-integrations/ant-design/components/filter-dropdown/index",title:"<FilterDropdown />",description:"Usage",source:"@site/docs/ui-integrations/ant-design/components/filter-dropdown/index.md",sourceDirName:"ui-integrations/ant-design/components/filter-dropdown",slug:"/ui-integrations/ant-design/components/filter-dropdown/",permalink:"/docs/ui-integrations/ant-design/components/filter-dropdown/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/components/filter-dropdown/index.md",tags:[],version:"current",lastUpdatedBy:"Ivan Vinokurov",lastUpdatedAt:1705660236,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{title:"<FilterDropdown />"},sidebar:"mainSidebar",previous:{title:"Breadcrumb",permalink:"/docs/ui-integrations/ant-design/components/breadcrumb/"},next:{title:"<AutoSaveIndicator />",permalink:"/docs/ui-integrations/ant-design/components/auto-save-indicator/"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"selectedKeys, setSelectedKeys, confirm, clearFilters",id:"selectedkeys-setselectedkeys-confirm-clearfilters",level:3},{value:"mapValue",id:"mapvalue",level:3},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=u("Image"),f=u("PropsTable"),g=u("CodeSandboxExample"),b={toc:d};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown>")," is a helper component for ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#components-table-demo-custom-filter-panel"},"filter dropdowns in Ant Design's ",(0,r.kt)("inlineCode",{parentName:"a"},"<Table>")," components.")),(0,r.kt)("p",null,"It serves as a bridge by synchronizing between its children's input value and ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table>"),"'s filter values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/pages/postList.tsx"',title:'"components/pages/postList.tsx"'},'import {\n  List,\n  // highlight-start\n  FilterDropdown,\n  // highlight-end\n  useTable,\n} from "@refinedev/antd";\nimport { Table, Select } from "antd";\n\nconst PostList: React.FC = (props) => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column\n          dataIndex={["category", "id"]}\n          title="Category"\n          key="category.id"\n          // highlight-start\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select\n                mode="multiple"\n                placeholder="Select Category"\n                options={[\n                  { label: "Ergonomic", value: "1" },\n                  { label: "Island", value: "2" },\n                ]}\n              />\n            </FilterDropdown>\n          )}\n          // highlight-end\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  category: {\n    id: number;\n  };\n}\n')),(0,r.kt)("p",null,"Selecting categories from dropdown will send the id's of categories as filtering values to ",(0,r.kt)("strong",{parentName:"p"},"Table")," and data will be updated by Refine under the hood."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<FilterDropdown>")," will put two buttons for filtering and clearing filter actions."),(0,r.kt)(m,{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/category_filter-dropdown.png",alt:"Show record action",mdxType:"Image"}),(0,r.kt)("p",null,"We added category options for ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select>")," manually for the sake of simplicity but the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-select"},"useSelect")," hook can be used to populate the props of ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useSelect<ICategory>({\n  resource: "categories",\n  optionLabel: "title",\n  optionValue: "id",\n});\n\n<Select {...categorySelectProps} />;\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"selectedkeys-setselectedkeys-confirm-clearfilters"},"selectedKeys, setSelectedKeys, confirm, clearFilters"),(0,r.kt)("p",null,"These are to be passed from ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/table/#Column"},(0,r.kt)("inlineCode",{parentName:"a"},"<Table.Column>"),"'s filterDropdown")," prop."),(0,r.kt)("h3",{id:"mapvalue"},"mapValue"),(0,r.kt)("p",null,"Determines the value passed to children. ",(0,r.kt)("inlineCode",{parentName:"p"},"mapValue")," takes ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedKeys")," as an argument."),(0,r.kt)("p",null,"For example when using ",(0,r.kt)("inlineCode",{parentName:"p"},"useSelect")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"<Select>")," component, in which case, the values must be mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"s using ",(0,r.kt)("inlineCode",{parentName:"p"},"mapValue"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getDefaultFilter } from "@refinedev/core";\nimport { useTable, FilterDropdown, useSelect } from "@refinedev/antd";\nimport { Table, Select } from "antd";\n\nconst { tableProps, filters } = useTable<IPost>({\n  filters: {\n    initial: [\n      {\n        field: "category.id",\n        value: [1, 2],\n        operator: "in",\n      },\n    ],\n  },\n});\n\nconst { selectProps: categorySelectProps } = useSelect<ICategory>({\n  resource: "categories",\n  optionLabel: "title",\n  optionValue: "id",\n  defaultValue: getDefaultFilter("category.id", filters, "in"),\n});\n\n<Table>\n  <Table.Column dataIndex="id" title="ID" />\n  <Table.Column\n    dataIndex={["category", "id"]}\n    title="Category"\n    key="category.id"\n    filterDropdown={(props) => (\n      <FilterDropdown {...props} mapValue={(selectedKeys) => selectedKeys.map((i) => parseInt(i.toString()))}>\n        <Select style={{ minWidth: 200 }} mode="multiple" placeholder="Select Category" {...categorySelectProps} />\n      </FilterDropdown>\n    )}\n    defaultFilteredValue={getDefaultFilter("category.id", filters, "in")}\n  />\n</Table>;\n')),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#syncwithlocation"},"syncWithLocation")," is enabled, on page refresh, the filter values will be type of ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," since they will be parsed from URL. This might produce some incompatibility if data for filter input comes from an API and it's not type of ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"getDefaultFilter")," finds filter values for a given column from the given filters. In the example, ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"getDefaultFilter")," includes filter values from the URL since it comes from ",(0,r.kt)("inlineCode",{parentName:"p"},"useTable"),".")),(0,r.kt)(f,{module:"@refinedev/antd/FilterDropdown",mdxType:"PropsTable"}),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(g,{path:"table-antd-use-table",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);