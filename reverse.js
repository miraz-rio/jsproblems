function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "I am a professional Graphic Designer.";
var forText = reverseString(statement);
console.log(forText);
