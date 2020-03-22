for (let i = 0; ; i++) {
  console.log("loop, i = " + i);
  if (i > 1) break;
}

for (let a = 3; ; a++) {
  console.log("loop, a = " + a);
  if (a > 10) break;
}
//infinite loop
//for(;;) console.log("hi");

//multiple statements
let counter = 0;
function inc() {
  counter++;
}
for (let i = 0; i < 10; i++, inc());
console.log(counter);

//Increment Numbers
let counter1 = 0;
for (let i = 0; i < 10; i++) counter1++;
counter1;

//For loops and let scope
//for (var i = 0; i < 10; i++) let x = 1 throws error. Need to add curly brackets arount let statement
for (var i = 0; i < 10; i++) {
  let x = i;
}

//Nested for loops
for (let y = 0; y < 2; y++) for (let x = 0; x < 2; x++) console.log(x, y);

//3d array
for (let y = 0; y < 2; y++)
  for (let x = 0; x < 2; x++) for (let z = 0; z < 2; z++) console.log(x, y, z);

//Loops length
for (let i = 0; i < 3; i++) console.log("loop.");

for (let i = 0; i < 3; i++) {
  let loop = "loop.";
  console.log(loop);
}
console.log(i); //10

//skipping steps
for (let i = 0; i < 3; i++) {
  if (i == 1) continue;
  console.log(i);
}

//Breaking Early
for (let i = 0; ; i++) {
  console.log("loop");
  break;
}
