# Terminal Change Log
Author: Zachariah Sobieszczyk
Project: zTerminal

Change Log is for taking down version changes and chewing gum.... and it's all out of gum.
Ripped off the format for this log from [keepachangelog.com].
I have never really programmed anything that required me to keep track of versions. As such, my version numbering follows no standard, is based on gut feelings and quite arbitrary.  

## [Upcoming]
-Get rid of the clear counter as it is a very ineloquent workaround.  
-Individual Man pages for all commands
-File System
-Oregon Trail
-Fallout style hacking game
-The ability to nmap from terminal
-Better functionality.
-Customization options.
-Other things...

## [0.3] - 2017-5-09
### Added
- Integrated terminal to "OccultOs" Desktop Emulator. It nicely fits down into a modal
- cleaned up css to make it easier to customize and makes it more "plug and play"
- All commands are now accessed conveniently via a loop instead of individually, making it easier to add commands.
- Commands that run code can now also be run through the same system as the "basic commands"

## [0.2] - 2017-5-05
### Added
- Basic Commands are now stored in an object array, making it easy to swap out commands, change them and read.
- Basic Command objects now have 3 variables; title (the actual command), termResp (how the terminal responds to such a command), helpResp (how the help command describes each command).
- The help command now counts as 8 lines towards the clear counter.
- The input line is now focused every time the terminal is clicked.
- The command copy function is now separate from the command printing function.
- Separated into two different versions of the terminal, one which is full screen and one that is contained inside of a modal (not yet implemented).

## [0.1] - 2017-5-03
### Added
- All basic terminal functions
- terminal's css
