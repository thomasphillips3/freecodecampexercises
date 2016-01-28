// A for loop can also count backwards, so long as we can define the right conditions.
//
// In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.
//
// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
//
// var ourArray = [];
// for (var i=10; i > 0; i-=2) {
//   ourArray.push(i);
// }
// ourArray will now contain [10,8,6,4,2].
//
// Let's change our initialization and final-expression so we can count backward by twos by odd numbers.
//
// Instructions
// Push the odd numbers from 9 through 1 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

for (var x=10; x>0; x--) {
  if (x%2 !== 0)
    myArray.push(x);
}
// Only change code below this line.
(function() {
  console.log("Hey IIFE");
})();
