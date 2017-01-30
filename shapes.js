//USE STRICT
'use strict';
//Pull other files
var Square = require("./square.js");
var Triangle = require("./triangle.js");
var Pentagon = require("./pentagon.js");
//Constructor function
//CAPITALIZE
function Shape (type) {
	if(!(this instanceof Shape)) {
		return new Shape (type); 
	}

	this.type = type;
};

//Tie other shapes to original constructor
Square.prototype = new Shape();
Square.prototype.constructor = Square;

Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

//Give values to perform math
var triangleShape = new Triangle(3, 5, 3);
var squareShape = new Square(3);
var pentagonShape = new Pentagon(3, 5, 3, 2, 2);
var shape = new Shape("Constructor Shape");

//Determine type and size of constructors
console.log("The " + triangleShape.type + " has a total length of " + triangleShape.length);
console.log("The " + squareShape.type + " has a total length of " + squareShape.length);
console.log("The " + pentagonShape.type + " has a total length of " + pentagonShape.length);
console.log("This is the original " + shape.type);

if (triangleShape instanceof Triangle) {
	console.log("A Triangle is a Triangle.");
}
if (squareShape instanceof Square) {
	console.log("A Square is a Square.");
}
if (pentagonShape instanceof Pentagon) {
	console.log("A Pentagon is a Pentagon.");
}
if (shape instanceof Shape) {
	console.log("A Shape is a Constructor Shape.");
}
