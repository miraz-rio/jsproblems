var a = 5;
var b = 8;
// console.log("before swap: a=", a, "b=", b);
var tamp = a;
a = b;
b = tamp;
// console.log("after swap: a=", a, "b=", b);

var x = 8;
var y = 10;
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap: x=", x, "y=", y);

var p = 2;
var q = 3;
[p, q] = [q, p];
console.log("after swap: p=", p, "q=", q);