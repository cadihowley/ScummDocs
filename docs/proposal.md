---
id: proposal
title: GSOD Proposal 2020
---
import useBaseUrl from '@docusaurus/useBaseUrl'

# Google Season of Docs 2020

## Objectives


1. To produce high-quality, versioned end user documentation by consolidating large
   amounts of information from disparate sources and re-writing
   information for clarity, consistency, and completeness. Documentation
   should be easy to understand for beginners, without being patronizing
   to tech-savvy users.
2. To create a documentation portal using a static-site generator.
3. To future-proof end user documentation by creating templates and
   detailed how-to instructions for future open source contributors.

## The current situation

-  The available ScummVM documentation is spread across multiple sources. 
-  Information is hard to find and often duplicated; it's easy to get lost in obscure pages. 
-  It's hard to know what information is current, and what is out of date. 
-  Some information is missing or incomplete.

## Fixing the problem

 
### Suggested documentation structure

````

   Landing Page
   |-- Getting Started
   |   `-- Quick start guide
   |-- Installing ScummVM
   |   |-- Nintendo 3DS
   |   |-- AmigaOS
   |   |-- Android
   |   |-- (every)
   |   |-- (common)
   |   |-- (supported)
   |   `-- (platform)
   |-- Using ScummVM
   |   |-- The Launcher
   |   |-- Global settings
   |   |-- Game settings
   |   `-- Keyboard shortcuts
   |-- Advanced options
   |   |-- Cloud and LAN
   |   |-- Control Mapping
   |   |-- Configuration
   |   |-- Command line options
   |   |-- Graphics
   |   `-- Music and sound
   |-- Help
   |   |-- FAQ
   |   |-- Contacts
   |   |-- Known problems
   |   `-- Reporting a bug
   `-- Release Notes
````

**Getting started**

New users often look for a quick start guide to get going as quickly as possible. While the install of ScummVM can be complex on some platforms, installing it onto a computer is not. 

The quickstart guide should cover the following:

 - How to install ScummVM onto Windows, Mac and Linux. 
 - How to load, add and launch a game. 

**Installing ScummVM**

In cases where the install is not intuitive, or where the user may not have a strong technical base, the user needs a comprehensive guide for installing ScummVM on any of the supported platforms.

Each comprehensive installation page should cover the following:

  - Any system requirements/prerequisites. 
  - How to download the appropriate version of ScummVM. 
  - How to install ScummVM. 
  - How to load games onto the chose platform, especially where it is not the platform the game was designed for. 
  - How to launch ScummVM, add a game, and launch a game.

**Using ScummVM**

Users need reference documents that explain how to use ScummVM.

The reference documents should cover the following: 

 -  The Launcher interface; what each window and tab looks like as well as how they function.
 -  An explanation of the available settings, both global and game-specific.
 -  Keyboard shortcuts/hotkeys.

**Advanced options**

Advanced users need additional, more technical information about the options available to them for tweaking how their games run.

**Release notes**

While our documentation will be versioned, having a Release Notes section may be     helpful to provide a summary of changes in the latest release. This may include some areas which are currently outside the scope of this documentation, such as newly supported games or information about new engines.  



### Plan of attack

I propose to start by creating a template for the **Installing ScummVM**
pages, as that will be the easiest way for me to get the information I
require from port maintainers/developers (especially where this
information is scant or does not exist). I will pre-fill any information
I already have from existing documentation, which can then be checked
for completeness, accuracy, and currency, or added to as necessary.

Next I will comb the existing documentation; README, wiki and website.
As I go, I will re-write and add to each section as required and pull
all the information into the new portal. I will also make note of what
information is pulled from where, to ensure that once the portal is live
there are no double-ups, contradictions, or other anomalies.

Throughout, I will liaise with the mentor(s), developers, port
maintainers, and any other subject matter experts to source any missing
information, as well as ensuring each page is as up-to-date and
comprehensive as possible.

In the spirit of collaboration and subject to approval from the
mentor(s), I would like to have the work-in-progress portal accessible
to the ScummVM community throughout the writing process, to receive
real-time feedback and ensure nothing is missed along the way.

I suggest using a style guide, such as the Google developer
documentation style guide, to ensure consistency for this body of work
and for all documentation moving forward. 

Wherever possible, I will use screenshots, gifs, and other visual aids to enhance understanding.


## Proposed timeline

### Community bonding

August 17 - September 13, 2020

- Continue to spend time talking to the mentor(s) and the wider ScummVM community to fine-tune the vision for the project and finalise details such as document structure and content.

### Week 1

September 14 - September 20

- Create a template for the platform-specific installation pages.
- Pre-fill the templates with any existing information and distribute to the appropriate port maintainers/developers for further information.

### Week 2

September 21 - September 27

- Set up the new documentation portal. 

### Week 3

September 28 - October 4

- Using ScummVM: 
  - The interface
  - Global settings
- Installing ScummVM: 
  - Platform-specific installation guides as completed templates are returned to me.

### Week 4

October 5 - October 11

- Using ScummVM:
  - Game settings
  - Keyboard shortcuts
- Installing ScummVM: 
  - Platform-specific installation guides as completed templates are returned to me

### Week 5

October 12 - October 18

- Advanced options:
  - Cloud and LAN
  - Control Mapping
- Installing ScummVM: 
  - Platform-specific installation guides as completed templates are returned to me

### Week 6

October 19 - October 25

- Advanced options:
  - Configuration
  - Command line options
- Installing ScummVM: 
  - Platform-specific installation guides as completed templates are returned to me


### Week 7

October 26 - November 1

- Advanced options:
  - Graphics 
  - Audio
- Installing ScummVM: 
  - Platform-specific installation guides as completed templates are returned to me


### Week 8

November 2 - November 8

- Help:
  - FAQ
  - Contacts
- Installing ScummVM:
  - Platform-specific installation guides as completed templates are returned to me


### Week 9

November 9 - November 15

- Help:
  - Reporting a bug
- Installing ScummVM:
  - Finalize any platform guides not yet completed.

### Week 10

November 16 - November 22

- Final editing, proofreading, and finalizing any portal related decisions such as sidebar navigation, theme/CSS tweaks etc. 
- Ensure all links work as expected. 
- Check images/gifs display correctly.

### Week 11

November 23 - November 30

- Finalize any outstanding items and officially launch the portal!
- Once the portal is launched, remove redundant information from other sources in consultation with the mentor(s).

## Writing samples

This prototype documentation portal shows how I intend to complete this project if I am selected. Its secondary purpose is to serve as a sample of my writing ability. 

The Raspberry Pi installation guide was written from scratch. The other sections were pulled from existing documentation, but have been edited and rewritten as required.



