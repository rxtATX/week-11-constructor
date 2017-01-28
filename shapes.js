'use strict';

var Square = require("./square.js");
var Triangle = require("./triangle.js");
var Pentagon = require("./pentagon.js");

function Shape (type) {
	if(!(this instanceof Shape)) {
		return new Shape (type); 
	}
	this.type = type;
};

Shape.prototype.get_type = function() {
	return "This shape is " + this.type;
};

Shape.prototype.get_totalLength = function() {
	var length;
	if (this.type === "Triangle") {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === "Square") {
		length = 4 * this.side;
	} else if (this.type === "Pentagon") {
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	return length;
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

var triangleShape = new Triangle(3, 5, 3);
var squareShape = new Square(3);
var pentagonShape = new Pentagon(3, 5, 3, 2, 2);
var shape = new Shape("shape");

console.log(triangleShape.get_type() + " | " + triangleShape.get_totalLength());
console.log(squareShape.get_type() + " | " + squareShape.get_totalLength());
console.log(pentagonShape.get_type() + " | " + pentagonShape.get_totalLength());
console.log(shape);

console.log(triangleShape instanceof Triangle);
console.log(squareShape instanceof Square);
console.log(pentagonShape instanceof Pentagon);
console.log(shape instanceof Shape);

module.exports = Shape;