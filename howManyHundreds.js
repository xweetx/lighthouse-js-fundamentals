// When this function is given a number, it should return how many hundreds fit into that number.
// For example:
// howManyHundreds(1000);
// output: 10
function howManyHundreds(num) {
  return Math.floor(num / 100);
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);