---
id: how_work
title: How does ScummVM work?
sidebar_label: How does it work?
---

Almost all adventure and role-playing games share some common features. The most basic ones are the resources used, which are in the game's data files:

- Graphics
- Actors (the sprites in the game)
- Background images
- Fonts
- In-game animations
- Objects
- Videos
- Sound
- Synthesized music (e.g. MIDI)
- Sound effects
- Voices

Apart from the resources themselves, almost all games have their own scripting language. This simplifies things in the whole development process as it's then easier to assign tasks to specific people: Programmers deal with the code itself; game designers deal with writing scripts using the language that the game interpreter understands; graphics designers deal with the artistic part of the game; music composers with the audio, and so on. 

Although the basic elements of each game are standard, each game implements them in a very different manner. The most important aspect of role-playing and adventure games is the way they work behind the scenes. This includes the kind of logic used and how this is implemented in each game, and the kind of interaction expected from the user. For instance, some games allow the player to use verbs on objects (for example, use object 1 with object 2) whereas other games just allow the player to single click on objects. 

The resources themselves are not useful at all without the game logic, which is the most difficult part to implement in a game. In fact, there are many resource viewers which can be used to view resources from a large number of different games, but they don't deal with the logic behind those resources. 

### The Scripting Language of a Game

Each game uses its own scripting language, which is usually contained in the game's data files. This is usually high-level, and the game's interpreter itself (the game's executable file) is responsible for parsing the script commands from the game's logic scripts and doing all the actual work.

Here is an example script of a hypothetical engine, where the game loads a scene, and then handles a case where the player picks up item A:

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

Each engine tends to execute these scripts in a different way. Some engines have scripts for each object, while others might have a general script to do everything, and so on. 


A game script can contain basic elements of the game's logic such as ```if``` ```else```,and ```goto```. It may also call functions directly from the executable itself. These are called script opcodes.


### Where does ScummVM fit in?

ScummVM is a project in which the original executable file of a given game is rewritten in C++, based on the game's original source code or by using reverse engineering techniques to see the code that is contained in the game's executable file. ScummVM's executable file can then be used to replace the game's original one, but of course the game's data files (graphics, audio, game scripts and so on) are needed to play the game itself. Therefore, ScummVM is NOT an emulator of a specific operating system.

### Advantages
Since each game's engine is fully rewritten, this has several advantages:

- The game can run on many different platforms, thanks to ScummVM's portable platform backend.
- Game graphics can be improved with the use of several graphics filters (including super2xsai, supereagle, advmame2x, advmame3x, hq2x, hq3x and more)
- Some bugs which existed in the original game's executable, or in specific scripts, can be fixed.
- It's possible to re-encode the game's audio files into popular formats, such as MP3, OGG or FLAC so that the game itself takes up much less space.
- LucasArts games have an improved menu and savegame system.
- Most ScummVM game engines allow the player to use more save game slots than the original interpreters did.
- In some games, ScummVM offers added functionality which did not exist in the original games. For example, it offers full mouse functionality in older Sierra AGI games, which had no mouse support.
- It's possible to listen to a supported game's MT-32 music score without an actual MT-32 external MIDI synthesizer module, through a sophisticated emulation system.
- ScummVM uses fewer system resources than an emulator, as games run directly in ScummVM and not through an emulated platform.

### Disadvantages

As each game engine is fully rewritten, and it is impossible to check every facet of every game, there might be some bugs that were not present with the original game interpreter.

The ScummVM bug tracker provides a way for users to submit any bugs they find to the ScummVM development team for rectification.

For more information on bug tracking and reporting, see the [Issue Tracker](https://bugs.scummvm.org) page on the ScummVM website. 