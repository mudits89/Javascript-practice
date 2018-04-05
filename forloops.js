// using for loop to iterate over the array to print each one with actually writing it down manually
let vacationSpots =['Vancouver','Bali','Amsterdam']

for(let vacationSpotIndex = 0 ; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++ ){
  console.log('I would love to visit ' +  vacationSpots[vacationSpotIndex]);
}

// reverse for loop
let vacationSpots =['Vancouver','Bali','Amsterdam']
/*
for(let vacationSpotIndex = 0 ; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++ ){
  console.log('I would love to visit ' +  vacationSpots[vacationSpotIndex]);
}*/

for(let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0 ;  vacationSpotIndex-- ){
  console.log('I would love to visit ' +  vacationSpots[vacationSpotIndex]);
}

//nested for loop to find common places 
let myPlaces = ['New York', 'London', 'Paris'];
let friendPlaces = ['Bali', 'Macau', 'Paris'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length;
     myPlacesIndex++){
   for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++){
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]){
      console.log('Match: ' + myPlaces[myPlacesIndex] )
    }
  }
}