1. Create a new folder.

- To use the command line, change your present working directory to the directory in which you wish to create the new directory. To do this, use ```cd``` followed by the path. The tilde ```~``` represents the home directory, so in this example the directory is changed to the home directory. 

```
    cd ~
```

- Use ```mkdir``` to create a new directory. In this example, it is called 'mygames' in the /pi/home/ directory. 
```
    mkdir mygames
```



2.  Copy the folder containing the game data files into the folder you just created. 

- To use the command line, use ```cp``` to copy the directory of game files. This command works like a "Copy/Paste", where the first variable is the directory to be copied, and the second is the directory it is pasted to. 
    In this example, ```~/myfirstgame/``` is the path to the directory containing the game files of the game.
```
    cp ~/myfirstgame/ ~/mygames/
```
The directory structure should look something like the following:
````
mygames
|-- myfirstgame
|   |-- readme.txt
|   |-- firstgame.cpt
|   |-- firstgame.dnr
|   `-- firstgame.dsk
`-- mysecondgame
    |-- secondgame.1c
    `-- readme.txt
````

3.  Repeat step 2 as required to copy any further games into the folder.  