(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),i=(a(0),a(144)),c=a(146),o={id:"raspberrypi",title:"Installation guide: Raspberry Pi",sidebar_label:"Raspberry Pi"},l={id:"installation/raspberrypi",title:"Installation guide: Raspberry Pi",description:"System requirements",source:"@site/docs/installation/raspberrypi.md",permalink:"/ScummDocs/installation/raspberrypi",editUrl:"https://github.com/ScummDocs/docs/installation/raspberrypi.md",sidebar_label:"Raspberry Pi",sidebar:"someSideBar",previous:{title:"GSOD Proposal 2020",permalink:"/ScummDocs/proposal"},next:{title:"The ScummVM Interface",permalink:"/ScummDocs/using/launcher"}},s=[{value:"System requirements",id:"system-requirements",children:[]},{value:"Downloading and installing ScummVM",id:"downloading-and-installing-scummvm",children:[]},{value:"Loading games onto the Raspberry Pi",id:"loading-games-onto-the-raspberry-pi",children:[]},{value:"Adding games to ScummVM",id:"adding-games-to-scummvm",children:[]},{value:"Launching games",id:"launching-games",children:[]}],b={rightToc:s};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"system-requirements"},"System requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Raspberry Pi running Raspberry Pi OS"),Object(i.b)("li",{parentName:"ul"},"Bluetooth or wired speaker (optional)")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"downloading-and-installing-scummvm"},"Downloading and installing ScummVM"),Object(i.b)("p",null,"Go to the Terminal and run the following on the command line. This downloads and installs the latest Raspberry OS compatible version of ScummVM. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo apt install -y scummvm\n")),Object(i.b)("p",null,"To check that ScummVM has been installed correctly, run the following on the command line. This shows the installed version. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"scummvm -v\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"loading-games-onto-the-raspberry-pi"},"Loading games onto the Raspberry Pi"),Object(i.b)("p",null,"ScummVM needs access to the data files for each game. A comprehensive list of required data files for each game can be found on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.scummvm.org/index.php?title=Datafiles"}),"ScummVM Wiki Datafiles")," page. ScummVM can run the game data files from any directory it has access to, including external media. "),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For ease of use, you can create a dedicated games directory into which subdirectories containing game files can be copied. "),Object(i.b)("p",{parentName:"div"},"The resulting directory structure will look somewhat like this:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"mygames\n|-- myfirstgame\n|   |-- readme.txt\n|   |-- firstgame.cpt\n|   |-- firstgame.dnr\n|   `-- firstgame.dsk\n`-- mysecondgame\n    |-- secondgame.1c\n    `-- readme.txt\n")))),Object(i.b)("p",null,"For games on floppies or CDs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the data files are accessible, transfer these to the Raspberry Pi."),Object(i.b)("li",{parentName:"ul"},"If the data files are not accessible, run the installer on the platform the game was designed for, and then transfer the files to the Raspberry Pi.")),Object(i.b)("p",null,"For games downloaded from digital distributors such as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"gog.com"}),"GOG.com"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://store.steampowered.com"}),"Steam"),", or from various ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.scummvm.org/index.php?title=Where_to_get_the_games#Freeware_Games"}),"freeware")," sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Run the installer and transfer the files to the Raspberry Pi, or"),Object(i.b)("li",{parentName:"ul"},"If the data files are supplied as a .zip file, extract the archive. Archives can be downloaded directly onto the Raspberry Pi, as there is no need to run the installer. ")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If data files need to be transferred from another device onto the Raspberry Pi, there are a number of options:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Using external media such as a hard-drive or USB stick"),Object(i.b)("li",{parentName:"ul"},"Using a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://pimylifeup.com/raspberry-pi-samba/"}),"Samba server")," or  ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.raspberrypi.org/documentation/remote-access/ftp.md"}),"FTP"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"adding-games-to-scummvm"},"Adding games to ScummVM"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"From the Applications menu, select ",Object(i.b)("strong",{parentName:"li"},"Games","\xa0",">","\xa0","ScummVM")," to open the Launcher window.")),Object(i.b)("img",{alt:" ",src:Object(c.a)("img/RaspberryPi/launch_scummvm_rpi.jpg")}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"In the Launcher window, click ",Object(i.b)("strong",{parentName:"li"},"Add Game"),". This opens a file browser. To add multiple games at once, hold ",Object(i.b)("inlineCode",{parentName:"li"},"Shift")," while clicking ",Object(i.b)("strong",{parentName:"li"},"Add Game"),".")),Object(i.b)("img",{alt:" ",src:Object(c.a)("img/RaspberryPi/blank_launcher_rpi.jpg")}),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Use the file browser to locate the folder containing the game you wish to add. Double click on a folder to open it, and use ",Object(i.b)("strong",{parentName:"li"},"Go up")," to go back up one level. ")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Once you have selected the folder that contains the data files, click ",Object(i.b)("strong",{parentName:"li"},"Choose"),". ")),Object(i.b)("img",{alt:" ",src:Object(c.a)("img/RaspberryPi/adding_games_rpi.jpg")}),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"A dialog opens to allow configuration of various settings for the game. These can be reconfigured at any time, but for now everything should work at the default settings. Click ",Object(i.b)("strong",{parentName:"li"},"Ok"),". ")),Object(i.b)("img",{alt:" ",src:Object(c.a)("img/RaspberryPi/game_info_rpi.jpg")}),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Added games are now ready to launch!")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"launching-games"},"Launching games"),Object(i.b)("p",null,"There are two ways to launch a game; from the Launcher and from the command line. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Launcher:")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"From the Applications menu, select ",Object(i.b)("strong",{parentName:"li"},"Games","\xa0",">","\xa0","ScummVM")," to start the Launcher. "),Object(i.b)("li",{parentName:"ul"},"Select a game and click ",Object(i.b)("strong",{parentName:"li"},"Start")," to play. ")),Object(i.b)("img",{class:"gif",alt:" ",src:Object(c.a)("img/RaspberryPi/launch_launcher.gif")}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Command line:")," "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To launch a game with no additional options, run ",Object(i.b)("inlineCode",{parentName:"li"},"scummvm")," followed by the game id.   "),Object(i.b)("li",{parentName:"ul"},"To launch a game with options, run",Object(i.b)("inlineCode",{parentName:"li"}," scummvm")," , followed by any desired options, and then the game ID. For more information, see the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../advanced/command_line"}),"Command line options")," page.")),Object(i.b)("p",null,"To find the game ID, go to the game-specific settings. For more information, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#config"}),"Settings")," section."),Object(i.b)("p",null,"In the following example, Flight of the Amazon Queen will be launched in full screen:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"scummvm -f queen\n")),Object(i.b)("img",{class:"gif",alt:" ",src:Object(c.a)("img/RaspberryPi/launch_commandline.gif")}))}m.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(a),d=n,u=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},145:function(e,t,a){"use strict";var n=a(0),r=a(34);t.a=function(){return Object(n.useContext)(r.a)}},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(145);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);