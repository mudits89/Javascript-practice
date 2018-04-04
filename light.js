// calling the function and printing the varibale within the function
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight'
  console.log(lightWaves);
}

visibleLightWaves();

// error will be given as variable is defined within the function
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight'
  console.log(lightWaves);
}

visibleLightWaves();
console.log(lightWaves);

defining a variable within an if statement
const visibleLightWaves = () => {
  let lightWaves = 'Moonlight'
  let region = 'The Arctic'
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights'
   console.log(lightWaves);
  } else {
    return false;
  }
  console.log(lightWaves);
}

visibleLightWaves();