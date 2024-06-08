var marks = [10, 25, 25, 94, 78, 55, 94, 45];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log("highest value:", max);
