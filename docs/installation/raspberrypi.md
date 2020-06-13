---
id: raspberrypi
title: Installation guide for the Raspberry Pi
sidebar_label: Raspberry Pi
---

import useBaseUrl from '@docusaurus/useBaseUrl'

## Installing ScummVM

On a Raspberry Pi running the latest version of Raspberry OS, go to the Terminal and enter the following commands into the command line:
```
sudo apt-get updates
sudo apt-get upgrades
sudo apt-install -y scummvm
```
These commands update the list of available packages, and then install ScummVM.

:::tip
To check that ScummVM has been installed correctly, run the following on the command line. This shows the installed version. 
```
scummvm - v
```
:::

---
## Adding games

ScummVM needs access to the data files for each game.

For games on floppies or CDs:
- If the data files are accessible, transfer these to the Raspberry Pi. 
- If the data files are not accessible, run the installer on the platform the game was designed for, and then transfer the files to the Raspberry Pi.

For games downloaded from digital distributors such as [GOG.com](gog.com), [Steam](https://store.steampowered.com), or from various [freeware](https://wiki.scummvm.org/index.php?title=Where_to_get_the_games#Freeware_Games) sources:
- Run the installer and transfer the files to the Raspberry Pi, or
- If the data files are supplied as a .zip file, extract the archive. Archives can be downloaded directly onto the Raspberry Pi, as there is no need to run the installer. 

:::note
If data files need to be transferred from another device onto the Raspberry Pi, there are a number of options:
- Using an external hard-drive or USB stick
- Using a [Samba server](https://pimylifeup.com/raspberry-pi-samba/) or  [FTP](https://www.raspberrypi.org/documentation/remote-access/ftp.md)
:::

A comprehensive list of required data files for each game can be found on the [ScummVM Wiki Datafiles](https://wiki.scummvm.org/index.php?title=Datafiles) page.


:::tip
ScummVM can run the game data files from any directory it has access to, including external media. 

For ease of use, you can create a dedicated games directory into which subdirectories containing game files can be copied. 

The resulting directory structure will look somewhat like this:

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
::: 


1. From the Applications menu, select **Games&nbsp;>&nbsp;ScummVM** to open the Launcher window.

<img
  alt=" "
  src={useBaseUrl('img/RaspberryPi/launch_scummvm_rpi.jpg')}
/>

2. In the Launcher window, click **Add Game**. This opens a file browser. To add multiple games at once, hold ```Shift``` while clicking **Add Game**.

<img
  alt=" "
  src={useBaseUrl('img/RaspberryPi/blank_launcher_rpi.jpg')}
/>

3. Use the file browser to locate the folder containing the game you wish to add. Double click on a folder to open it, and use **Go up** to go back up one level. 


4. Once you have selected the folder that contains the data files, click **Choose**. 

<img
  alt=" "
  src={useBaseUrl('img/RaspberryPi/adding_games_rpi.jpg')}
/>

5.  A dialog opens to allow configuration of various settings for the game. These can be reconfigured at any time, but for now everything should work at the default settings. Click **Ok**. 

<img
  alt=" "
  src={useBaseUrl('img/RaspberryPi/game_info_rpi.jpg')}
/>

6. Added games are now ready to launch!

---

## Launching games

There are two ways to launch a game:

- From the Launcher: 
	-	From the Applications menu, select **Games&nbsp;>&nbsp;ScummVM** to start the Launcher. Select a game and click **Start** to play. 

<img
  class="gif" 
  alt=" "
  src={useBaseUrl('img/RaspberryPi/launch_launcher.gif')}
/>

- From the command line: 
  * To launch a game with no additional options, run ```scummvm``` followed by the game id.   
  * To launch a game with options, run``` scummvm``` , followed by any desired options, and then the game ID. For more information, see the [Command line options](/advanced/command_line) page.

  * There are two ways to find the game id:
     1. Go to the game-specific settings. For more information, see the [Settings](#config) section.
     2. Alternatively, find the default game id on the [Supported games](../about/supported_games) page. 
 

In the following example, Flight of the Amazon Queen will be launched in full screen:

```
scummvm -f queen
```

<img
  class="gif" 
  alt=" "
  src={useBaseUrl('img/RaspberryPi/launch_commandline.gif')}
/>

---

## Settings <a id="config"></a>

Settings can be configured from the ScummVM Launcher, or by editing the configuration file directly. 

To edit global settings in the Launcher, run ScummVM and click **Options**. To edit game settings, choose a game and click **Edit Game**.

On the Raspberry Pi, the configuration file path is ```~/.config/scummvm/scummvm.ini```

To edit settings directly in the config file, navigate to the file in the File Manager. If the .config directory is not visible in the Home directory, select **View&nbsp;>&nbsp;Show Hidden** in the top menu. Open the config file with a text editor, and save it when the desired changes have been made. 

To edit the config file from the command line, type the following:
````
nano ~/.config/scummvm/scummvm.ini 
````
Use ```Control+O``` to save any changes. 

For more information about settings, see the [Global settings](../using/global_settings) or [Game settings](../using/game_settings) page. 

### Game saves

By default, games are saved to
````
/home/pi/.local/share/scummvm/saves
````

The save path can be changed in the config file by setting the savepath parameter.

Some engines allow saved games to be loaded directly from the command line. For more information, see the [List save section](../advanced/command_line#list_save) on the Command line options page. 