function factorial(num) {
  var fact = 1; // Initialize the factorial result to 1
  for (var i = 1; i <= num; i++) {
    // Loop from 1 to the given number
    fact = fact * i; // Multiply the current value of fact by the loop index i
  }
  return fact; // Return the final factorial result
}
function factorialRecursive(num) {
  if (num == 1) {
    // Base case: if the number is 1
    return 1; // Return 1 because the factorial of 1 is 1
  } else {
    // Recursive case: if the number is greater than 1
    return num * factorialRecursive(num - 1); // Return num times the factorial of (num - 1)
  }
}
var resultRecursive = factorialRecursive(5); // Call the recursive function with 5
console.log("Recursive result:", resultRecursive); // Log the result of the recursive function

var resultIterative = factorial(50); // Call the iterative function with 50
console.log("Iterative result:", resultIterative); // Log the result of the iterative function
