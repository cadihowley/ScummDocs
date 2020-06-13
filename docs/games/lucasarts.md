---
id: lucasarts
title: LucasArts games 
sidebar_label: LucasArts games
---
The following games all use the [SCUMM](https://wiki.scummvm.org/index.php?title=SCUMM) engine. 

| Game | ID|
|------|----|
|[Maniac Mansion](#maniac) | maniac|
|[Zak McCracken and the Alien Mindbenders](#zak)| zak|
|[Indiana Jones and the Last Crusade](#indy3)|indy3|
|[Loom](#loom)|loom|
|[Passport to Adventure](#pass)|pass|
|[The Secret of Monkey Island](#monkey)|monkey|
|[Monkey Island 2: LeChuck's Revenge](#monkey2)|monkey2|
|[Indiana Jones and the Fate of Atlantis](#atlantis)|atlantis|
|[Day of the Tentacle](#tentacle)|tentacle|
|[Sam & Max Hit the Road](#samnmax)|samnmax|
|[Full Throttle](#ft)|ft|
|[The Dig](#dig)|dig|
|[The Curse of Monkey Island](#comi)|comi|

---

## Keyboard Shortcuts
In addition to the common [keyboard shortcuts](../using/keyboard), SCUMM games have further shortcuts:
````

    Alt+x                  - Quit
    Ctrl 0-9 and Alt 0-9   - Load and save game state
    Ctrl+d                 - Starts the debugger
    Ctrl+f                 - Toggle fast mode
    Ctrl+g                 - Runs in really REALLY fast mode
    Ctrl+t                 - Switch between 'Speech only',
                             'Speech and Subtitles' and 'Subtitles only'
    Tilde (~)              - Show/hide the debugging console
    [ and ]                - Music volume, down/up
    - and +                - Text speed, slower/faster
    F5                     - Displays a save/load box
    Alt+F5                 - Displays the original save/load box, if the
                             game has one. You can save and load games using
                             this, however it is not intended for this purpose,
                             and may even crash ScummVM in some games.
    i                      - Displays IQ points (Indiana Jones and the Last
                             Crusade, and Indiana Jones and the Fate of
                             Atlantis)
    Space                  - Pauses
    Period (.)             - Skips current line of text in some games
    Enter                  - Simulate left mouse button press
    Tab                    - Simulate right mouse button press

````

---
## Macintosh versions

All LucasArts SCUMM based adventures, except The Curse of Monkey Island, also exist in versions for the Macintosh. ScummVM can use most of them, however, in some cases some additional work is required. 

The original CD or Floppy for the Mac is in a disk format called HFS, which other operating systems do not usually support.  
To read HFS volumes on other operating systems there are various free tools available, such as:
- HFSExplorer for Windows. 
- hfsutils for Linux and other Unix-like operating systems.

Most of the newer games on the Macintosh shipped with only a single data file. ScummVM is able to directly use such a file. Although we provide a tool called ```extract_scumm_mac``` in the tools package which can extract the data from these data files, this is neither required nor recommended.

:::note 
In some cases the Macintosh data file was made invisible. To see hidden files, press CMD + Shift + Dot
:::

For further information on copying Macintosh game files to the hard disk see the [ScummVM wiki](https://wiki.scummvm.org/index.php/HOWTO-Mac_Games).

---
## Maniac Mansion (1987) <a id="maniac"></a>

Maniac Mansion was the first game to use the SCUMM scripting language.

The game follows Dave Miller and a group of his friends as they break into a strange mansion in an attempt to rescue Dave's girlfriend Sandy and stop the evil purple meteor from taking over the world. The game has a group of six characters to choose from (Dave must always be in your party), and multiple possible endings.

| | Maniac Mansion|
|-|-|
|First release| 1987|
|Developed by| Lucasfilm Games |
|Published by | Lucasfilm Games, Disney|
|Distributed by| Activision, U.S. Gold |
|Language(s)| English |
|Original Platforms |Amiga, Apple II, Atari ST, C64, DOS, NES |
|Resolution| 320x200, 16 colors|
|Engine| SCUMM|
|Support| Since ScummVM 0.5.0|

#### Variants

The DOS versions came in two variations, a 16 color EGA version (V1) and an enhanced version (V2) with higher resolution EGA graphics.

The Nintendo Entertainment System version featured additional music for cut-scenes and themes for each playable character. It also contained many changes from the original due to standards and practices at Nintendo, such as the removal of the statue on the second floor and the changing of several words Nintendo found inappropriate. The Famicom version of Maniac Mansion, released exclusively in Japan, did not use the SCUMM engine.

Maniac Mansion is also included in [Day of the Tentacle](#tentacle). The English version contains the V1 DOS version while non-English versions are V2 DOS. If you have the Macintosh version of Day of the Tentacle you will need to extract the *.LFL files from the Day of the Tentacle Data file using ````extract_scumm_mac```

#### Download
Available from [GOG.com](http://gog.com/game/maniac_mansion?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/529890)

#### Data files

A list of required data files can be found on the [wiki](https://wiki.scummvm.org/index.php?title=Datafiles#Maniac_Mansion_.28Original_or_Enhanced.29).

---

## Zak McKraken and the Alien Mindbenders (1989) <a id="zak"></a>

Zak McKracken and the Alien Mindbenders was the second game to use the SCUMM scripting language. The game first follows Zak McKracken, a tabloid reporter who slowly discovers a plot by an alien race to take over the Earth. Later, the game adds three additional playable characters (a scientist named Annie Larris, and two Yale students named Melissa China and Leslie Bennett), and places the characters on a quest to find the missing pieces of an alien device that will save all of humankind.

| | Zak McCracken and the Alien Mindbenders|
|-|-|
|First release	|1989|
|Also known as	|Zak McKracken, Zak|
|Developed by	|Lucasfilm Games, Disney|
|Published by	|Lucasfilm Games|
|Distributed by	|(unknown)|
|Language(s)| English|
|Platforms	|Amiga, Atari ST, C64, DOS, FM-TOWNS |
|Resolution	|320x200, 16 colors (most versions) or 256 colors (FM-TOWNS version)|
|Engine	|SCUMM|
|Support	|Since ScummVM 0.2.0|

#### Download
Available from [GOG.com](http://gog.com/game/zak_mckracken_and_the_alien_mindbenders?pp=22d200f8670dbdb3e253a90eee5098477c95c23d)

#### Data files

A list of required data files can be found on the [wiki](https://wiki.scummvm.org/index.php?title=Datafiles#Zak_McKracken_and_the_Alien_Mindbenders)

#### Language options
ScummVM allows the language to be changed:

- By changing the language in the **Edit Game** settings dialog from the Launcher.
- By editing the config file. For more information, see the [configuration file](../advanced/configuration) page.
- By changing the language option from the command line at launch. For more information, see the [Command line options](../advanced/command_line) page.
````
    en  - English (default)
    de  - German
    fr  - French
    it  - Italian
    es  - Spanish
````
:::note
Using the language option does not change the language of the game, as this is usually hard-coded. The option merely selects the appropriate font for the chosen language.
:::
---

## Indiana Jones and the Last Crusade (1989) <a id="indy3"></a>

Indiana Jones and the Last Crusade: The Graphic Adventure was the third game to use the SCUMM scripting language. The game follows the plotline of the Indiana Jones and the Last Crusade motion picture.

At the beginning of the game, Indiana Jones must rescue his father from the Nazis by using clues from his father's diary documenting everything that is known about the Holy Grail that once held the blood of Jesus Christ at the Last Supper. Later, Indiana Jones must use the grail diary to find the cup of Christ so that he may use it's miraculous powers to save his father's life.

This game features action sequences, in which Indiana Jones can fight his way out of situations instead of using his wits. The game features a Sierra-like score system, where the player is given a score based on which paths are chosen, and whether battles were overcome with wits or by fighting.

|  | Indiana Jones and The Last Crusade |
|-|-|
|First release| 1989|
|Developed by| Lucasfilm Games |
|Distributed by | Lucasfilm Games, Disney |
|Language(s)| English|
|Original Platforms| Amiga, Amiga CDTV, Atari ST, DOS, FM-TOWNS, Macintosh |
|Resolution| 320x200, 16 colors (original) or 256 colors (later versions)|
|Engine | SCUMM |
|Support| Since ScummVM 0.2.0|

#### Variants

Unlike many CD versions of LucasArts games, the CD versions of this game were not "talkie versions", as they did not include any speech.

The PC floppy EGA version contained only 16 colors

The PC floppy and PC CD-ROM VGA versions are updated to use 256 colors. The FM-Towns version also has 256 colors, as well as CD audio tracks which uses music from the film's soundtrack.

#### Download
Available from [GOG.com](http://gog.com/game/indiana_jones_and_the_last_crusade?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/32310)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Indiana_Jones_and_the_Last_Crusade)

---

## Loom (1990) <a id="loom"></a>

Loom was the fourth game to use the SCUMM scripting language. The game follows Bobbin Threadbare as he learns how to use his magical powers through his distaff and as he eventually saves the world from the Lord of Chaos, who was unraveling the Loom (the source of power for the members of the weaver's guild).

#### Variants

The DOS CD version of this was a "talkie version" presented in 256 colors, however unlike most talkie games the speech came from CDDA tracks on the CD. Due to limitations in lip-syncing at the time, the DOS CD version did not include the scenes where the characters were presented in close-up shots. The FM Towns CD version was also presented in 256 colors, however it was not a talkie. As a result, the close-up shots were present in the FM Towns versions.

The DOS floppy EGA version contained only 16 colors.

| | Loom|
|-|-|
|First release|	1990|
|Also known as	| |
|Developed by	|Lucasfilm Games|
|Published by	|Lucasfilm Games, Disney|
|Distributed by	| |
|Language(s)| |
|Platforms	|Amiga, Amiga CDTV, Atari ST, DOS, FM Towns, Macintosh, PC-Engine/Turbografx CD|
|Resolution	|320x200, 16 colors (original) or 256 colors (later versions)|
|Engine|	SCUMM|
|Support	|Since ScummVM 0.2.0|

#### Download

Available from [GOG.com](http://gog.com/game/loom?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/32340)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Loom)

#### Known problems

- Turning off the subtitles via the config file does not work reliably as the Loom scripts automatically turn them on again.
- MIDI support in the EGA version requires the Roland update from LucasArts.
- The PC-Engine Kanji version requires the system card rom.

---
## Passport to Adventure (1990) <a id="pass"></a>

Passport to Adventure is a pack of demos of various games by Lucasfilm Games that use the SCUMM scripting language. It contains playable EGA demos of Indiana Jones and the Last Crusade, The Secret of Monkey Island, and Loom. Each game ends by showing a list of people who led the original games, as well as the people involved in creating the demo. At that point, the demo can be restarted by pressing ESC, allowing the user to select another game demo to try.

| | Passport to Adventure|
|-|-|
|First release|	1990|
|Also known as|	N/A|
|Developed by|	Lucasfilm Games|
|Published by	|Lucasfilm Games|
|Distributed by|	Lucasfilm Games|
|Platforms	|DOS|
|Resolution|	320x200, 16 colors|
|Engine	|SCUMM|
|Support	|Since 0.3.0|

#### Download
Available from our [Demos page](https://www.scummvm.org/demos)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Passport_to_Adventure)

---

## The Secret of Monkey Island (1990) <a id="monkey"></a>

The Secret of Monkey Island was the first game in the Monkey Island series, and the fifth game to use the SCUMM scripting language. At first, the game follows Guybrush's attempts to prove himself a pirate; later, he attempts to rescue his new-found love, Elaine Marley, from the clutches of the ghost pirate LeChuck.

| | The Secret of Monkey Island|
|-|-|
|First release	|1990|
|Also known as|	Monkey Island 1; Monkey1; MI1;
TSOMI; SOMI; SMI|
|Developed by	|Lucasfilm Games|
|Published by	|Lucasfilm Games, Disney |
|Distributed by	|(unknown)|
|Platforms|	Amiga, Atari ST, DOS, FM-TOWNS, Macintosh, Sega/Mega CD|
|Resolution|	320x200, 256 colors|
|Engine| SCUMM|
|Support|	Since ScummVM 0.1.0|


#### Download
The Special Edition version is available from [GOG.com](http://gog.com/game/the_secret_of_monkey_island_special_edition?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) and [Steam](http://store.steampowered.com/app/32460).

:::important
The process to make this version playable via ScummVM is described in [this thread](https://forums.scummvm.org/viewtopic.php?t=7671). Only the classic mode is playable.
:::

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Secret_of_Monkey_Island.2C_The)

#### Known problems
- MIDI support in the EGA version requires the Roland update from LucasArts.
---

## Monkey Island 2: LeChuck's Revenge (1991) <a id="monkey2"></a>

Monkey Island 2: LeChuck's Revenge was the second game in the Monkey Island series, and the sixth game to use the SCUMM scripting language. The game first follows Guybrush as he tries to find a mysterious treasure known as Big Whoop. Later, Guybrush must again defeat Captain LeChuck, the ghost pirate he defeated in the first game, who has returned as a zombie awoken by a voodoo spell.

| | Monkey Island 2: LeChuck's Revenge|
|-|-|
|First release|	1991|
|Also known as|	Monkey Island 2; Monkey2; MI2|
|Developed by	|Lucasfilm Games|
|Published by	|Lucasfilm Games, Disney|
|Distributed by|	(unknown)|
|Language(s)| |
|Platforms	|Amiga, DOS, FM-TOWNS,Macintosh|
|Resolution|	320x200, 256 colors|
|Engine	|SCUMM|
|Support|	First game supported by
ScummVM!|

#### Download
The Special Edition version is available from [GOG.com](http://gog.com/game/monkey_island_2_special_edition_lechucks_revenge?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/32460). 

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Monkey_Island_2:_LeChuck.27s_Revenge)

:::important
The process to make the Special Edition downloaded version playable via ScummVM is described in [this thread](https://forums.scummvm.org/viewtopic.php?t=7671). Note that only the classic mode is playable using this medthod.
:::


---

## Indiana Jones and the Fate of Atlantis (1993) <a id="atlantis"></a>

Indiana Jones and the Fate of Atlantis was the seventh game to use the SCUMM scripting language. The game follows Indiana Jones and Sophia Hapgood, who is a playable character in some parts of the game, as they discover the lost city of Atlantis, and stop the Nazis from using the power source of Atlantis for world conquest.

#### Variants

The CD versions were "talkie versions" and included speech for each of the lines of text said by the characters in the game.

#### Download

English-only version available from [Steam](http://store.steampowered.com/app/6010).

English version with text-only options for French, German, Italian and Spanish available from [GOG.com](http://gog.com/game/indiana_jones_and_the_fate_of_atlantis?pp=22d200f8670dbdb3e253a90eee5098477c95c23d)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Indiana_Jones_and_the_Fate_of_Atlantis)

---

## Maniac Mansion: Day of the Tentacle (1993) <a id="tentacle"></a>

Maniac Mansion: Day of the Tentacle was the sequel to Maniac Mansion, and the eighth game to use the SCUMM scripting language. The game first follows the nerd from the first game, Bernard Bernoulli, and his roommates Hoagie and Laverne as they rescue green tentacle from Dr. Fred's basement. Later, the game follows the trio as they go back in time to stop the evil purple tentacle from changing the past for his own benefit.

| | Maniac Mansion: Day of the Tentacle|
|-|-|
|First release	|1993|
|Also known as	|Day of the Tentacle, Maniac Mansion 2, DOTT|
|Developed by|LucasArts|
|Published by	|LucasArts, Disney|
|Distributed by|	(unknown)|
|Platforms|	DOS, Macintosh|
|Resolution|	320x200, 256 colors|
|Engine|	SCUMM|
|Support	|Since ScummVM 0.2.0|

#### Download
Remastered version available from [GOG.com](https://www.gog.com/game/day_of_the_tentacle_remastered?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) and [Steam](http://store.steampowered.com/app/388210). 

:::important
It is possible to make the remastered version playable via ScummVM using [DoubleFine Explorer](https://quickandeasysoftware.net/software/doublefine-explorer) 
Note that only the classic mode is playable when this method is used. 
:::

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Day_of_the_Tentacle)

#### Game notes

At one point in the game, you come across a computer that allows you to play the original Maniac Mansion as an easter egg. ScummVM supports this, with a few caveats:

ScummVM will scan your configuration file for a game that's in a ```Maniac``` sub-folder of your Day of the Tentacle folder. If you've copied the data files from the CD version, this should already be the case but you have to add the game to ScummVM as well.

To return to Day of the Tentacle, press F5 and select "Return to Launcher".

This means that you could in theory use any game as the easter egg. Indeed, there is a "secret" configuration setting, ```easter_egg```, to override the ID of the game to run. Be aware, though, that not all games support returning to the launcher, and setting it up to use Day of the Tentacle itself as the easter egg game is not recommended.

[Maniac Mansion](#maniac) is included in Day of the Tentacle. The English version contains the V1 DOS version while non-English versions are V2 DOS. If you have the Macintosh version of Day of the Tentacle you will need to extract the *.LFL files from the Day of the Tentacle Data file using ```extract_scumm_mac```.

---

## Sam & Max Hit the Road (1993) <a id="samnmax"></a>

Sam & Max Hit the Road was the ninth game to use the SCUMM scripting language. The game first follows the crime fighting duo, a dog named Sam and a lagomorph named Max, as they recover a bigfoot who was stolen from a carnival. Later, the game follows the characters as they uncover an ancient spell to restore the Earth to it's original state.

#### Variants

The CD versions were "talkie versions" and included speech for each of the lines of text said by the characters in the game.

| | Sam & Max Hit the Road|
|-|-|
|First release|	1993|
|Also known as|	Sam and Max, Hit the Road,Sam & Max, SNM|
|Developed by|	LucasArts, Disney|
|Published by	|LucasArts|
|Distributed by|	Activision|
|Language(s)| |
|Platforms|	DOS, Macintosh, Windows|
|Resolution	|320x200, 256 colors|
|Engine	|SCUMM|
|Support|	Since ScummVM 0.2.0|

#### Download

Available from [GOG.com](http://gog.com/game/sam_max_hit_the_road?pp=22d200f8670dbdb3e253a90eee5098477c95c23d)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Sam_.26_Max_Hit_the_Road)

---

## Full Throttle (1995) <a id="ft"></a>

Full Throttle was the tenth game to use the SCUMM scripting language. The game follows a biker named Ben, as he uncovers a plot of murder that threatens to damage himself, his gang, and his very way of life. If you think this description is a bit short, wait till you see the game.

| |Full Throttle|
|-|-|
|First release|	1995|
|Also known as	|FT|
|Developed by	|LucasArts|
|Published by	|BraSoft, Creative Labs, LucasArts, Softgold|
|Distributed by	|Activision, BraSoft,Creative Labs, CTO, HomeSoft, Licomp Empik Multimedia, LucasArts, Metro Games, Virgin Interactive|
|Platforms	|DOS, Macintosh, Windows|
|Resolution|	320x200, 256 colors|
|Engine	|SCUMM|
|Support	|Since ScummVM 0.2.0|

#### Download
Full Throttle is not available for download

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Full_Throttle)

---
## The Dig (1995) <a id="dig"></a>

The Dig was the eleventh game to use the SCUMM scripting language. The game, based on a story by Steven Spielberg, first follows two NASA astronauts (Commander Boston Low, Dr. Ludger Brink) and a reporter named Maggie Robbins as they attempt to destroy an asteroid that is on a collision course with Earth. Later, the game finds the crew on an alien planet trying to discover why there seems to be no sentient life, discovering the secrets the planet holds, and trying to find a way back home.

| | The Dig|
|-|-|
|First release|	1995|
|Also known as|	Dig|
|Developed by	|LucasArts|
|Published by	|LucasArts, Disney|
|Distributed by|	Activision|
|Platforms	|DOS, Macintosh, Windows|
|Resolution	|320x200, 256 colors|
|Engine|	SCUMM|
|Support	|Since ScummVM 0.2.0|

#### Download

Available from [GOG.com](http://gog.com/game/the_dig?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/6040)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Dig.2C_The)

#### Language options

ScummVM allows the language to be changed:

- By changing the language in the **Edit Game** settings dialog from the Launcher.
- By editing the config file. For more information, see the [Configuration file](../advanced/configuration) page.
- By changing the language option from the command line at launch. For more information, see the [Command line options](../advanced/command_line) page.
````
    jp  - Japanese
    zh  - Chinese
    kr  - Korean
````
:::note
Using the language option does not change the language of the game, as this is usually hard-coded. The option merely selects the appropriate font.

Non-English versions can be set to 'English.' This only affects subtitles; game speech will remain the same.
:::

---

## The Curse of Monkey Island (1997) <a id="comi"></a>

The Curse of Monkey Island was the third game in the Monkey Island series, and the twelfth game to use the SCUMM scripting language. The game first follows Guybrush as he is captured by the Zombie Pirate LeChuck, and must escape from the hold of LeChuck's pirate ship. Later Guybrush accidently turns his love, Elaine, into a gold statue with a cursed ring. Now, he has to find an uncursed ring to change her back.

| | The Curse of Monkey Island|
|-|-|
|First release|	1997|
|Also known as|	Monkey Island 3, Monkey 3, MI3, COMI, CMI|
|Developed by	|LucasArts|
|Published by	|LucasArts|
|Distributed by|	Activision|
|Language(s)| English, French, German, Italian, Spanish|
|Platforms|	Windows|
|Resolution|	640x480, 256 colors|
|Engine|	SCUMM|
|Support|	Since ScummVM 0.4.0|

#### Download
Available from [GOG.com](http://gog.com/game/the_curse_of_monkey_island?pp=22d200f8670dbdb3e253a90eee5098477c95c23d) or [Steam](http://store.steampowered.com/app/730820)

#### Data files

A list of required data files can be found [here](https://wiki.scummvm.org/index.php?title=Datafiles#Curse_of_Monkey_Island.2C_The)

#### Game notes

For this game, the comi.la0, comi.la1 and comi.la2 files are needed. The comi.la0 file can be found on either CD, but since they are identical it doesn't matter which one of them is used. 

Create a ```resource``` subdirectory that contains all of the files from both ```resource``` subdirectories on the two CDs. Some of the files appear on both CDs; they're identical so it doesn't matter which are used.

#### Language options

ScummVM allows the language to be changed:

- By changing the language in the ```Edit Game``` settings from the Launcher
- By editing the [config file](../advanced/configuration) For more information, see the [Configuration file](../advanced/configuration) page.
- By changing the language option at launch. For more information, see the [Command line options](/advanced/command_line) page.
````
    en  - English (default)
    de  - German
    fr  - French
    it  - Italian
    pt  - Portuguese
    es  - Spanish
    jp  - Japanese
    zh  - Chinese
    kr  - Korean
````
:::note
Using the language option does not change the language of the game, as this is hard-coded. The option merely selects the appropriate font for the chosen language. 
:::


---