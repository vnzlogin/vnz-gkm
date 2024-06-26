'use strict';

// TODO: Verify if we're getting loaded from multiples location and prevent creating new child processes?

var EventEmitter2 = require('eventemitter2').EventEmitter2;
var path = require('path');
var spawn = require('child_process').spawn;

var vnz = {
	gkmPathDefault: path.join(__dirname, 'lib/gkm.jar'),
	gkmPath: '',
	events: null,
	start() {
		var events = new EventEmitter2({wildcard: true});
		var gkm = spawn('java', ['-jar', this.gkmPath ? this.gkmPath : this.gkmPathDefault]);
		gkm.stdout.on('data', function(data) {
			data = data.toString().split(/\r\n|\r|\n/).filter(function(item) { return item; });
			for (var i in data) {
				var parts = data[i].split(':');
				events.emit(parts[0], parts.slice(1));
			}
		});
		this.events = events
		return events
	}
}


module.exports = vnz;
