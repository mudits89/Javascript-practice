kelvin = 294;
console.log(kelvin);

//Kelvin to Celsius
const celsius = kelvin - 273;
console.log(celsius);

//Celsius to Fahrenheit
fahrenheit = celsius * (9/5) + 32;
//Round off to nearest number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

Newton = celsius * (33/100);
newton = Math.floor(Newton);
console.log(`The temperature is ${newton} degrees Newton`)