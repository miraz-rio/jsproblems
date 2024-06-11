var speech =
  "I am a professional Graphic Designer and compassionate about my work.";
var count = 0;

for (var i = 0; i < speech.length; i++) {
  var char = speech[i];
  if (char == " ") {
    count++;
  }
}
count++;
console.log(count);
