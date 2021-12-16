//RUN NPM START FOR BABEL TO WORK

// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require('@babel/register')({
    presets: ['@babel/preset-env'],
});
require('regenerator-runtime/runtime');

// Import the rest of our application.
module.exports = require('./src/index.js');
