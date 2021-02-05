# Play With Tensorflow JS

This repository has a very minimal/basic setup to let you quickly launch a browser page where you can experiment with `TF.js` code and see results in the console and the webpage interactively. The `index.html` file doesn't contain anything more than very basic html and imports the `tensorflow.js` library along with our own `TF.js` code.

## How do I play ?
1. Open the `tfCode.js` file and write all your javascript and `TF.js` code inside of it.
2. For any values that you want to log on the webpage and console, use the `updateLogStatus` function. It will log the passed value to both the console and the webpage.
3. I recommend using the `Live Server` extension in VS Code to serve `index.html` while you make changes to `tfCode.js` for a very interactive experience.
4. You can always just open `index.html` in the browser manually and keep reloading it with every change in `tfCode.js`.

Once you have a look at `tfCode.js`, most things should be self explanatory.