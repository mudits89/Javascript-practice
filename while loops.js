//using while loop with condition in the brackets
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Spade';

while (currentCard != 'Heart') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}
console.log('found a spade');

//to prevent infintiy loops
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Spade';

while (currentCard != 'Heart') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
  break;
}
console.log('found a spade');


