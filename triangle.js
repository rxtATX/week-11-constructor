'use strict';

var shapes = require("./shapes.js");

function Triangle (side1, side2, side3) {
	if (!(this instanceof Triangle)) {
		return new Triangle (side1, side2, side3);
	}
	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

module.exports = Triangle;