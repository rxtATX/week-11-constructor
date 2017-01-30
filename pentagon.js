'use strict';

//Declare new object
function Pentagon (side1, side2, side3, side4, side5) {
	if (!(this instanceof Pentagon)) {
		return new Pentagon (side1, side2, side3, side4, side5);
	}
	this.type = "Pentagon";
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;
}
//Export this object
module.exports = Pentagon;