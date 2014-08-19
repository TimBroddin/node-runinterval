runInterval
=========

The most stupid NPM-package ever. It's like setInterval, only it will fire your function straight away.

## Installation

  npm install runinterval --save

## Usage

  var runInterval = require('runinterval');

  var interval = runInterval(function() {
    console.log('Hello world!');
  }, 1000);

  clearInterval(interval);

## Release History

* 0.1.0 Initial release
