//print variables value 
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  
  return 'Night Sky ' + satellite + ', ' + stars + ', ' + galaxy;
}
console.log(myNightSky());



//how to find the value assigned to a variable
const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(myNightSky());
console.log(stars);