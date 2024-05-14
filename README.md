# GKM
An event based, Global Keyboard and Mouse listener.

Tested on Windows 7, but should work on Linux and Mac OS X as well (untested).

[![NPM](https://nodei.co/npm-dl/gkm.png)](https://nodei.co/npm/vnz-gkm/)

## Why?
Node didn't have any global keyboard and mouse listener available at the time.

## Requirements
GKM depends on [JNativeHook](https://github.com/kwhat/jnativehook), which runs on Java. Thus you will need to have a JVM available and more importantly, java availble on your PATH.

In the `lib` folder, you will find `gkm.jar`, which source you can find at https://github.com/tomzx/gkm-java.
You will also find `JNativeHook.jar`, which source you can find at https://github.com/kwhat/jnativehook.

## Getting started
Install vnz-gkm via node.js package manager:

    npm install vnz-gkm --save

Then require the package in your code:

```javascript
var vnz_gkm = require('vnz-gkm');
vnz_gkm.gkmPath = ... //replace jar path (optional)
var gkm = vnz_gkm.start()
// Listen to all key events (pressed, released, typed)
gkm.on('key.*', function(data) {
    console.log(this.event + ' ' + data);
});

// Listen to all mouse events (click, pressed, released, moved, dragged)
gkm.on('mouse.*', function(data) {
	console.log(this.event + ' ' + data);
});
//stop listener
vnz_gkm.events.removeAllListeners('key.*')
```

## License
The code is licensed under the MIT license (http://opensource.org/licenses/MIT). See license.txt.