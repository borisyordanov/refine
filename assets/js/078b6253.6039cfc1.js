"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34282],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",slug:"react-useid",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-14-react-use-id/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-useid",source:"@site/blog/2024-05-14-react-use-id.md",title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",date:"2024-05-14T00:00:00.000Z",formattedDate:"May 14, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:7.41,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",slug:"react-useid",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-05-14-react-use-id/social.png",hide_table_of_contents:!1},prevItem:{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",permalink:"/blog/6-best-online-code-editors-comparison"},nextItem:{title:"What is Headless CMS?",permalink:"/blog/headless-cms"},relatedPosts:[{title:"Using React Hot Toast as a Notification Provider for CRUD apps",description:"We'll introduce create a custom notification provider using the react-hot-toast library.",permalink:"/blog/react-hot-toast",formattedDate:"October 6, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:12.97,date:"2023-10-06T00:00:00.000Z"},{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"November 24, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:6.915,date:"2022-11-24T00:00:00.000Z"},{title:"Essentials of Managing Form State with React Hook Form",description:"This post covers the essentials of form state management with React Hook Form library.",permalink:"/blog/react-hook-form",formattedDate:"March 26, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:27.265,date:"2024-03-26T00:00:00.000Z"}],authorPosts:[{title:"An article guideline for Refine blog posts",description:"A guideline for writing articles",permalink:"/blog/article-guideline",formattedDate:"September 23, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:3.685,date:"2022-09-23T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"4 Ways to Generate UUIDs in Node.js",description:"We'll explore how UUIDs work in Node.js and how they can help keep data distinct and make your projects easier to scale.",permalink:"/blog/node-js-uuid",formattedDate:"April 24, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.355,date:"2024-04-24T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What is the React useId?",id:"what-is-the-react-useid",level:2},{value:"When to use React useId?",id:"when-to-use-react-useid",level:2},{value:"How to Use React useId?",id:"how-to-use-react-useid",level:2},{value:"What are the benefits of using React useId?",id:"what-are-the-benefits-of-using-react-useid",level:3},{value:"Why is useId better than an incrementing counter?",id:"why-is-useid-better-than-an-incrementing-counter",level:3},{value:"Example Comparison",id:"example-comparison",level:3},{value:"Using an Incrementing Counter",id:"using-an-incrementing-counter",level:4},{value:"Using <code>useId</code>",id:"using-useid",level:4},{value:"Things to consider with useId",id:"things-to-consider-with-useid",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},m="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"React is popularly a JavaScript library built to create user interfaces, mainly single-page applications. One of the powerful features of React is Hooks, which allows us to use states and other features in React functional components. The useId hook is a new addition that makes creating unique IDs for elements easy for better accessibility and handling dynamic components."),(0,i.yg)("p",null,"In this article we'll make it clear what the useId hook is and its use cases. Also included are some practical examples showing how use with useId can improve our development process by ensuring the uniqueness of identifiers in our React applications."),(0,i.yg)("h2",{id:"what-is-the-react-useid"},"What is the React useId?"),(0,i.yg)("p",null,"The React useId hook creates a unique id for every instance of a component. It does so in instances where one needs unique identification in form inputs, labels, or actually anything that creates dynamic lists. Use of useId makes sure that all the elements get unique IDs and prevent conflicts to handle proper accessibility by the application."),(0,i.yg)("h2",{id:"when-to-use-react-useid"},"When to use React useId?"),(0,i.yg)("p",null,"The React ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook can be pretty useful in a few common scenarios:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Form Elements and Labels"),": Form inputs, and the labels for these inputs, should include IDs to uniquely identify the input. It makes the form better for understanding when read by a screen reader."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Dynamic Lists and Components"),": If you are working with dynamic lists or components then definitely you have a need to use unique key for each item and that would be a good approach to make sure proper render and the update lifecycle in React. And useId makes generating these keys simple."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Accessibility"),": For web applications with some sort of interactivity, uniqueness of IDs can be crucial. In that case, such elements may include a variety of buttons, inputs, and ARIA attributes having unique IDs in support of user experience for assistive technologies."),(0,i.yg)("h2",{id:"how-to-use-react-useid"},"How to Use React useId?"),(0,i.yg)("p",null,"Knowing when and how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," could improve our workflow a lot. It will create seamless unique IDs so important for dynamic content and form controls. This is going to lead to much more readable and maintainable code, together with better accessibility and user experience."),(0,i.yg)("p",null,"Using the ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook is straightforward. Here's a basic example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useId } from "react";\n\nfunction MyComponent() {\n  const id = useId();\n  return <div id={id}>My Element</div>;\n}\n')),(0,i.yg)("p",null,"The example above will generate a unique ID for the div element using useId."),(0,i.yg)("p",null,"This is how you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," in different scenarios:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"For Form Inputs"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useId } from "react";\n\nfunction FormComponent() {\n  const inputId = useId();\n  return (\n    <div>\n      <label htmlFor={inputId}>Name</label>\n      <input id={inputId} type="text" />\n    </div>\n  );\n}\n')),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"For Dynamic Component Lists"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useId } from "react";\n\nfunction ListComponent({ items }) {\n  return (\n    <ul>\n      {items.map((item) => {\n        const itemId = useId();\n        return (\n          <li key={itemId} id={itemId}>\n            {item}\n          </li>\n        );\n      })}\n    </ul>\n  );\n}\n')),(0,i.yg)("h3",{id:"what-are-the-benefits-of-using-react-useid"},"What are the benefits of using React useId?"),(0,i.yg)("p",null,"This section will walk us through the advantages of the React ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook and mention a few points we should be aware of. This knowledge will allow us to make informed decisions concerning the use of ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," in our projects."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook gives us a few benefits that we can use to enhance our development:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Ease of Creating Unique IDs"),": Making unique IDs with ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," is very simple and this reduces the time one would take to handle the ID manually, which is also annoying and error-prone with increasing applications and components.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Improved Accessibility"),": By making sure that each interactive element has a unique ID, we make our applications more accessible. Screen readers and other assistive technologies need these unique IDs to be able to modify the user experience and make them much more amenable to people with disabilities.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Improved Readability in Code"),": Using ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," in turn allows us to keep our code quite clean and readable. All the while, it abstracts the complexity of making those unique IDs so that you can focus on the core logic of the components. This leads to more maintainable and understandable code."))),(0,i.yg)("p",null,"HTML accessibility attributes, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"aria-describedby"),', allow you to explain to a user, in other words, that "this element relates to that one." For example: this input is described by this paragraph.'),(0,i.yg)("p",null,"You would write that in plain HTML as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<label>\n  Password:\n  <input type="password" aria-describedby="password-hint" />\n</label>\n<p id="password-hint">The password should be min. 8 characters.</p>\n')),(0,i.yg)("p",null,"But in React, hardcoding IDs like this is not a good idea because a component might be rendered more than once on the page, and IDs must be unique. Instead of hardcoding an ID, you can generate a unique ID using ",(0,i.yg)("inlineCode",{parentName:"p"},"useId"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useId } from "react";\n\nfunction PasswordField() {\n  const passwordHintId = useId();\n  return (\n    <>\n      <label>\n        Password:\n        <input type="password" aria-describedby={passwordHintId} />\n      </label>\n      <p id={passwordHintId}>The password should be min. 8 characters.</p>\n    </>\n  );\n}\n')),(0,i.yg)("h3",{id:"why-is-useid-better-than-an-incrementing-counter"},"Why is useId better than an incrementing counter?"),(0,i.yg)("p",null,"Using ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," is better than an incrementing counter for generating unique IDs in React components for several reasons:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Consistency Across Renders"),"\nIncrementing counters could thus result in inconsistencies with the specific use cases where some of the components might unmount and remount, and with SSR. With useId, the IDs are kept in check during the rendering process and across other environments."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Global State Issues"),"\nCounters are incremental in general and depend on global state or even external variables to maintain counts. This makes them vulnerable to probable issues like race conditions or conflicts in a concurrent environment. Unique IDs from useId are locally generated within a component, so this is not a problem of this type."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Simplified Code"),"\nIt is an inbuilt React hook that gels well with the React lifecycle, takes off the weight that one requires more logic and state to manage unique ids, hence cleaning and making the code maintainable."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Quality Guaranteed"),"\nuseId ensures the uniqueness of generated IDs, but in the context of the component tree, meaning that one doesn't have to care about conflicts with other IDs, spread throughout the application, and manually ensuring their uniqueness. In a lot of cases, it could result in a mistake by using an incrementing counter."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"React Concurrent Mode"),"\nWith the new Concurrent Mode in React, there is a possibility of components rendering out of order or, in some cases, rendering more than once before being committed into the DOM. The useId was developed with these new paradigms in mind, so its IDs will remain the same and unique."),(0,i.yg)("h3",{id:"example-comparison"},"Example Comparison"),(0,i.yg)("h4",{id:"using-an-incrementing-counter"},"Using an Incrementing Counter"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'let counter = 0;\n\nfunction PasswordField() {\n  const passwordHintId = `password-hint-${counter++}`;\n  return (\n    <>\n      <label>\n        Password:\n        <input type="password" aria-describedby={passwordHintId} />\n      </label>\n      <p id={passwordHintId}>\n        The password should contain at least 18 characters.\n      </p>\n    </>\n  );\n}\n')),(0,i.yg)("p",null,"What's wrong with this approach:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If ",(0,i.yg)("inlineCode",{parentName:"li"},"PasswordField")," is unmounted and then remounted, the ID could reset, leading to conflicts."),(0,i.yg)("li",{parentName:"ul"},"For the simultaneous rendering, it is possible to increase the counter non-atomically.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Managing the state for that counter can become cumbersome and error-prone.")),(0,i.yg)("h4",{id:"using-useid"},"Using ",(0,i.yg)("inlineCode",{parentName:"h4"},"useId")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},'import { useId } from "react";\n\nfunction PasswordField() {\n  const passwordHintId = useId();\n  return (\n    <>\n      <label>\n        Password:\n        <input type="password" aria-describedby={passwordHintId} />\n      </label>\n      <p id={passwordHintId}>\n        The password should contain at least 18 characters.\n      </p>\n    </>\n  );\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Advantages")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A unique ID which never changes for the render."),(0,i.yg)("li",{parentName:"ul"},"There is no need to handle global state or counters."),(0,i.yg)("li",{parentName:"ul"},"Works smoothly with React's rendering lifecycle and Concurrent Mode. In other words, ",(0,i.yg)("inlineCode",{parentName:"li"},"useId")," makes it much more reliable and effective to create unique IDs in React, while maintaining coherence, simplicity, and compatibility with modern React features.")),(0,i.yg)("h2",{id:"things-to-consider-with-useid"},"Things to consider with useId"),(0,i.yg)("p",null,"While ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," is strong, there are a few important things that need attention and should be kept in mind:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"SSR Issues"),": If you are using ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," with Server-Side Rendering (SSR), then be aware that id generated on server and id generated on client can be different. This leads to hydration issues and to avoid them, ID generation has to be done in a different way or other techniques have to be utilized to make sure that the IDs remain consistent.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Client-Side Uniqueness Only"),": The ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook ensures client-side uniqueness only. If you are working with IDs that must be consistent and unique across multiple client instances, or across both client and server, then you will need additional strategies."))),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"useId")," hook serves as a great addition to our toolkit. It allows us to build applications with better accessibility and structure at the same time."),(0,i.yg)("p",null,"Dealing with the creation of unique IDs in a way that's not too terse for bugs and accessibility problems is tedious. With useId implemented, we can now write much cleaner and more maintainable code, which in turn makes our application more robust and accessible."))}h.isMDXComponent=!0}}]);