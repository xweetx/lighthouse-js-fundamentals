// Our function will receive two arguments:

// The first argument, trash, is a string that will tell our function what type of item is being submitted.
// The second argument, bins, is an object containing three properties (waste, recycling, and compost), which hold some numerical value. Our function must increase the correct value in the bins object, and then return the newly updated object.

function smartGarbage(trash, bins) {
  bins[trash] ++;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));