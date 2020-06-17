(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(144)),l={id:"game_settings",title:"Game settings",sidebar_label:"Game settings"},b={id:"using/game_settings",title:"Game settings",description:"Each game can be configured to run using settings other than the global settings.",source:"@site/docs/using/game_settings.md",permalink:"/ScummDocs/using/game_settings",editUrl:"https://github.com/ScummDocs/docs/using/game_settings.md",sidebar_label:"Game settings",sidebar:"someSideBar",previous:{title:"Global settings",permalink:"/ScummDocs/using/global_settings"},next:{title:"Keyboard shortcuts",permalink:"/ScummDocs/using/keyboard"}},o=[{value:"Game tab",id:"game-tab",children:[]},{value:"Graphics tab",id:"graphics-tab",children:[]},{value:"Audio tab",id:"audio-tab",children:[]},{value:"Volume tab",id:"volume-tab",children:[]},{value:"MIDI tab",id:"midi-tab",children:[]},{value:"Paths tab",id:"paths-tab",children:[]}],c={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each game can be configured to run using settings other than the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../using/global_settings"}),"global settings"),". "),Object(i.b)("p",null,"To open the game settings window, highlight a game in the main Launcher window, and click on ",Object(i.b)("strong",{parentName:"p"},"Edit Game"),".   This window also opens any time a game is added to the Launcher."),Object(i.b)("p",null,"There are many settings, and they are separated into tabs:"),Object(i.b)("h2",{id:"game-tab"},"Game tab"),Object(i.b)("p",null,"Use the game tab to display and change information about how the game is identified by ScummVM."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Shows the short name of the game. This ID can be used for launching the game from the command line.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This field shows the full title of the game, as well as some basic information such as original platform and language.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Language"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This option is only applicable to Maniac Mansion, Zak McKracken, The Dig, The Curse of Monkey Island, Beneath a Steel Sky, Broken Sword 1, and Simon the Sorcerer 1 and 2. With the exception of Beneath a Steel Sky, Broken Sword 1, and multilanguage versions of Goblins games and Nippon Safes Inc., using this option does not change the language of the game, which is usually hardcoded, but rather is only used to select the appropriate font. For example, for a German version of a game, a font with umlauts. The Dig and The Curse of Monkey Island are another exception: the non-English versions of these games can be set to English, which only affect the language of subtitles. The game speech will remain the same.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Platform"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the original platform of the game.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"graphics-tab"},"Graphics tab"),Object(i.b)("p",null,"Use the graphics tab to change how the game looks when it is played."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override global graphic settings"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check this box to make the game use custom settings instead of global settings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Graphics mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changes the graphic filter the game uses. This option has to be used to enable a graphic filter for a game with an original resolution higher than 320x200 or 320x240, because the corresponding global settings does not apply. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"page"}),"Graphic filters")," page")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Render mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Changes the render mode the game uses. See the ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"page"}),"Render Modes")," page.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Aspect ratio correction"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Most games supported by ScummVM were designed to be played at a screen resolution of 320x200 using rectangular pixels (higher than they were wide). Most modern systems use square pixels, which means that the image appears to be squeezed vertically and the characters look wider and shorter than they should. If this option is checked, ScummVM corrects for this by stretching the game window to a resolution of 320x240, which looks the same as 320x200 on old monitors. As with Graphic filters, this takes a little processing power to achieve. Aspect ratio correction can be combined with a Graphic filter.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fullscreen mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Switches between playing games in a window, or playing them in fullscreen mode. Switch between the two by using ",Object(i.b)("inlineCode",{parentName:"td"},"Alt+F5")," while in a game.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"audio-tab"},"Audio tab"),Object(i.b)("p",null,"Use the audio tab to change the sound output in the game."),Object(i.b)("p",null,"For more information about any of the audio settings, see the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"page"}),"Music and sound")," page."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override global audio settings"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check this box to make the game use custom settings instead of the global settings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Music driver"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The method ScummVM uses to output MIDI music. For more details, see the section on music drivers.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AdLib Emulator"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The emulator used by ScummVM to generate the music when the AdLib music driver is selected. Two emulators are currently available: MAME OPL emulator was the emulator that was used up to version 0.13.1, and the DOSBox OPL emulator has been added but is still experimental.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Output rate"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The sample rate at which ScummVM plays sounds, including music if using an emulation music driver such as the AdLib music driver.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text and Speech"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For games with digitized speech, setting allows the user to decide whether to play the game with speech and without any subtitles, or with subtitles displaying the words spoken in the digitized speech but not the speech, or with both.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subtitle speed"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the length of time that the subtitles are displayed on screen: the lower the speed is set, the longer the subtitles are displayed.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"volume-tab"},"Volume tab"),Object(i.b)("p",null,"Use the volume tab to set the relative volumes for various sounds in the game."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override global volume settings"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check this box to make the game use custom settings instead of the global ones.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Music volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the music played back in the game. This is usually MIDI music played back with one of the music drivers, but some games use digitized music.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SFX volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the sound effects within the game.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Speech volume"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the volume of the digitized speech in the game, if it has any.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mute All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mutes all sounds.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"midi-tab"},"MIDI tab"),Object(i.b)("p",null,"Use the MIDI tab to change settings about the MIDI music in the game."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override global MIDI settings"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check this box to make the game use custom settings instead of the global settings.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Soundfont"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some music drivers require you to provide them with a Soundfont, which contains samples of instruments for the device to play back. This setting allows you to choose one.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mixed AdLib/MIDI mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Some games contain sound effects that are exclusive to the AdLib soundtrack. For these games, you may wish to use this mode in order to combine MIDI music with AdLib sound effects.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True Roland MT-32 (disable GM emulation)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScummVM will treat your device as a real MT-32. Because the instrument mappings and system exclusive commands of the MT-32 vary from those of General MIDI devices, you should only enable this option if you are using an actual Roland MT-32, LAPC-I, CM-64, CM-32L, CM-500, or GS device with an MT-32 map.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable Roland GS Mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ScummVM will initialize your GS-compatible device with settings that mimic the MT-32's reverb, (lack of) chorus, pitch bend sensitivity, etc. If it is specified in conjunction with True Roland MT-32 (above), ScummVM will select the MT-32-compatible map and drumset on your GS device. This setting works better than default GM or GS emulation with games that do not have custom instrument mappings (Loom and The Secret of Monkey Island). You should only specify both settings if you are using a GS device that has an MT-32 map, e.g. SC-55, SC-88, SC-8820, etc. Please note that Roland GS Mode is automatically disabled in both Day of the Tentacle and Sam & Max Hit the Road, since they use General MIDI natively. If neither of the above settings is enabled, ScummVM will initialize your device in General MIDI mode and use GM emulation in games with MT-32 soundtracks.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MIDI gain"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adjusts the relative volume of the general MIDI music. This is only supported by some of the music drivers.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"paths-tab"},"Paths tab"),Object(i.b)("p",null,"Use the paths tab to tell ScummVM where to look for particular files of the game."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Control"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Save Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The folder in which ScummVM will store the game's saved games. If this is not set, the saved games will be stored in the default directory.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extra Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the folder that ScummVM will look in for various extra files. These could include one or more of:",Object(i.b)("ul",null,Object(i.b)("li",null,"Additional datafiles required for certain games (e.g. kyra.dat)"),Object(i.b)("li",null,"Soundfonts (see MIDI tab)"),Object(i.b)("li",null,"MT-32 ROMs (see MT-32 emulation)")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Game Path"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The folder in which the game's data files are stored.")))),Object(i.b)("hr",null))}s.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?r.a.createElement(h,b(b({ref:t},c),{},{components:a})):r.a.createElement(h,b({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);