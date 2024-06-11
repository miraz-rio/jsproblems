// Initialize the array with the given numbers
var number = [3, 55, 54, 54, 35, 75, 85, 20, 23];

// Initialize an empty array to store unique elements
var uniqueName = [];

// Use a for loop to iterate through the number array
for (var i = 0; i < number.length; i++) {
    var element = number[i];
    var index = uniqueName.indexOf(element);
    
    // If the element is not found in uniqueName array, add it
    if (index == -1) {
        uniqueName.push(element);
    }
}

// Output the array of unique elements
console.log(uniqueName);
