function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = factorial(5);
console.log('result:', result);


function factorialRecursive(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * factorialRecursive(num - 1);
    }
}

var resultRecursive = factorialRecursive(5);
console.log('Recursive result:', resultRecursive);