---
id: what_is
title: What is ScummVM?
sidebar_label: What is ScummVM?
---
## About

ScummVM is a program which allows you to run certain classic graphical point-and-click adventure games, provided you already have their data files. The clever part about this: ScummVM just replaces the executables shipped with the game, allowing you to play them on systems for which they were never designed!

### History

Originally it was designed to run LucasArts' SCUMM games, such as Maniac Mansion, Monkey Island, Day of the Tentacle or Sam and Max. SCUMM stands for 'Script Creation Utility for Maniac Mansion', which was the first game for which LucasArts designed this system. And much later it gave its name to ScummVM ('VM' meaning Virtual Machine).

### How does it work?

Almost all adventure and role-playing games share some common features. The most basic ones are the resources used, which are in the game's data files:

Graphics
Actors (the sprites in the game)
Background images
Fonts
In-game animations
Objects
Videos
Sound
Synthesized music (e.g. MIDI)
Sound effects
Voices
Apart from the resources themselves, almost all games have their own scripting language. This simplifies things in the whole development process, as it's then easier to assign tasks to specific people. Programmers deal with the code itself, game designers deal with writing scripts using the language that the game interpreter understands, graphics designers deal with the artistic part of the game, music composers with the audio and so on. Although the basic elements of each game are standard, each game implements them in a very different manner. The most important aspect of role-playing and adventure games is the way they work "behind the scenes", which includes the kind of logic used and how this is implemented in each game, the kind of interaction expected from the user (e.g. some games allow you to use verbs on objects like "use object 1 with object 2", whereas other games just allow the user to single click on objects). The resources themselves are not useful at all without the game logic, which is the most difficult part to implement in a game. In fact, there are many resource viewers which can be used to view resources from a large number of different games, but they don't deal with the logic behind those resources at all. A brief introduction to how logic works in each game is explained in the next part.

The scripting language of a game
As mentioned before, each game uses its own scripting language, which is usually contained in the game's data files. This is usually high-level, and the game's interpreter itself (the game's executable file) is responsible for parsing the script commands from the game's logic scripts and doing all the actual work. Let's take an example script of a hypothetical engine, where the game would have to load a scene and handle a case where the user would pick up item A:

 ````
 startScene(1)
 load_actors()
 put_actor(actor_number, X, Y)
 ...
 put_object(object_number, X, Y)
 ...
 if (action_pickup) {
   if (object_to_pickup() == object_A) {
     actor_walk(X,Y)
     actor_do_action(action_number)
     put_object_in_inventory(object_A)
     remove_object_from_scene(object_A)
   }
 }
   
 while (scene_not_ended) {
   handle_actor_actions()
 }
 endScene()
````
That's just an example of how an engine would do that action, but each engine tends to execute these scripts in a different way (e.g. some engines have scripts for each object, others can have a general script to do everything etc).


A game script can contain basic elements of the game's logic (e.g. if, else, goto etc) and it may call back directly functions of the executable itself, which are called script opcodes.


ScummVM is a project in which there is an attempt to rewrite the original executable file of a given game, based on the game's original source code or by using reverse engineering techniques to see the code that's contained in the game's executable and rewrite it in C++. This means that ScummVM's executable can be used to replace the game's original one, but of course the game's data files (graphics, audio, game scripts etc) are needed to play the game itself. Therefore, ScummVM is NOT an emulator of a specific operating system, as, for example, DOSBox is for DOS. ScummVM is actually a full rewrite of each game's engine, which has many advantages:

The game can run on many different platforms, thanks to ScummVM's portable platform backend
Game graphics can be improved with the use of several graphics filters (including super2xsai, supereagle, advmame2x, advmame3x, hq2x, hq3x and more)
Some bugs which existed in the original game's executable (or specific scripts) may be fixed
It's possible to re-encode the game's audio files into popular formats, such as MP3, OGG or FLAC so that the game itself takes up much less space
LucasArts games have a much improved menu and savegame system
Most game engines allow the player to save much more save games than the original interpreters did
In some games, ScummVM offers added functionality which did not exist in the original games. For example, it offers full mouse functionality in older Sierra AGI games, which had no mouse support
It's possible to listen to a supported game's MT-32 music score (if present) without an actual MT-32, via a sophisticated system which emulates it
ScummVM needs much less CPU and system resources than an emulator, as games run directly in ScummVM and not through an emulated platform (which might have a different CPU, different memory management and so on)
...and many more. The approach that is taken when implementing a game under ScummVM has some disadvantages:

Because the engine of each game in ScummVM has been rewritten from scratch, some bugs which were not present with the original game interpreter might exist in ScummVM. For this purpose, there is a bug tracker in ScummVM, where users report such findings to the ScummVM team, which are then usually fixed. Such issues surely exist, as it's impossible to check every single aspect of each game, and a full rewrite of the game engine means that there might be issues which the developer didn't find out originally.
...and perhaps more.

### Support
Over time support for a lot of non-SCUMM games has been added, and ScummVM now also supports many of Sierra's AGI and SCI games (such as King's Quest 1-7, Space Quest 1-6, ...), Discworld 1 and 2, Simon the Sorcerer 1 and 2, Beneath A Steel Sky, Lure of the Temptress, Broken Sword I and II, Flight of the Amazon Queen, Gobliiins 1-3, The Legend of Kyrandia series, many of Humongous Entertainment's children's SCUMM games (including Freddi Fish and Putt Putt games) and many more. You can find a full list with details on which adventures are supported and how well on the compatibility page. ScummVM is continually improving, so check back often.

### Platforms

Among the systems on which you can play those games are regular desktop computers (running Windows, Linux, Mac OS X, ...), game consoles (Dreamcast, Nintendo DS & Wii, PS2, PSP, ...), smartphones (Android, iPhone, PocketPC, Symbian ...) and more.

### Compatibility
At this time ScummVM is still under heavy development. Be aware that whilst we attempt to make sure that many games can be completed with few major bugs, crashes can happen and we offer no warranty. That being said, some of the games have been supported for a long time and should work fine with any recent stable release. You can get a feeling of how well each game is working in ScummVM by looking at the compatibility page. Actually, if you browse a bit around you might discover that ScummVM is even being used commercially to re-release some of the supported games on modern platforms. This shows that several companies are happy with the quality of the software and how well it can run some of the games.

### Donations

If you enjoy ScummVM feel free to donate using the PayPal button on the ScummVM homepage. This will help us buy utilities needed to develop ScummVM easier and quicker. If you cannot donate, help and contribute a patch!