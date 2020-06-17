(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(144)),l={id:"global_settings",title:"Global settings",sidebar_label:"Global settings"},b={id:"using/global_settings",title:"Global settings",description:"Games will follow the global game settings unless game-specific settings are applied.",source:"@site/docs/using/global_settings.md",permalink:"/ScummDocs/using/global_settings",editUrl:"https://github.com/ScummDocs/docs/using/global_settings.md",sidebar_label:"Global settings",sidebar:"someSideBar",previous:{title:"The ScummVM Interface",permalink:"/ScummDocs/using/launcher"},next:{title:"Game settings",permalink:"/ScummDocs/using/game_settings"}},o=[{value:"Graphics tab",id:"graphics-tab",children:[]},{value:"Audio tab",id:"audio-tab",children:[]},{value:"Volume tab",id:"volume-tab",children:[]},{value:"MIDI tab",id:"midi-tab",children:[]},{value:"Paths tab",id:"paths-tab",children:[]},{value:"Misc tab",id:"misc-tab",children:[]}],c={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Games will follow the global game settings unless ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../using/game_settings"}),"game-specific settings")," are applied."),Object(i.b)("p",null,"To open the global settings window, click ",Object(i.b)("strong",{parentName:"p"},"Options")," in the main Launcher window. "),Object(i.b)("p",null,"There are many settings, and they are separated into tabs:"),Object(i.b)("h2",{id:"graphics-tab"},"Graphics tab"),Object(i.b)("p",null,"Use the graphics tab to change how games look when they are played."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Graphics mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changes the graphics filter that ScummVM uses, for example, to scale the game to a higher resolution. The option has no effect on games with an original resolution higher than 320x200 or 320x240. Such games should be configured separately. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"page"}),"Graphics filters"),"page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Render mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changes the render mode that ScummVM uses. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"page"}),"Render modes"),"page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aspect ratio correction"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Most games supported by ScummVM were designed to be played at a screen resolution of 320x200 using rectangular pixels (higher than they were wide). Most modern systems use square pixels, which means that the image appears to be squeezed vertically and the characters look wider and shorter than they should. If this option is checked, ScummVM corrects for this by stretching the game window to a resolution of 320x240, which looks the same as 320x200 on old monitors. As with Graphic filters, this takes a little processing power to achieve. Aspect ratio correction can be combined with a Graphic filter.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fullscreen mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Switches between playing games in a window, or playing them in fullscreen mode. Switch between the two by using ",Object(i.b)("inlineCode",{parentName:"td"},"Alt+Enter")," while in a game.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"audio-tab"},"Audio tab"),Object(i.b)("p",null,"Use the audio tab to change the sound output for games.\nFor more information about any of the audio settings, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"page"}),"Music and sound")," page.\n|Control|\tDescription|\n|-|-|\n|Music driver|\tThe method that ScummVM uses to output MIDI music.|\n|AdLib Emulator|\tThe emulator used by ScummVM to generate the music when the AdLib music driver is selected. Two emulators are currently available: MAME OPL emulator was the emulator that was used up to version 0.13.1, and the DOSBox OPL emulator has been added, but is still experimental.|\n|Output rate\t|The sample rate at which ScummVM plays sounds, including music if using an emulation music driver such as the AdLib music driver).|\n|Text and Speech\t|For games with digitized speech, this setting allows the user to decide whether to play the game with speech and without any subtitles, or with subtitles displaying the words spoken in the digitized speech but not the speech, or with both.|\n|Subtitle speed\t|Adjusts the length of time that the subtitles are displayed on screen. The lower the speed is set, the longer the subtitles are displayed.|"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"volume-tab"},"Volume tab"),Object(i.b)("p",null,"Use the volume tab to set the relative volumes for various sounds."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Music volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the music played back in games. This is usually MIDI music played back with one of the music drivers, but some games use digitized music.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SFX volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the sound effects within the games.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Speech volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the digitized speech in the game, if it has any.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mute All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mutes all sounds.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"midi-tab"},"MIDI tab"),Object(i.b)("p",null,"Use the MIDI tab to change settings about the MIDI music."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soundfont"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some music drivers require you to provide them with a Soundfont, which contains samples of instruments for the device to play back. This setting allows you to choose one.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mixed AdLib/MIDI mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some games contain sound effects that are exclusive to the AdLib soundtrack. For these games, you may wish to use this mode in order to combine MIDI music with AdLib sound effects.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True Roland MT-32 (disable GM emulation)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScummVM will treat your device as a real MT-32. Because the instrument mappings and system exclusive commands of the MT-32 vary from those of general MIDI devices, you should only enable this option if you are using an actual Roland MT-32, LAPC-I, CM-64, CM-32L, CM-500, or GS device with an MT-32 map.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable Roland GS Mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScummVM will initialize your GS-compatible device with settings that mimic the MT-32's reverb, (lack of) chorus, pitch bend sensitivity, etc. If it is specified in conjunction with True Roland MT-32 (above), ScummVM will select the MT-32-compatible map and drumset on your GS device. This setting works better than default GM or GS emulation with games that do not have custom instrument mappings (Loom and The Secret of Monkey Island). You should only specify both settings if you are using a GS device that has an MT-32 map, e.g. SC-55, SC-88, SC-8820, etc. Please note that Roland GS Mode is automatically disabled in both Day of the Tentacle and Sam & Max Hit the Road, since they use General MIDI natively.If neither of the above settings is enabled, ScummVM will initialize your device in General MIDI mode and use GM emulation in games with MT-32 soundtracks.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MIDI gain"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the relative volume of the general MIDI music. This is only supported by some of the music drivers.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"paths-tab"},"Paths tab"),Object(i.b)("p",null,"Use the paths tab to tell ScummVM where to look for particular files."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Save Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default folder in which ScummVM will store saved games. If this is not set, saved games will generally be stored in the current directory. Exceptions to this include: ",Object(i.b)("ul",null,Object(i.b)("li",null,"Windows Vista and up ",Object(i.b)("inlineCode",{parentName:"td"},"\\Users\\username\\AppData\\Roaming\\ScummVM\\Saved games\\")),Object(i.b)("li",null,"Windows 2000 and XP ",Object(i.b)("inlineCode",{parentName:"td"},"\\Documents and Settings\\username\\Application Data\\ScummVM\\Saved games\\")),Object(i.b)("li",null,"Mac OS X ",Object(i.b)("inlineCode",{parentName:"td"},"$HOME/Documents/ScummVM Savegames/")),Object(i.b)("li",null,"other UNIX variants ",Object(i.b)("inlineCode",{parentName:"td"},"$HOME/.scummvm/")),Object(i.b)("li",null,"iPhone ",Object(i.b)("inlineCode",{parentName:"td"},"/private/var/mobile/Library/ScummVM/Savegames"))))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extra Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the folder that ScummVM will look in for various extra files. These could include one or more of: ",Object(i.b)("ul",null,Object(i.b)("li",null,"Additional datafiles required for certain games (e.g. kyra.dat)"),Object(i.b)("li",null,"Soundfonts (see MIDI tab)"),Object(i.b)("li",null,"MT-32 ROMs (see MT-32 emulation)")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Theme Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The folder that additional themes for the ScummVM Launcher are stored in")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"misc-tab"},"Misc tab"),Object(i.b)("p",null,"The Misc tab contains options that don't belong on any of the other tabs."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Theme"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changes the visual appearance of the ScummVM Launcher")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GUI Renderer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Defines how the ScummVM GUI is rendered; normal or antialiased.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Autosave"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"In some games (namely Beneath a Steel Sky, Flight of the Amazon Queen, and all SCUMM games), Adjusts the time period that ScummVM waits between autosaves. The default setting is 5 minutes. Note that this is only available in some games (Beneath a Steel Sky, Flight of the Amazon Queen, and all SCUMM games)")))))}s.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.a.createElement(h,b(b({ref:t},c),{},{components:a})):r.a.createElement(h,b({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);