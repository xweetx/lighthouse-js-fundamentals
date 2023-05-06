/*
Create a function called judgeVegetable() that will decide which veg. 
is best based on a given judging characteristic.
the parameters for judgeVegetable(vegetables, metric) 
  - veggies takes in the array of objects 
  - metric chooses which quality it judges.
the function must return the name of the person who submitted with
  vegetables.submitter (veg with the highest ranking in the metric)


if the contest had these contestents: 

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)

the winner would be 'Old Man Franklin'

*/

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

const judgeVegetable = function(vegetables, metric) {
  let ratingArray = [];
  let highestRating = null;
  for (let i = 0; i < vegetables.length; i++) {
    ratingArray.push(vegetables[i][metric]);
  }
  highestRating = ratingArray.indexOf(Math.max(...ratingArray));
  return vegetables[highestRating].submitter;
}

judgeVegetable(vegetables, metric)
// prints who wins
console.log(judgeVegetable(vegetables, metric));




// // other people's solution to the problem.

// const judgeVegetable = function (vegetables, metric) {
//   vegetables.sort(function (a, b) {
//     return b[metric] - a[metric];
//   });
//   return vegetables[0].submitter
// }