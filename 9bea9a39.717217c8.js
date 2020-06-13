(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(6),o=(a(0),a(144)),r=a(146),l={id:"launcher",title:"The ScummVM Interface",sidebar_label:"The interface"},s={id:"using/launcher",title:"The ScummVM Interface",description:"The Launcher window",source:"@site/docs/using/launcher.md",permalink:"/ScummDocs/using/launcher",editUrl:"https://github.com/ScummDocs/docs/using/launcher.md",sidebar_label:"The interface",sidebar:"someSidebar",previous:{title:"Installation guide for the Raspberry Pi",permalink:"/ScummDocs/installation/raspberrypi"},next:{title:"Global settings",permalink:"/ScummDocs/using/global_settings"}},c=[{value:"The Launcher window",id:"the-launcher-window",children:[]},{value:"The load window",id:"the-load-window",children:[]},{value:"The option window",id:"the-option-window",children:[]},{value:"The game settings window",id:"the-game-settings-window",children:[]},{value:"The Global Main Menu",id:"the-global-main-menu",children:[]}],u={rightToc:c};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-launcher-window"},"The Launcher window"),Object(o.b)("p",null,"The main ScummVM window is called the Launcher. You get to the Launcher whenever you start ScummVM without using command-line parameters to launch a game directly."),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/InterfaceMainWindow.png")}),Object(o.b)("p",null,"The big area on the left lists the games you have added to ScummVM. Besides showing the titles of those games, this list usually offers some additional information about each game, such as original platform, language, etc. You can highlight any game on the list by typing the first letter(s) of its title, or by simply clicking on it."),Object(o.b)("p",null,"To the right of the list you can see a number of buttons. In brief, their functions are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Start")," - launches the highlighted game"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Load Game")," - allows you to load a previously saved state for the highlighted game (if supported)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Add Game")," - allows you to add a game to the list; when you press Shift, the Add Game button turns into Mass Add, which can be used to add several games in one go"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Edit Game")," - allows you to configure the highlighted game, overriding the global options"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Remove Game")," - removes the highlighted game from the list"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Options")," - allows you to configure global game settings, as well as a number of ScummVM options"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"About")," - shows credits and miscellaneous information about your version of ScummVM"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Quit")," - closes the Launcher (quits the ScummVM application)")),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/Quicksearch.png")}),Object(o.b)("p",null,'Just above the list of games, next to a magnifying glass icon, you can see a small input box. This is Quick Search - it allows you to filter your list of added games by a desired expression. For instance, you can type "Monkey Island" to quickly locate all "Monkey Island" games on the list, or you can type "German" if you wish to play a game in German - the uses are countless. There is no need for you to press anything to apply the filter you have typed: it is applied automatically on the fly. Also the filter is not case sensitive which means if you type "demo" it will display both the items that contain "demo" and those that contain "Demo". If you want to clear the filter and see the full list of your games, just press the "C" button next to the input box. '),Object(o.b)("hr",null),Object(o.b)("h2",{id:"the-load-window"},"The load window"),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/Loadlist.png")}),Object(o.b)("p",null,"This menu allows you to run the highlighted game from a previously saved state straight from the Launcher, without having to start the game first. Here you can usually see the names of your savegames, their timestamps and screenshots to aid you in finding the exact state. When you have located the desired saved game, just select it and press Load to launch the game using that state. Besides loading a previous state, you can also delete obsolete saved games by highlighting them and clicking Delete."),Object(o.b)("p",null,"Note that there are games that do not support this feature altogether, or whose saved states lack some information (e.g. playtime, screenshots). "),Object(o.b)("hr",null),Object(o.b)("h2",{id:"the-option-window"},"The option window"),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/Graphicstab.png")}),Object(o.b)("p",null,"This menu allows you to define default game options, as well as change a number of the ScummVM Launcher's settings. For more details on how to fine-tune ScummVM, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../using/general_options"}),"General options")," page."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"the-game-settings-window"},"The game settings window"),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/Configdone.png")}),Object(o.b)("p",null,"You see this game configuration window whenever you add a game to the Launcher or click on ",Object(o.b)("strong",{parentName:"p"},"Edit Game")," button. Here you can configure a game individually by overriding the default game settings you have set in the Launcher's Options, as well as change the game's language and original platform (if applicable). For more information, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../using/game_settings"}),"Game settings")," page. "),Object(o.b)("hr",null),Object(o.b)("h2",{id:"the-global-main-menu"},"The Global Main Menu"),Object(o.b)("img",{alt:" ",src:Object(r.a)("img/Launcher/Generalmenu.png")}),Object(o.b)("p",null,"The Global Menu (or GMM for Global Main Menu) is a feature that premiered in ScummVM 0.13.0. It is available in all games by pressing ",Object(o.b)("inlineCode",{parentName:"p"},"Crtl+F5")," and provides the following features:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Resume:")," close the GMM and resume the game."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Load:")," load a game state (this is not available in all games)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Save:")," save a game state (this is not available in all games)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Options:")," change some options to play the game (e.g. music volume, subtitles speed)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"About:")," display the ScummVM About box (also available from the The Launcher)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Help:")," displays a list of key commands (not available in all engines)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Return to Launcher:")," quit the game and return to The Launcher (not available in all engines)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Quit:")," quit the game and ScummVM and return to the Operating System.")),Object(o.b)("p",null,"In some games you can still access the original game menu by using ",Object(o.b)("inlineCode",{parentName:"p"},"Alt+F5"),". You can save and load games using this, however it is not intended for this purpose, and may even crash ScummVM in some games. "))}m.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,g=m["".concat(r,".").concat(b)]||m[b]||h[b]||o;return a?i.a.createElement(g,l(l({ref:t},c),{},{components:a})):i.a.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},145:function(e,t,a){"use strict";var n=a(0),i=a(34);t.a=function(){return Object(n.useContext)(i.a)}},146:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(145);function i(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}}}]);