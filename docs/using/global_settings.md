---
id: global_settings
title: Global settings
sidebar_label: Global settings
---
Games will follow the global game settings unless [game-specific settings](../using/game_settings) are applied.

To open the global settings window, click **Options** in the main Launcher window. 

There are many settings, and they are separated into tabs:

## Graphics tab

Use the graphics tab to change how games look when they are played.

|Control	|Description|
|-|-|
|Graphics mode	|Changes the graphics filter that ScummVM uses, for example, to scale the game to a higher resolution. The option has no effect on games with an original resolution higher than 320x200 or 320x240. Such games should be configured separately. See the [Graphics filters](page)page.|
|Render mode|	Changes the render mode that ScummVM uses. See the [Render modes](page)page. |
|Aspect ratio correction	|Most games supported by ScummVM were designed to be played at a screen resolution of 320x200 using rectangular pixels (higher than they were wide). Most modern systems use square pixels, which means that the image appears to be squeezed vertically and the characters look wider and shorter than they should. If this option is checked, ScummVM corrects for this by stretching the game window to a resolution of 320x240, which looks the same as 320x200 on old monitors. As with Graphic filters, this takes a little processing power to achieve. Aspect ratio correction can be combined with a Graphic filter. |
|Fullscreen mode	|Switches between playing games in a window, or playing them in fullscreen mode. Switch between the two by using ```Alt+Enter``` while in a game.|

---

## Audio tab

Use the audio tab to change the sound output for games.
For more information about any of the audio settings, see the [Music and sound](page) page.
|Control|	Description|
|-|-|
|Music driver|	The method that ScummVM uses to output MIDI music.|
|AdLib Emulator|	The emulator used by ScummVM to generate the music when the AdLib music driver is selected. Two emulators are currently available: MAME OPL emulator was the emulator that was used up to version 0.13.1, and the DOSBox OPL emulator has been added, but is still experimental.|
|Output rate	|The sample rate at which ScummVM plays sounds, including music if using an emulation music driver such as the AdLib music driver).|
|Text and Speech	|For games with digitized speech, this setting allows the user to decide whether to play the game with speech and without any subtitles, or with subtitles displaying the words spoken in the digitized speech but not the speech, or with both.|
|Subtitle speed	|Adjusts the length of time that the subtitles are displayed on screen. The lower the speed is set, the longer the subtitles are displayed.|

---


## Volume tab

Use the volume tab to set the relative volumes for various sounds.

|Control	|Description|
|-|-|
|Music volume|	Adjusts the volume of the music played back in games. This is usually MIDI music played back with one of the music drivers, but some games use digitized music.|
|SFX volume|	Adjusts the volume of the sound effects within the games.|
|Speech volume	|Adjusts the volume of the digitized speech in the game, if it has any.|
|Mute All	|Mutes all sounds.|

---


## MIDI tab

Use the MIDI tab to change settings about the MIDI music.

|Control	|Description|
|-|-|
|Soundfont|	Some music drivers require you to provide them with a Soundfont, which contains samples of instruments for the device to play back. This setting allows you to choose one.|
|Mixed AdLib/MIDI mode	|Some games contain sound effects that are exclusive to the AdLib soundtrack. For these games, you may wish to use this mode in order to combine MIDI music with AdLib sound effects.|
|True Roland MT-32 (disable GM emulation)	|ScummVM will treat your device as a real MT-32. Because the instrument mappings and system exclusive commands of the MT-32 vary from those of general MIDI devices, you should only enable this option if you are using an actual Roland MT-32, LAPC-I, CM-64, CM-32L, CM-500, or GS device with an MT-32 map.|
|Enable Roland GS Mode	|ScummVM will initialize your GS-compatible device with settings that mimic the MT-32's reverb, (lack of) chorus, pitch bend sensitivity, etc. If it is specified in conjunction with True Roland MT-32 (above), ScummVM will select the MT-32-compatible map and drumset on your GS device. This setting works better than default GM or GS emulation with games that do not have custom instrument mappings (Loom and The Secret of Monkey Island). You should only specify both settings if you are using a GS device that has an MT-32 map, e.g. SC-55, SC-88, SC-8820, etc. Please note that Roland GS Mode is automatically disabled in both Day of the Tentacle and Sam & Max Hit the Road, since they use General MIDI natively.If neither of the above settings is enabled, ScummVM will initialize your device in General MIDI mode and use GM emulation in games with MT-32 soundtracks.|
|MIDI gain	|Adjusts the relative volume of the general MIDI music. This is only supported by some of the music drivers.|

---

## Paths tab

Use the paths tab to tell ScummVM where to look for particular files.

|Control	|Description|
|-|-|
|Save Path|	The default folder in which ScummVM will store saved games. If this is not set, saved games will generally be stored in the current directory. Exceptions to this include: <ul><li>Windows Vista and up ```\Users\username\AppData\Roaming\ScummVM\Saved games\```</li><li>Windows 2000 and XP ```\Documents and Settings\username\Application Data\ScummVM\Saved games\```</li><li>Mac OS X ```$HOME/Documents/ScummVM Savegames/```</li><li>other UNIX variants ```$HOME/.scummvm/```</li><li>iPhone ```/private/var/mobile/Library/ScummVM/Savegames```</li></ul>|
|Extra Path	|This is the folder that ScummVM will look in for various extra files. These could include one or more of: <ul><li>Additional datafiles required for certain games (e.g. kyra.dat)</li><li>Soundfonts (see MIDI tab)</li><li>MT-32 ROMs (see MT-32 emulation)</li></ul>|
|Theme Path	|The folder that additional themes for the ScummVM Launcher are stored in|

---


## Misc tab

The Misc tab contains options that don't belong on any of the other tabs.

|Control	|Description|
|-|-|
|Theme	|Changes the visual appearance of the ScummVM Launcher|
|GUI Renderer	|Defines how the ScummVM GUI is rendered; normal or antialiased.|
|Autosave	|In some games (namely Beneath a Steel Sky, Flight of the Amazon Queen, and all SCUMM games), Adjusts the time period that ScummVM waits between autosaves. The default setting is 5 minutes. Note that this is only available in some games (Beneath a Steel Sky, Flight of the Amazon Queen, and all SCUMM games) |
