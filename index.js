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

//Breaking to a Label

//example 1
let c = 0;
mark: for (let i = 0; i < 5; i++) {
  console.log(i);
  inner: for (let j = 0; j < 5; j++) {
    console.log(j);
    c++;
    console.log(c++);
    {
      if (i == 2) break mark;
    }
  }
}
console.log(c);

//example 2
let b = 0;
mark: for (let i = 0; i < 5; i++)
  inner: for (let j = 0; j < 5; j++) {
    b++;
    {
      if (i == 2) break inner;
    }
  }
console.log(b);

//Breaking from a labeled non for-loop scope

block: {
  console.log("before");
  break block;
  console.log("after");
}

// Generator function:
function* mood() {
  yield "I";
  yield "want";
  yield "to";
  yield "cry";
}
for (let value of mood()) console.log(value);

//for loops and strings
let string = "awesomeness";
for (let value of string) console.log(value);

//for…of Loops And Arrays
let array = [0, 1, 2];
for (let value of array) console.log(value);

//for…of Loops And Objects
let object = { a: 1, b: 2, c: 3 };
for (let value of object) // Error: object is not iterable
  console.log(value);

//The Object.keys() method returns an array of
//  a given object's own enumerable property names, iterated in the same order that a normal loop would.

//The Object.values() method returns an array of a given object's own enumerable property values, in the
//  same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates
//  properties in the prototype chain as well.)

//The Object.entries() method returns an array of a given object's own enumerable string-keyed property
// [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference
// is that a for...in loop enumerates properties in the prototype chain as well).

//The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a
// need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

//keys
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

//value
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

//entries
const object1 = {
  a: "somestring",
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
