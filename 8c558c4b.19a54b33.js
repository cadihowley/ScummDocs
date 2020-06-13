(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(144)),i=(n(146),{id:"_index",title:"GSOD 2020"}),c={id:"_index",title:"GSOD 2020",description:"Objectives",source:"@site/docs/_index.md",permalink:"/ScummDocs/_index",editUrl:"https://github.com/ScummDocs/docs/_index.md",sidebar:"someSidebar",next:{title:"What is ScummVM?",permalink:"/ScummDocs/about/about"}},u=[{value:"Objectives",id:"objectives",children:[]},{value:"Areas of Focus",id:"areas-of-focus",children:[]},{value:"Suggested documentation structure",id:"suggested-documentation-structure",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"objectives"},"Objectives"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"To produce high-quality end user documentation by consolidating large amounts of information from disparate sources and re-writing information for clarity and consistency. Documentation should be easy to understand for beginners, without being patronizing to tech-savvy users. "),Object(a.b)("li",{parentName:"ol"},"To create a documentation portal using a static-site generator such as Docusaurus or ReadtheDocs."),Object(a.b)("li",{parentName:"ol"},"To future-proof end user documentation by creating templates and detailed how-to instructions for future open source contributors.")),Object(a.b)("h3",{id:"areas-of-focus"},"Areas of Focus"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"New users need a comprehensive guide for installing ScummVM on any of the supported platforms, especially in cases where the install is not intuitive, or the user may not have a strong technical base. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Advanced users need additional behind-the-scenes options to tweak how their games run, including how to report any bugs. ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Information relating to each supported game should be in one place - a complete reference including, but not limited to;"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What is the game about?"),Object(a.b)("li",{parentName:"ul"},"If the user doesn't have the game, where can they get it?"),Object(a.b)("li",{parentName:"ul"},"Is there anything unusual the user needs to know about the install?"),Object(a.b)("li",{parentName:"ul"},"What are the engine or game-specific controls the user should know about?"),Object(a.b)("li",{parentName:"ul"},"Are there any known problems with the game when played via ScummVM?")),Object(a.b)("h3",{id:"suggested-documentation-structure"},"Suggested documentation structure"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Home Page\n|-- About ScummmVM\n|   |-- What is it?\n|   |-- How does it work?\n|   |-- Supported games\n|   |-- Supported platforms\n|   |-- Compatibility\n|   `-- Help the project\n|-- Installing ScummVM\n|   |-- Nintendo 3DS\n|   |-- AmigaOS\n|   |-- Android\n|   |-- (every)\n|   |-- (common)\n|   |-- (supported)\n|   `-- (platform)\n|-- Using ScummVM\n|   |-- The interface\n|   |-- Global settings\n|   |-- Game settings\n|   `-- Keyboard shortcuts\n|-- About the games\n|   |-- LucasArts games \n|   |-- Activision games\n|   |-- Adventuresoft/Horrorsoft games\n|   |-- Coktel Vision games\n|   |-- Sierra games\n|   `-- Other games\n|-- Advanced options\n|   |-- Cloud and LAN\n|   |-- Control Mapping\n|   |-- Configuration\n|   |-- Command line options\n|   |-- Music and sound\n|   `-- Render modes\n`-- Help\n    |-- FAQ\n    |-- Contacts\n    `-- Reporting a bug\n\n")))}l.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},145:function(e,t,n){"use strict";var r=n(0),o=n(34);t.a=function(){return Object(r.useContext)(o.a)}},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(145);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);