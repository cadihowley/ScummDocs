---
id: how_work
title: How Does ScummVM Work?
sidebar_label: How Does ScummVM Work?
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

Apart from the resources themselves, almost all games have their own scripting language. This simplifies things in the whole development process, as it's then easier to assign tasks to specific people. Programmers deal with the code itself, game designers deal with writing scripts using the language that the game interpreter understands, graphics designers deal with the artistic part of the game, music composers with the audio and so on. 

Although the basic elements of each game are standard, each game implements them in a very different manner. The most important aspect of role-playing and adventure games is the way they work "behind the scenes". This includes the kind of logic used and how this is implemented in each game, and the kind of interaction expected from the user (e.g., some games allow you to use verbs on objects like "use object 1 with object 2", whereas other games just allow the user to single click on objects). 

The resources themselves are not useful at all without the game logic, which is the most difficult part to implement in a game. In fact, there are many resource viewers which can be used to view resources from a large number of different games, but they don't deal with the logic behind those resources at all. A brief introduction to how logic works in each game is explained in the next part.

### The Scripting Language of a Game

Each game uses its own scripting language, which is usually contained in the game's data files. This is usually high-level, and the game's interpreter itself (the game's executable file) is responsible for parsing the script commands from the game's logic scripts and doing all the actual work. Let's take an example script of a hypothetical engine, where the game would have to load a scene and handle a case where the user would pick up item A:

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


### Where does ScummVM fit in?

ScummVM is a project in which there is an attempt to rewrite the original executable file of a given game, based on the game's original source code or by using reverse engineering techniques to see the code that's contained in the game's executable and rewrite it in C++. This means that ScummVM's executable can be used to replace the game's original one, but of course the game's data files (graphics, audio, game scripts etc) are needed to play the game itself. Therefore, ScummVM is NOT an emulator of a specific operating system, as, for example, DOSBox is for DOS. 

### Advantages
ScummVM is actually a full rewrite of each game's engine, which has many advantages:

- The game can run on many different platforms, thanks to ScummVM's portable platform backend
- Game graphics can be improved with the use of several graphics filters (including super2xsai, supereagle, advmame2x, advmame3x, hq2x, hq3x and more)
- Some bugs which existed in the original game's executable (or specific scripts) may be fixed
- It's possible to re-encode the game's audio files into popular formats, such as MP3, OGG or FLAC so that the game itself takes up much less space
- LucasArts games have a much improved menu and savegame system
- Most game engines allow the player to save much more save games than the original interpreters did
- In some games, ScummVM offers added functionality which did not exist in the original games. For example, it offers full mouse functionality in older Sierra AGI games, which had no mouse support
- It's possible to listen to a supported game's MT-32 music score (if present) without an actual MT-32, via a sophisticated system which emulates it
- ScummVM needs much less CPU and system resources than an emulator, as games run directly in ScummVM and not through an emulated platform (which might have a different CPU, different memory management and so on)

### Disadvantages
The approach that is taken when implementing a game under ScummVM has some disadvantages:

- Because the engine of each game in ScummVM has been rewritten from scratch, some bugs which were not present with the original game interpreter might exist in ScummVM. 
- For this purpose, there is a bug tracker in ScummVM, where users report such findings to the ScummVM team, which are then usually fixed. Such issues surely exist, as it's impossible to check every single aspect of each game, and a full rewrite of the game engine means that there might be issues which the developer didn't find out originally.