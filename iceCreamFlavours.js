const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];

let icecream = iceCreamFlavours
console.log(icecream)

icecream.push('root beer')
console.log(icecream)
console.log(icecream[0])
console.log(icecream[5])
console.log(icecream.length)

// other option
// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];

var iceCreamFlavours2 = Array.from(iceCreamFlavours);
iceCreamFlavours2.push("root beer");

console.log(iceCreamFlavours2);

console.log(iceCreamFlavours2[0]);

console.log(iceCreamFlavours2[iceCreamFlavours2.length-1]);

console.log(iceCreamFlavours2.length);