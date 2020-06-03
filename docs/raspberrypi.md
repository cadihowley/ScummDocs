---
id: raspberrypi
title: Quickstart Guide - Raspberry Pi
sidebar_label: Raspberry Pi
---
import useBaseUrl from '@docusaurus/useBaseUrl';

---
## Installing ScummVM

On a Raspberry Pi running the latest version of Raspberry OS, go to the Terminal and enter the following commands into the command line:
```
sudo apt-get updates
sudo apt-install -y scummvm
```
These commands will update the list of available packages, and then install ScummVM.

:::tip
To check that ScummVM has been installed correctly, run the following on the command line. This will show the installed version. 
```
scummvm - v
```
:::

---
## Loading Games

ScummVM needs access to the [data files](https://wiki.scummvm.org/index.php?title=Datafiles) for each game.

For games on floppies or CDs:

- If the data files are accessible, transfer these to the Raspberry Pi. 
- If the data files are not accessible, run the installer on the platform the game was designed for, and then transfer the files to the Raspberry Pi.

For games downloaded from digital distributors such as [GOG.com](gog.com), [Steam](https://store.steampowered.com), or from various [freeware](https://wiki.scummvm.org/index.php?title=Where_to_get_the_games#Freeware_Games) sources:
- Run the installer and transfer the files to the Raspberry Pi, or
- If the data files are supplied as a .zip, extract the archive. These can be downloaded directly onto the Raspberry Pi.

:::note
If data files need to be transferred from another device onto the Raspberry Pi, there are a number of options:
- Using an external hard-drive or USB stick
- Using a [Samba server](https://pimylifeup.com/raspberry-pi-samba/) or  [FTP](https://www.raspberrypi.org/documentation/remote-access/ftp.md)
:::

ScummVM can run the data files from any folder it has access to (including external media). For simplicity, create a new folder into which all game folders can be copied. Each game should have its own folder containing the required data files. 

- To use the command line, change your present working directory to the directory in which you wish to create the new folder. To do this, use ```cd``` followed by the path. The tilde ```~``` represents the home directory, so in this example the directory is changed to the home directory. 

```
    cd ~
```

- Use ```mkdir``` to create a new folder. In this example, it is called 'mygames' in the /pi/home/ directory. 
```
    mkdir mygames
```



2.  Copy the game data files for the game you wish to play into the folder you just created. 

- To use the command line, use ```cp``` to copy the folder of game files. This command works like a 'Copy/Paste', where the first variable is the file or directory to be copied, and the second is the directory it will be pasted to. 
    In this example, ```myfirstgame``` is the path to the directory containing the game files of the game to be loaded into ScummVM.
```
    cp /myfirstgame/ ~/mygames/
```

3.  Repeat step 2 to copy any further games into the folder.  

---
## Launching Games

<img alt="Launching Games" src={useBaseUrl('img/adding_game_rpi.gif')} />

---

1. From the applications menu select "Games" and "ScummVM" which will open the Launcher.

<img alt="Launch ScummVM" src={useBaseUrl('img/launch_scummvm_rpi.jpg')} />

2. Click on the "Add Game" button. This opens a file browser. To add multiple games at once, hold the ```Shift``` key when clicking on "Add Game".

<img alt="Blank Launcher" src={useBaseUrl('img/blank_launcher_rpi.jpg')} />

3. Use this browser to locate the folder containing the game. Double click on the name of a folder to go into it, and use the "Go up" button to go back up one level. 

4. Once you have selected the folder which contains the data files, click the "choose" button. 

<img alt="Adding a Game" src={useBaseUrl('img/adding_games_rpi.jpg')} />

5.  A window opens to allow configuration of various settings for the game. These can be re-configured at any time, but for now everything should work at the default settings. Select ```Ok```. 

<img alt="Game Options" src={useBaseUrl('img/game_info_rpi.jpg')} />

6. Select the game and click on "Start" to play. 

<img alt="Starting a Game" src={useBaseUrl('img/start_game_rpi.jpg')} />

:::note
Games can also be launched directly from the command line by typing ``` scummvm``` , followed by any  required [options](command_line#options) and then the game ID. 

To find the game ID, go to the game-specific settings (```Edit Game...```button in the Launcher) , or find the default ID [here](supported_games.md). 

To launch a game with no additional options, simply type ```scummvm``` followed by the game ID. 
In the following example, Flight of the Amazon Queen will be launched in full screen:
```
scummvm -f queen
```

:::


---

## Settings Configuration

Settings can be configured from the ScummVM Launcher, or by editing the configuration file directly. 

To edit general settings through the Launcher, run ScummVM and select ```Options```. To edit game-specific settings, choose the game and select ```Edit Game```.

On the Raspberry Pi, the configuration file path is ```~/.config/scummvm/scummvm.ini```

To edit settings directly in the configuration file, navigate to the file in the File Manager. If the .config directory is not visible in the Home directory, go to ```View --> Show Hidden```. 

To edit the configuration file from the command line, type the following:
````
nano ~/.config/scummvm/scummvm.ini 
````
Use Ctrl+O to save any changes. 

There are many [recognized configuration keywords](configuration.md).

### Game Saves

By default, games are saved to
````
/home/pi/.local/share/scummvm/saves
````

The save path can be changed in the config file by setting the savepath parameter.