// Initialize the array with the given numbers
var numbers = [10, 25, 25, 94, 78, 55, 94, 45];

// Initialize the sum variable
var sum = 0;

// Use a for loop to iterate through the array and calculate the sum
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
    // sum += numbers[i];
}

// Output the result
console.log("The sum of the numbers is: ", sum);





// Define the function to sum the numbers in an array
function sumArray(arr) {
    // Initialize the sum variable
    var sum = 0;

    // Use a for loop to iterate through the array and calculate the sum
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Return the result
    return sum;
}

// Initialize the array with the given numbers
var numbers = [10, 25, 25, 94, 78, 55, 94, 45];

// Call the function and store the result
var totalSum = sumArray(numbers);

// Output the result
console.log("The sum of the numbers is: ", totalSum);

