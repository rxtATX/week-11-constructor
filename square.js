'use strict';
//Pull original constructor in
var shapes = require("./shapes.js");
//Declare square parameters
function Square (side) {
	if (!(this instanceof Square)) {
		return new Square (side);
	}
	this.type = "Square";
	this.side = side;
};
//Export Square object
module.exports = Square;