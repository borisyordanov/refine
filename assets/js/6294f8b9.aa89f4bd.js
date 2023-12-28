"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29388:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={title:"Introduction"},l='React Hook Form <GuideBadge id="guides-concepts/forms" /> <RouterBadge id="guides-concepts/routing/#useform" />',c={unversionedId:"packages/react-hook-form/introduction/index",id:"packages/react-hook-form/introduction/index",title:"Introduction",description:"Refine provides an integration package for React Hook Form library. This package enables you to manage your forms in a headless manner. This adapter supports all of the features of both React Hook Form and Refine's useForm hook. Simply, you can use any of the React Hook Form examples as-is by copying and pasting them into your project.",source:"@site/docs/packages/react-hook-form/introduction/index.md",sourceDirName:"packages/react-hook-form/introduction",slug:"/packages/react-hook-form/introduction/",permalink:"/docs/packages/react-hook-form/introduction/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/react-hook-form/introduction/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1703748224,formattedLastUpdatedAt:"Dec 28, 2023",frontMatter:{title:"Introduction"},sidebar:"mainSidebar",previous:{title:"Advanced Table",permalink:"/docs/examples/table/tanstack-table/advanced-tanstack-table"},next:{title:"useForm",permalink:"/docs/packages/react-hook-form/use-form/"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=m("GuideBadge"),f=m("RouterBadge"),g=m("InstallPackagesCommand"),b=m("Tabs"),k=m("TabItem"),h={toc:u};function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react-hook-form--"},"React Hook Form ",(0,n.kt)(d,{id:"guides-concepts/forms",mdxType:"GuideBadge"})," ",(0,n.kt)(f,{id:"guides-concepts/routing/#useform",mdxType:"RouterBadge"})),(0,n.kt)("p",null,"Refine provides an integration package for ",(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com"},"React Hook Form")," library. This package enables you to manage your forms in a headless manner. This adapter supports all of the features of both ",(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com"},"React Hook Form")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-form/"},"Refine's useForm")," hook. Simply, you can use any of the ",(0,n.kt)("a",{parentName:"p",href:"https://react-hook-form.com"},"React Hook Form")," examples as-is by copying and pasting them into your project."),(0,n.kt)("p",null,"This package exports following hooks to manage your forms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages"},(0,n.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages"},(0,n.kt)("inlineCode",{parentName:"a"},"useModalForm"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/packages/list-of-packages"},(0,n.kt)("inlineCode",{parentName:"a"},"useStepsFrom")))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/react-hook-form"},(0,n.kt)("inlineCode",{parentName:"a"},"@refinedev/react-hook-form"))," library."),(0,n.kt)(g,{args:"@refinedev/react-hook-form",mdxType:"InstallPackagesCommand"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Let's see how to edit a post with ",(0,n.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"useForm")," hook."),(0,n.kt)(b,{wrapContent:!1,mdxType:"Tabs"},(0,n.kt)(k,{value:"Headless",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="edit.tsx"',title:'"edit.tsx"'},'import { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\n\nexport const PostEdit = () => {\n  const {\n    refineCore: { onFinish, formLoading, queryResult },\n    register,\n    handleSubmit,\n    formState: { errors },\n  } = useForm<IPost, HttpError>({\n    resource: "posts",\n    action: "edit",\n    id: 1,\n  });\n\n  return (\n    <form onSubmit={handleSubmit(onFinish)}>\n      <label>Title: </label>\n      <input {...register("title", { required: true })} />\n      {errors.title && <span>This field is required</span>}\n      <br />\n\n      <label>Status: </label>\n      <select {...register("status")}>\n        <option value="published">published</option>\n        <option value="draft">draft</option>\n        <option value="rejected">rejected</option>\n      </select>\n      <br />\n\n      <label>Content: </label>\n      <textarea {...register("content", { required: true })} rows={10} cols={50} />\n      {errors.content && <span>This field is required</span>}\n      <br />\n\n      <input type="submit" value="Submit" />\n      {formLoading && <p>Loading</p>}\n    </form>\n  );\n};\n\nexport type IStatus = "published" | "draft" | "rejected";\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: IStatus;\n}\n'))),(0,n.kt)(k,{value:"Material UI",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="edit.tsx"',title:'"edit.tsx"'},'import { HttpError } from "@refinedev/core";\nimport { Edit } from "@refinedev/mui";\nimport Box from "@mui/material/Box";\nimport TextField from "@mui/material/TextField";\nimport Autocomplete from "@mui/material/Autocomplete";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Controller } from "react-hook-form";\n\nexport const PostEdit: React.FC = () => {\n  const {\n    saveButtonProps,\n    register,\n    control,\n    formState: { errors },\n  } = useForm<IPost, HttpError>({\n    resource: "posts",\n    action: "edit",\n    id: 1,\n  });\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <Box component="form" sx={{ display: "flex", flexDirection: "column" }} autoComplete="off">\n        <TextField\n          id="title"\n          {...register("title", {\n            required: "This field is required",\n          })}\n          error={!!errors.title}\n          helperText={errors.title?.message}\n          margin="normal"\n          fullWidth\n          label="Title"\n          name="title"\n          autoFocus\n        />\n\n        <Controller\n          control={control}\n          name="status"\n          rules={{ required: "This field is required" }}\n          // eslint-disable-next-line\n          defaultValue={null as any}\n          render={({ field }) => (\n            <Autocomplete<IStatus>\n              id="status"\n              options={["published", "draft", "rejected"]}\n              {...field}\n              onChange={(_, value) => {\n                field.onChange(value);\n              }}\n              renderInput={(params) => (\n                <TextField\n                  {...params}\n                  label="Status"\n                  margin="normal"\n                  variant="outlined"\n                  error={!!errors.status}\n                  helperText={errors.status?.message}\n                  required\n                />\n              )}\n            />\n          )}\n        />\n\n        <TextField\n          id="content"\n          {...register("content", {\n            required: "This field is required",\n          })}\n          error={!!errors.content}\n          helperText={errors.content?.message}\n          margin="normal"\n          label="Content"\n          multiline\n          rows={4}\n        />\n      </Box>\n    </Edit>\n  );\n};\n\nexport type IStatus = "published" | "draft" | "rejected";\n\nexport interface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: IStatus;\n}\n'))),(0,n.kt)(k,{value:"Chakra UI",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="edit.tsx"',title:'"edit.tsx"'},'import { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Edit } from "@refinedev/chakra-ui";\nimport { FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";\n\nexport const PostEdit = () => {\n  const {\n    refineCore: { formLoading },\n    saveButtonProps,\n    register,\n    formState: { errors },\n  } = useForm<IPost, HttpError>({\n    refineCoreProps: {\n      resource: "posts",\n      action: "edit",\n      id: 1,\n    },\n  });\n\n  return (\n    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>\n      <FormControl mb="3" isInvalid={!!errors?.title}>\n        <FormLabel>Title</FormLabel>\n        <Input id="title" type="text" {...register("title", { required: "Title is required" })} />\n        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>\n      </FormControl>\n\n      <FormControl mb="3" isInvalid={!!errors?.status}>\n        <FormLabel>Status</FormLabel>\n        <Select\n          id="status"\n          placeholder="Select Post Status"\n          {...register("status", {\n            required: "Status is required",\n          })}\n        >\n          <option>published</option>\n          <option>draft</option>\n          <option>rejected</option>\n        </Select>\n        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>\n      </FormControl>\n\n      <FormControl mb="3" isInvalid={!!errors?.content}>\n        <FormLabel>Content</FormLabel>\n        <Textarea\n          id="content"\n          {...register("content", {\n            required: "content is required",\n          })}\n        />\n        <FormErrorMessage>{`${errors.content?.message}`}</FormErrorMessage>\n      </FormControl>\n    </Edit>\n  );\n};\n\nexport type IStatus = "published" | "draft" | "rejected";\n\ninterface IPost {\n  id: number;\n  title: string;\n  content: string;\n  status: IStatus;\n}\n')))))}y.isMDXComponent=!0}}]);