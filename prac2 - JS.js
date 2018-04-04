let moonPhase = 'solar eclipse';
// single condition
if (moonPhase === 'full'){
  console.log('Howl!')
}else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier')
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet')
} else{
  console.log('Invalid moon phase')
}



let moonPhase = 'full';
let isFoggyNight = false;
//both conditions have to be true
if (moonPhase === 'full' && isFoggyNight === true){
  console.log('Howl!')
}else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier')
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet')
} else{
  console.log('Invalid moon phase')
}


let moonPhase = 'full';
let isFoggyNight = false;
//either condition has to be true
if (moonPhase === 'full' || isFoggyNight === true){
  console.log('Howl!')
}else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier')
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet')
} else{
  console.log('Invalid moon phase')
}

let moonPhase = 'full';
//let isFoggyNight = false;
switch (moonPhase) {
  case 'full':
    console.log('Howl');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
                 }