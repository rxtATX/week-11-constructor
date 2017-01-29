//EVERYTHING IN ONE FILE; I THINK WE ARE SUPPOSED TO BREAK THIS UP.

'use strict';
//construtor function for shapes, double checks of we put new while creating a "new shape"
function Shape (type) {
	if(!(this instanceof Shape)){
		return new Shape (type);
	}

	this.type = type;
};

//adding a get_type function to the Shape prototype which will return shape type
Shape.prototype.get_type = function() {
	return "This shape type is " + this.type;
};

//adding a get_totalLength function to the Shape prototype which will return the total length
Shape.prototype.get_totalLength = function () {
	var length = 0;
	if (this.type === 'Triangle') {
		length = this.side1 + this.side2 + this.side3;
	} else if (this.type === 'Square') {
		length = 4 * this.side;
	} else if (this.type === "Pentagon") {
		length = this.side1 + this.side2 + this.side3 + this.side4 + this.side5;
	}
	return length;
};

//construtor function for new squares by creating a var square by using the Shape construtor and adding a side to the var and returning it to the new square.
function Square (side) {
	if(!(this instanceof Square)){
		return new Square (side);
	}

	this.type = "Square";
	this.side = side;
};

//slapping Shape stuff into Square 
Square.prototype = new Shape();
Square.prototype.construtor = Square;

//construtor function for new triangle by creating a var triangle by using the Shape construtor and adding a side to the var and returning it to the new triangle.
function Triangle (side1, side2, side3) {
	if(!(this instanceof Triangle)){
		return new Triangle (side1, side2, side3);
	}

	this.type = "Triangle";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

//slapping Shape stuff into Triangle 
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

//construtor function for new Pentagon by creating a var triangle by using the Shape construtor and adding a side to the var and returning it to the new pentagon.
function Pentagon (side1, side2, side3, side4, side5) {
	if(!(this instanceof Pentagon)){
		return new Pentagon (side1, side2, side3, side4, side5);
	}

	this.type = "Pentagon";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
};

//slapping Shape stuff into Triangle 
Pentagon.prototype = new Shape();
Pentagon.prototype.construtor = Pentagon;


//creating variables of each constructor
var tri1 = new Triangle(3,4,5);
var square1 = new Square(4);
var pent1 = new Pentagon(1,2,3,4,5);
var shape = new Shape("shape");


//getting different types
console.log(tri1.get_type());
console.log(tri1.get_totalLength());
console.log(square1.get_type());
console.log(square1.get_totalLength());
console.log(pent1.get_type());
console.log(pent1.get_totalLength());
console.log(shape);

// Ensuring instanceof works as expected.
console.log(tri1 instanceof Triangle);
console.log(square1 instanceof Square);
console.log(pent1 instanceof Pentagon);
console.log(shape instanceof Shape);