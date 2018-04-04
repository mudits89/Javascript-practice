// function using if else 
function isGreaterThan (numberOne, numberTwo) {
  if ( numberOne > numberTwo) {
    return true; } else {
      return false;
    }
  
}

isGreaterThan(700,450)


//using arrow function syntax
const isGreaterThan = (numberOne, numberTwo) => {
  if ( numberOne > numberTwo) {
    return true; } else {
      return false;
    }
}

isGreaterThan(500,350)


//calculate volume of a sphere using arrow function syntax
const volumeOfSphere = diameter => 
  (1/6) * Math.PI * diameter * diameter * diameter;


console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');