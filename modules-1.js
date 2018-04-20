// exporting of module 
let Airplane = {};
	Airplane.myAirplane = 'StarJet';
	module.exports = Airplane;
	
//import Airplane module, create a function and call it 	
const Airplane = require('./1-airplane.js');
	function displayAirplane() {
    console.log(Airplane.myAirplane);
  }
displayAirplane();
  

//2-airplane.js
let Airplane = {};

module.exports ={
  myAirplane:"CloudJet",
   displayAirplane: function(){
    return this.myAirplane;
   }
};

//use require function to call from 2-airplane.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());


//airplane.js 
//add two array elements that are of type object	
let Airplane = {};

export default Airplane;
Airplane.availableAirplanes = [{
  name:'AeroJet',
  fuelCapacity: 800
},
{name: 'SkyJet',
 fuelCapacity: 500
 }                            
 ];
 
 
 