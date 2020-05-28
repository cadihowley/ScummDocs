---
id: queen
title: Game Guide - Flight of the Amazon Queen
sidebar_label: Flight of the Amazon Queen
---
## About

Flight of the Amazon Queen follows a pilot for hire named Joe King who is hired to fly a famous actress to her next job, but ends up in a lightning storm and crashes deep in the Amazon Jungle. In the jungle, Joe uncovers a plot by a mad scientist to take over the world by creating an army of dinosaur women created from Amazon women
 
## Availability

In March 2004, the creators and copyright holders of Flight of the Amazon Queen, John Passfield and Steve Stamatiadis, released the game as freeware for use with ScummVM. It is available for download from our [Downloads](https://www.scummvm.org/games/) page.

---
## Data Files

[Required Data Files](

Only the original non-freeware version of Flight of the Amazon Queen (from original CD), requires the queen.tbl datafile (available from the Downloads page on our website) in either the directory containing the queen.1 game data file, in your extrapath, or in the directory where your ScummVM executable resides.

Alternatively, you can use the compress_queen tool from the tools package to 'rebuild' your FOTAQ data file to include the table for that specific version, and thus removing the run-time dependency on the queen.tbl file. This tool also allows you to compress the speech and sound effects with MP3, OGG or FLAC.

---
## Hotkeys
```
Ctrl-d                 - Starts the debugger
Ctrl-f                 - Toggle fast mode
F1                     - Use Journal (saving/loading)
F11                    - Quicksave
F12                    - Quickload
Escape                 - Skips cutscenes
Space                  - Skips current line of text
```

---
## Settings

### Autosave

For some games ScummVM will by default automatically save the current state every five minutes (adjustable via the autosave_period config setting). The default autosave slot for many engines is slot 0.



### Viewing/Loading saved games from the command line

```--list-saves```

This switch may be used to display a list of the current saved games of the specified target game and their corresponding save slots. If no target is specified, it lists saved games for all known target.

Usage: --list-saves --game=[TARGET], where [TARGET] is the target game.


```--save-slot/-x```

This switch may be used to load a saved game directly from the command line.

Usage: --save-slot[SLOT] or -x[SLOT], where [SLOT] is the save slot number.


### Non-standard Settings Keywords

```
music_mute         bool     If true, music is muted
sfx_mute           bool     If true, sound effects are muted
```

