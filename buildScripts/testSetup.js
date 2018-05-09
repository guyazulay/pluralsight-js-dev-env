//This file isn't transpiled , so must use commonJs and ES5

//Register babel to transpile before our tests run
require('babel-register')(); // 

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css']=function(){}; // webpack understand what is import file.css
                                        // but mocha doesn't. so we tell it that treat this 
                                        // statement as an empty function.
