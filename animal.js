/* There are several syntax errors and logical issues in the provided code. Here is the corrected and completed version that follows the logical flow:

Calculate animal if depth is 10 or less.
Calculate animal if depth is between 11 and 20.
Calculate animal if depth is greater than 20. */

var depth = 7;
var animal = 0;

if (depth <= 10) {
    animal = depth * 50;
} else if (depth <= 20) {
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
} else {
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;
}

console.log(animal); // Output the value of animal

/* Here's a breakdown of the code logic:

If depth is less than or equal to 10, calculate animal as depth * 50.
If depth is between 11 and 20, calculate the first part for the first 10 units, and the second part for the next depth - 10 units.
If depth is greater than 20, calculate the first part for the first 10 units, the second part for the next 10 units, and the third part for the remaining depth - 20 units.
For depth = 17, the output will be 1200, as calculated previously. */