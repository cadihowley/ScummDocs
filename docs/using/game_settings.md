---
id: game_settings
title: Game settings
sidebar_label: Game settings

---

We can run any of our games using specific settings, overriding the defaults we have set up in the Options menu, by configuring that game separately in the **Edit Game** window. We get to this window whenever we add a game to the Launcher, or highlight a game and click on the **Edit Game** button on the right-hand side of the Launcher window. There are many options, and they are separated into tabs:

## Game tab

The Game tab is where we see and change how the game is identified by ScummVM.

|Control	|Description|
|-|-|
|ID|	This field shows the so-called short name of the game. This ID can be used for launching the game from the command line.|
|Name	|This field shows the full title of the game, as well as some basic info, such as original platform, language, etc.|
|Language|	This option is only applicable to Maniac Mansion, Zak McKracken, The Dig, The Curse of Monkey Island, Beneath a Steel Sky, Broken Sword 1, and Simon the Sorcerer 1 and 2. With the exception of Beneath a Steel Sky, Broken Sword 1, and multilanguage versions of Goblins games and Nippon Safes Inc., using this option does not change the language of the game (which is usually hardcoded), but rather is only used to select the appropriate font (e.g. for a German version of a game, the one with umlauts). The Dig and The Curse of Monkey Island are another exception: the non-English versions of these games can be set to English. This, however, will only affect the language of subtitles; the game speech will remain the same.|
|Platform	|This option allows us to specify the original platform of the game.|

---

## Graphics tab

The graphics tab allows us to change various things about how the game looks when it is played.

|Control	|Description|
|-|-|
|Override global graphic settings|	We need to check this box to make the game use custom settings instead of the global ones.|
|Graphics mode	|This allows us to change the graphic filter the game uses. This option has to be used to enable a graphic filter for a game whose original resolution is higher than 320x200 or 320x240 (e.g. 640x480), because the corresponding global option does not apply to them. See the Graphic filters section of the manual for more detail|
|Render mode	|This allows us to change the render mode the game uses. See the Render Modes section of the manual for more detail|
|Aspect ratio correction|	Most games supported by ScummVM were designed to be played at a screen resolution of 320x200 using rectangular pixels (higher than they were wide). Most modern systems however are using square pixels, which means that the image appears to be squeezed vertically and the characters look wider and shorter than they should. If this option is checked, ScummVM corrects for this by stretching the game window to a resolution of 320x240 which with square pixels looks the same as 320x200 on old monitors. As with Graphic filters, this takes a little processing power to achieve. We can combine this with a Graphic filter, and for example with a scaling of x2 the window size will be 640x480 instead of 640x400.|
|Fullscreen mode|	Switches between playing games in a window, or playing them in fullscreen mode. Switch between the two using ```Alt+F5``` while in a game.|

---

## Audio tab


The audio tab in the options allows us to change various things about the sound output in the game.

|Control	|Description|
|-|-|
|Override global audio settings|	We need to check this box to make the game use custom settings instead of the global ones.|
|Music driver	|This is the method ScummVM uses to output MIDI music. For more details, see the section on music drivers.|
|AdLib Emulator	|This is the emulator used by ScummVM to generate the music when the AdLib music driver is selected. Two emulators are currently available. MAME OPL emulator was the emulator that was used up to version 0.13.1. More recently the DOSBox OPL emulator has been added (but is still experimental).|
|Output rate	|This is the sample rate at which ScummVM plays back sounds (including music if using an emulation music driver, such as the AdLib music driver). For more information, see the Output sample rate section|
|Text and Speech	|For games with digitized speech, this control allows the user to decide whether to play the game with speech and without any subtitles, with subtitles displaying the words spoken in the digitized speech but not the speech, or with both.|
|Subtitle speed	|This allows the user to adjust the length of time that the subtitles are displayed on screen: the lower the speed is set, the longer the subtitles appear for.|

---

## Volume tab

The volume tab allows us to set the relative volumes for the various types of sounds in the game.

|Control	|Description|
|-|-|
|Override global volume settings|	We need to check this box to make the game use custom settings instead of the global ones.|
|Music volume	|The volume of the music played back in the game. This is usually MIDI music played back with one of the music drivers, but some games use digitized music.|
|SFX volume	|The volume of the sound effects within the game.|
|Speech volume	|The volume of the digitized speech in the game, if it has any.|
|Mute All	|Mute all sounds.|

---

## MIDI tab

The MIDI tab lets us change various settings about the MIDI music played back in the game.

|Control	|Description|
|-|-|
|Override global MIDI settings	|We need to check this box to make the game use custom settings instead of the global ones.|
|Soundfont	|Some music drivers require you to provide them with a Soundfont, which contains samples of instruments for the device to play back. This setting allows you to choose one.|
|Mixed AdLib/MIDI mode	|Some games contain sound effects that are exclusive to the AdLib soundtrack. For these games, you may wish to use this mode in order to combine MIDI music with AdLib sound effects.
|True Roland MT-32 (disable GM emulation)	|ScummVM will treat your device as a real MT-32. Because the instrument mappings and system exclusive commands of the MT-32 vary from those of General MIDI devices, you should only enable this option if you are using an actual Roland MT-32, LAPC-I, CM-64, CM-32L, CM-500, or GS device with an MT-32 map.|
|Enable Roland GS Mode	|ScummVM will initialize your GS-compatible device with settings that mimic the MT-32's reverb, (lack of) chorus, pitch bend sensitivity, etc. If it is specified in conjunction with True Roland MT-32 (above), ScummVM will select the MT-32-compatible map and drumset on your GS device. This setting works better than default GM or GS emulation with games that do not have custom instrument mappings (Loom and The Secret of Monkey Island). You should only specify both settings if you are using a GS device that has an MT-32 map, e.g. SC-55, SC-88, SC-8820, etc. Please note that Roland GS Mode is automatically disabled in both Day of the Tentacle and Sam & Max Hit the Road, since they use General MIDI natively. If neither of the above settings is enabled, ScummVM will initialize your device in General MIDI mode and use GM emulation in games with MT-32 soundtracks.|
|MIDI gain	|The relative volume of the general MIDI music. This is only supported by some of the music drivers.|

---

## Paths tab

This part of the options lets the user tell ScummVM where to look for particular files of the game.

|Control	|Description|
|-|-|
|Save Path	|This is the folder in which ScummVM will store the game's saved games. If this is not set, the saved games will be stored in the default directory.|
|Extra Path	|This is the folder that ScummVM will look in for various "extra" files. These could include one or more of:<ul><li>Additional datafiles required for certain games (e.g. kyra.dat)</li><li>Soundfonts (see MIDI tab)</li><li>MT-32 ROMs (see MT-32 emulation)</li></ul>|
|Game Path|	The folder where the game's data files are stored.|

---

