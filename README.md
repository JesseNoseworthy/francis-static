# Francis' static website (WIP)

This is a static website that will serve as a basic HTML/CSS project with some light JavaScript. The purpose of this project is to provide a temporary website for a friend.


### Getting started

All development pertaining to stylesheets and scripts can be completed in the `dev` folder, and all HTML can be completed in `public/index.html`. 

The gulpfile will compile the necessary files in the `dev` folder and add them into the `public` folder. **Do not** modify any stylesheets or scripts from within the `public` folder, as they will get overwritten when gulp compiles.

To start a localhost, navigate to the repositories directory from within your command line and enter the command `gulp`. This will activate the `gulpfile`.
