// Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

// rectangle: length × width
// triangle: base × height / 2
// circle: π × radius2
// If any of the parameters are negative, the function should return undefined.

function calculateRectangleArea(length, width) {
  if ((length < 0) || (width < 0)){
    return undefined;
  }
  return length * width;
}
function calculateTriangleArea(base, height) {
  if ((base < 0) || (height < 0)){
    return undefined;
  }
  return (base * height) / 2;
}
function calculateCircleArea(radius) {
  if ((radius < 0)){
    return undefined;
  }
  return Math.PI * (radius * radius); //or Math.PI * Math.pow(radius, 2);
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined