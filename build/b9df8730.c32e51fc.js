(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{127:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),r=a(6),i=(a(0),a(144)),o={id:"how_work",title:"How does ScummVM work?",sidebar_label:"How does it work?"},s={id:"about/how_work",title:"How does ScummVM work?",description:"Almost all adventure and role-playing games share some common features. The most basic ones are the resources used, which are in the game's data files:",source:"@site/docs/about/how_does_it_work.md",permalink:"/ScummDocs/about/how_work",editUrl:"https://github.com/ScummDocs/docs/about/how_does_it_work.md",sidebar_label:"How does it work?",sidebar:"someSidebar",previous:{title:"What is ScummVM?",permalink:"/ScummDocs/about/about"},next:{title:"Supported games",permalink:"/ScummDocs/about/supported_games"}},c=[{value:"The Scripting Language of a Game",id:"the-scripting-language-of-a-game",children:[]},{value:"Where does ScummVM fit in?",id:"where-does-scummvm-fit-in",children:[]},{value:"Advantages",id:"advantages",children:[]},{value:"Disadvantages",id:"disadvantages",children:[]}],l={rightToc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Almost all adventure and role-playing games share some common features. The most basic ones are the resources used, which are in the game's data files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Graphics"),Object(i.b)("li",{parentName:"ul"},"Actors (the sprites in the game)"),Object(i.b)("li",{parentName:"ul"},"Background images"),Object(i.b)("li",{parentName:"ul"},"Fonts"),Object(i.b)("li",{parentName:"ul"},"In-game animations"),Object(i.b)("li",{parentName:"ul"},"Objects"),Object(i.b)("li",{parentName:"ul"},"Videos"),Object(i.b)("li",{parentName:"ul"},"Sound"),Object(i.b)("li",{parentName:"ul"},"Synthesized music (e.g. MIDI)"),Object(i.b)("li",{parentName:"ul"},"Sound effects"),Object(i.b)("li",{parentName:"ul"},"Voices")),Object(i.b)("p",null,"Apart from the resources themselves, almost all games have their own scripting language. This simplifies things in the whole development process as it's then easier to assign tasks to specific people: Programmers deal with the code itself; game designers deal with writing scripts using the language that the game interpreter understands; graphics designers deal with the artistic part of the game; music composers with the audio, and so on. "),Object(i.b)("p",null,"Although the basic elements of each game are standard, each game implements them in a very different manner. The most important aspect of role-playing and adventure games is the way they work behind the scenes. This includes the kind of logic used and how this is implemented in each game, and the kind of interaction expected from the user. For instance, some games allow the player to use verbs on objects (for example, use object 1 with object 2) whereas other games just allow the player to single click on objects. "),Object(i.b)("p",null,"The resources themselves are not useful at all without the game logic, which is the most difficult part to implement in a game. In fact, there are many resource viewers which can be used to view resources from a large number of different games, but they don't deal with the logic behind those resources. "),Object(i.b)("h3",{id:"the-scripting-language-of-a-game"},"The Scripting Language of a Game"),Object(i.b)("p",null,"Each game uses its own scripting language, which is usually contained in the game's data files. This is usually high-level, and the game's interpreter itself (the game's executable file) is responsible for parsing the script commands from the game's logic scripts and doing all the actual work."),Object(i.b)("p",null,"Here is an example script of a hypothetical engine, where the game loads a scene, and then handles a case where the player picks up item A:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"startScene(1)\nload_actors()\nput_actor(actor_number, X, Y)\n...\nput_object(object_number, X, Y)\n...\nif (action_pickup) {\n  if (object_to_pickup() == object_A) {\n    actor_walk(X,Y)\n    actor_do_action(action_number)\n    put_object_in_inventory(object_A)\n    remove_object_from_scene(object_A)\n  }\n}\n  \nwhile (scene_not_ended) {\n  handle_actor_actions()\n}\nendScene()\n")),Object(i.b)("p",null,"Each engine tends to execute these scripts in a different way. Some engines have scripts for each object, while others might have a general script to do everything, and so on. "),Object(i.b)("p",null,"A game script can contain basic elements of the game's logic such as ",Object(i.b)("inlineCode",{parentName:"p"},"if")," ",Object(i.b)("inlineCode",{parentName:"p"},"else"),",and ",Object(i.b)("inlineCode",{parentName:"p"},"goto"),". It may also call functions directly from the executable itself. These are called script opcodes."),Object(i.b)("h3",{id:"where-does-scummvm-fit-in"},"Where does ScummVM fit in?"),Object(i.b)("p",null,"ScummVM is a project in which the original executable file of a given game is rewritten in C++, based on the game's original source code or by using reverse engineering techniques to see the code that is contained in the game's executable file. ScummVM's executable file can then be used to replace the game's original one, but of course the game's data files (graphics, audio, game scripts and so on) are needed to play the game itself. Therefore, ScummVM is NOT an emulator of a specific operating system."),Object(i.b)("h3",{id:"advantages"},"Advantages"),Object(i.b)("p",null,"Since each game's engine is fully rewritten, this has several advantages:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The game can run on many different platforms, thanks to ScummVM's portable platform backend."),Object(i.b)("li",{parentName:"ul"},"Game graphics can be improved with the use of several graphics filters (including super2xsai, supereagle, advmame2x, advmame3x, hq2x, hq3x and more)"),Object(i.b)("li",{parentName:"ul"},"Some bugs which existed in the original game's executable, or in specific scripts, can be fixed."),Object(i.b)("li",{parentName:"ul"},"It's possible to re-encode the game's audio files into popular formats, such as MP3, OGG or FLAC so that the game itself takes up much less space."),Object(i.b)("li",{parentName:"ul"},"LucasArts games have an improved menu and savegame system."),Object(i.b)("li",{parentName:"ul"},"Most ScummVM game engines allow the player to use more save game slots than the original interpreters did."),Object(i.b)("li",{parentName:"ul"},"In some games, ScummVM offers added functionality which did not exist in the original games. For example, it offers full mouse functionality in older Sierra AGI games, which had no mouse support."),Object(i.b)("li",{parentName:"ul"},"It's possible to listen to a supported game's MT-32 music score without an actual MT-32 external MIDI synthesizer module, through a sophisticated emulation system."),Object(i.b)("li",{parentName:"ul"},"ScummVM uses fewer system resources than an emulator, as games run directly in ScummVM and not through an emulated platform.")),Object(i.b)("h3",{id:"disadvantages"},"Disadvantages"),Object(i.b)("p",null,"As each game engine is fully rewritten, and it is impossible to check every facet of every game, there might be some bugs that were not present with the original game interpreter."),Object(i.b)("p",null,"The ScummVM bug tracker provides a way for users to submit any bugs they find to the ScummVM development team for rectification."),Object(i.b)("p",null,"For more information on bug tracking and reporting, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://bugs.scummvm.org"}),"Issue Tracker")," page on the ScummVM website. "))}m.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(a),p=n,b=u["".concat(o,".").concat(p)]||u[p]||h[p]||i;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);