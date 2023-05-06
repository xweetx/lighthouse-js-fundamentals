console.log('While Loops')
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!\n");

// (0 < 10) // repeat is 0
// (1 < 10) // repeat is 1
// (2 < 10) // repeat is 2
// (3 < 10) // repeat is 3
// (4 < 10) // repeat is 4
// (5 < 10) // repeat is 5
// (6 < 10) // repeat is 6
// (7 < 10) // repeat is 7
// (8 < 10) // repeat is 8
// (9 < 10) // repeat is 9
// (10 < 10) // repeat is 10

const chorus2 = "Let's dance!";
let repeat2 = 0;
while (repeat2 < 10) {
  if (repeat2 === 5) {
    console.log("*change key*");
  }
  console.log(chorus2);
  repeat2++;
}
console.log("Until the sun comes up!");

