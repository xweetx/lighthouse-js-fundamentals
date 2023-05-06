// We'll write a chooseStations(stations) function that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.
// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
// https://www.youtube.com/watch?v=16UXovpvyf8
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations(stations){
  const goodStations = []
  for(const station of stations){
    const capacity = station[1]
    if(capacity >= 20){
      const type = station[2]
      if(type === 'school' || type === 'community centre'){
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations))

//
function chooseStations(list) {
  var chosenOnes = [];
  for (let item of list) {
    if(item[1] >= 20 && (item[2] === 'school' || item[2] === 'community centre')) {
      chosenOnes.push(item[0]);
    }
  } 
  return chosenOnes;
}

console.log(chooseStations(stations));



