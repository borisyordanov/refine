"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64244],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>u});var i=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=i.createContext({}),m=function(e){var n=i.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=m(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),g=t,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||l;return a?i.createElement(u,r(r({ref:n},p),{},{components:a})):i.createElement(u,r({ref:n},p))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,r=new Array(l);r[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:t,r[1]=o;for(var m=2;m<l;m++)r[m]=a[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},42570:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>c});a(96540);var i=a(15680);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function r(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const o={title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},s=void 0,m={permalink:"/blog/tailwind-animations",source:"@site/blog/2024-03-25-tailwind-animations.md",title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",date:"2024-03-25T00:00:00.000Z",formattedDate:"March 25, 2024",tags:[{label:"tailwind",permalink:"/blog/tags/tailwind"}],readingTime:5.035,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",slug:"tailwind-animations",authors:"peter_osah",tags:["tailwind"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/social.png",hide_table_of_contents:!1},prevItem:{title:"Essentials of Managing Form State with React Hook Form",permalink:"/blog/react-hook-form"},nextItem:{title:"React useEffect Cleanup Function",permalink:"/blog/useeffect-cleanup"},relatedPosts:[{title:"Tailwind Flex for Responsive React Components",description:"This post is about how to use TailwindCSS Flex classes effectively to implement responsive components in React.",permalink:"/blog/tailwind-flex",formattedDate:"September 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:12.72,date:"2023-09-11T00:00:00.000Z"},{title:"Using Heroicons with TailwindCSS",description:"In this post, we see how to use Heroicons with TailwindCSS.",permalink:"/blog/heroicons-with-tailwind",formattedDate:"September 18, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.345,date:"2023-09-18T00:00:00.000Z"},{title:"Creating a Responsive React Navbar with Tailwind CSS",description:"In this brief guide, we'll create a responsive navbar with Tailwind CSS and Bootstrap in React.",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:8.4,date:"2022-10-07T00:00:00.000Z"}],authorPosts:[{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"October 26, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.11,date:"2023-10-26T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"},{title:"Building components with Radix UI",description:"This post explains with examples how the keyof operator is used to define advanced types in TypeScript.",permalink:"/blog/radix-ui",formattedDate:"April 4, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.375,date:"2024-04-04T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Built-in utility classes in Tailwind for animating elements",id:"built-in-utility-classes-in-tailwind-for-animating-elements",level:2},{value:"animate-none",id:"animate-none",level:3},{value:"animate-spin",id:"animate-spin",level:3},{value:"animate-ping",id:"animate-ping",level:3},{value:"animate-pulse",id:"animate-pulse",level:3},{value:"animate-bounce",id:"animate-bounce",level:2},{value:"Create custom animations in Tailwind:",id:"create-custom-animations-in-tailwind",level:2},{value:"Add keyframes to the Tailwind config file.",id:"add-keyframes-to-the-tailwind-config-file",level:3},{value:"Extend animation in the Tailwind config file.",id:"extend-animation-in-the-tailwind-config-file",level:3},{value:"Animate elements using arbitrary values in Tailwind.",id:"animate-elements-using-arbitrary-values-in-tailwind",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},g="wrapper";function u(e){var{components:n}=e,a=r(e,["components"]);return(0,i.yg)(g,l(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(n){t(e,n,a[n])}))}return e}({},d,a),{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"TailwindCSS")," is a widely used, utility-first ",(0,i.yg)("inlineCode",{parentName:"p"},"CSS")," framework that enables developers to easily create modern, responsive, and visually appealing user interfaces. Tailwind\u2019s utility-first approach makes it easy to create ",(0,i.yg)("inlineCode",{parentName:"p"},"CSS")," animations. This article will illustrate how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"TailwindCSS")," to add beautiful and complicated animations to your websites or applications."),(0,i.yg)("p",null,"Steps we'll cover:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-none"},"animate-none")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-spin"},"animate-spin")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-ping"},"animate-ping")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-pulse"},"animate-pulse")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-bounce"},"animate-bounce")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file.")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind."))),(0,i.yg)("h2",{id:"built-in-utility-classes-in-tailwind-for-animating-elements"},"Built-in utility classes in Tailwind for animating elements"),(0,i.yg)("p",null,"Tailwind provides built-in utility classes for an array of animations that can be added to elements."),(0,i.yg)("h3",{id:"animate-none"},"animate-none"),(0,i.yg)("p",null,"This utility class applies no animation to an element. It assures that the element is not affected by animation, even if it is contained in a parent element with an animation class."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div className="animate-none bg-blue-500 p-5">\n  <h3>Animation here</h3>\n</div>\n')),(0,i.yg)("h3",{id:"animate-spin"},"animate-spin"),(0,i.yg)("p",null,"This utility class Adds a linear spin animation to element. It can be useful on elements such as loading indicators."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <svg class="animate-spin">\n    \x3c!-- ... --\x3e\n  </svg>\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/2-min.gif",alt:"tailwind animations"})),(0,i.yg)("h3",{id:"animate-ping"},"animate-ping"),(0,i.yg)("p",null,"This utility class causes an element to scale and fade, much like a radar ping or a ripple in the sea. It can be beneficial on items that function as notification indications or attention-grabbing elements."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <span class="relative flex h-16 w-16">\n    <span\n      class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"\n    ></span>\n    <span\n      class="relative inline-flex rounded-full h-16 w-16 bg-blue-500"\n    ></span>\n  </span>\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/3-min.gif",alt:"tailwind animations"})),(0,i.yg)("h3",{id:"animate-pulse"},"animate-pulse"),(0,i.yg)("p",null,"This utility class makes an element fade in and out gradually \u2013 This class is handy for things like skeleton loaders."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="animate-pulse rounded-full bg-blue-400 h-16 w-16"></div>\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/4-min.gif",alt:"tailwind animations"})),(0,i.yg)("h2",{id:"animate-bounce"},"animate-bounce"),(0,i.yg)("p",null,"This utility class adds a bounce animation to an element. It is useful for elements like scroll indicators."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div class="animate-bounce rounded-full bg-blue-500 h-16 w-16"></div>\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/5-min.gif",alt:"tailwind animations"})),(0,i.yg)("h2",{id:"create-custom-animations-in-tailwind"},"Create custom animations in Tailwind:"),(0,i.yg)("p",null,"Tailwind allows us to easily construct custom animations that are not provided as built-in utility classes.\nAll we need to do is define your animation's keyframes in the ",(0,i.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file and expand the theme setup to create a new animation."),(0,i.yg)("p",null,"We will illustrate this with a simple animation on the Refine logo as shown below:"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/6-min.gif",alt:"tailwind animations"})),(0,i.yg)("h3",{id:"add-keyframes-to-the-tailwind-config-file"},"Add keyframes to the Tailwind config file."),(0,i.yg)("p",null,"We will open the ",(0,i.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file in the root directory of the project and add an empty keyframes object to the ",(0,i.yg)("inlineCode",{parentName:"p"},"theme.extend")," object. Now, inside this keyframes object, we'll add and specify our new slide animation as shown below."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,i.yg)("h3",{id:"extend-animation-in-the-tailwind-config-file"},"Extend animation in the Tailwind config file."),(0,i.yg)("p",null,"After adding the values to our keyframes object in the ",(0,i.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, we create a custom animation that uses this keyframe. We will add this animation name to a new ",(0,i.yg)("inlineCode",{parentName:"p"},"animation")," object inside the ",(0,i.yg)("inlineCode",{parentName:"p"},"theme.extend")," object as shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'module.exports = {\n  content: [\n    "./pages/**/*.{js,ts,jsx,tsx}",\n    "./components/**/*.{js,ts,jsx,tsx}",\n  ],\n  theme: {\n    extend: {\n      keyframes: {\n        refine: {\n          "0%": {\n            left: "0%",\n          },\n          "20%": {\n            left: "-50%",\n          },\n          "40%": {\n            left: "0%",\n          },\n          "60%": {\n            left: "50%",\n          },\n          "80%": {\n            left: "0%",\n          },\n          "100%": {\n            left: "0%",\n          },\n        },\n      },\n      animation: {\n        "refine-slide": "refine 2s infinite",\n      },\n    },\n  },\n  plugins: [],\n};\n')),(0,i.yg)("p",null,"Next, we add the animation to the markup. To define a custom animation utility class in markup, use the format ",(0,i.yg)("inlineCode",{parentName:"p"},"animate-[nameOfAnimation]"),". In our example, the name of the custom animation we added to the ",(0,i.yg)("inlineCode",{parentName:"p"},"tailwind.config.js")," file is ",(0,i.yg)("inlineCode",{parentName:"p"},"refine-slide"),", but when we specify the animation utility class in our 'HTML' markup, it is ",(0,i.yg)("inlineCode",{parentName:"p"},"animate-refine-slide"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <img\n    class="relative w-16 h-16 animate-refine-slide"\n    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixkXz-MD-PkV6BOiGL5SAkJi9XGAyE9lLLQ&usqp=CAU"\n  />\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/7-min.gif",alt:"tailwind animations"})),(0,i.yg)("h2",{id:"animate-elements-using-arbitrary-values-in-tailwind"},"Animate elements using arbitrary values in Tailwind."),(0,i.yg)("p",null,"In some cases, you may want to create an animation that will only be used once in your application. Rather than extending your animations in your ",(0,i.yg)("inlineCode",{parentName:"p"},"Tailwind.config.js")," file, ",(0,i.yg)("inlineCode",{parentName:"p"},"Tailwind")," offers a better option in such scenarios by using arbitrary values. To use them, place the animation properties, separated by underscores, between a pair of square brackets following the animate keyword in the markup, as shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},"animate -\n  [\n    animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction,\n  ];\n")),(0,i.yg)("p",null,'For example, if you want to create a one-off "wiggle" animation, you can declare the animation keyframes in your ',(0,i.yg)("inlineCode",{parentName:"p"},"CSS")," file, then proceed to the markup and declare the animation as an arbitrary value as shown below:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"keyframe in ",(0,i.yg)("inlineCode",{parentName:"strong"},"CSS")," File"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css"},"@keyframes wiggle {\n  0% {\n    transform: skewX(9deg);\n  }\n  10% {\n    transform: skewX(-8deg);\n  }\n  20% {\n    transform: skewX(7deg);\n  }\n  30% {\n    transform: skewX(-6deg);\n  }\n  40% {\n    transform: skewX(5deg);\n  }\n  50% {\n    transform: skewX(-4deg);\n  }\n  60% {\n    transform: skewX(3deg);\n  }\n  70% {\n    transform: skewX(-2deg);\n  }\n  80% {\n    transform: skewX(1deg);\n  }\n  90% {\n    transform: skewX(0deg);\n  }\n  100% {\n    transform: skewX(0deg);\n  }\n}\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Markup"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flex justify-center">\n  <div\n    class="animate-[wiggle_1s_ease-in-out_infinite] rounded-full bg-blue-500 h-16 w-16"\n  ></div>\n</div>\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"View"),":"),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-25-tailwind-animations/8-min.gif",alt:"tailwind animations"})),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,"In this article, We took a dive into ",(0,i.yg)("inlineCode",{parentName:"p"},"Tailwind")," built-in utility classes for animation as well as how to use ",(0,i.yg)("inlineCode",{parentName:"p"},"Tailwind")," CSS's theme configuration feature to add custom animations. We also learnt how to create one-off animations with ",(0,i.yg)("inlineCode",{parentName:"p"},"Tailwind")," arbitrary values.\nTailwind is an excellent ",(0,i.yg)("inlineCode",{parentName:"p"},"CSS")," framework, and its utility-first approach, combined with its theme extension features, makes it popular among developers."))}u.isMDXComponent=!0}}]);