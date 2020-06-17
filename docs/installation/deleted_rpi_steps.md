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


## Settings <a id="config"></a>

Settings can be configured from the ScummVM Launcher, or by editing the configuration file directly. 

**Launcher:**
- Run ScummVM
- To edit global settings, click **Options**. 
- To edit game settings, choose a game and click **Edit Game**.

**Configuration file:**
- On the Raspberry Pi, the configuration file path is ```~/.config/scummvm/scummvm.ini```. 
- Navigate to the file in the File Manager. If the .config directory is not visible in the Home directory, select **View&nbsp;>&nbsp;Show Hidden** in the top menu.
- Open the config file with a text editor, and save it when the desired changes have been made. 
- To edit the config file from the command line, type the following:
````
    nano ~/.config/scummvm/scummvm.ini 
````

For more information about settings, see the [Global settings](../using/global_settings) or [Game settings](../using/game_settings) page. 

### Game saves

By default, games are saved to
````
    /home/pi/.local/share/scummvm/saves
````

The save path can be changed in the config file by setting the savepath parameter.

Some engines allow saved games to be loaded directly from the command line. For more information, see the [List save section](../advanced/command_line#list_save) on the Command line options page. 