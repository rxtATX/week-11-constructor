'use strict';

var shapes = require("./shapes.js");

function Square (side) {
	if (!(this instanceof Square)) {
		return new Square (side);
	}
	this.type = "Square";
	this.side = side;
};

module.exports = Square;