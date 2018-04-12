//using forEach function parameter
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem)
});


// using arrow function syntax 
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];
/*
fruits.forEach(function(fruitItem){
  console.log('I want to eat a ' + fruitItem)
});*/
// Iterate over fruits below
fruits.forEach(fruitItem => console.log ('I want to eat a ' + fruitItem))

//using .map with function parameter and arrow function syntax
let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(function(animals){
  return animals[0];
})
let secretMessage = animals.map(animals => animals[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(function(word){
  return word.length > 5;
})


// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(bigNumbers){
  return bigNumbers/100;
})
let smallNumbers = bigNumbers.map(bigNumbers => bigNumbers/100);

//using arrow function syntax method 
let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
let smallNumbers = randomNumbers.filter(function(number){
  return number.length < 250
  console.log(smallNumbers)
});


let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/*let longFavoriteWords = favoriteWords.filter(function(word) {
  return word.length > 7;
});*/
let longFavoriteWords = favoriteWords.filter(favoriteWords => favoriteWords.length > 7);
// Refactor the code above using arrow function syntax


//missing word in the function paramter 
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));


//create a new array
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array
let interestingWords = words.filter(function(word){
  return word.length > 5;
})


using arrow function syntax
let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word =>  word.length > 5      ));


let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
let longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a new array
let smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
