// EVENT PROPAGATION
// const body = document.querySelector('body');
// const cardGroup = document.querySelector('.card-group');
// const card = document.querySelector('.card');
// // console.log(body);
// // console.log(cardGroup);
// // console.log(card);
// body.addEventListener('click', () => {
//   console.log('Clicked body!');
//   body.style.backgroundColor = 'hotpink';
// });
// cardGroup.addEventListener('click', () => {
//   console.log('Clicked cardGroup!');
//   cardGroup.style.backgroundColor = 'forestgreen';
// });
// card.addEventListener('click', () => {
//   console.log('Clicked card!');
//   card.style.backgroundColor = 'dodgerblue';
// });












//STOP PROPAGATION

const body = document.querySelector('body');
const cardGroup = document.querySelector('.card-group');
const card = document.querySelector('.card');
// console.log(body);
// console.log(cardGroup);
// console.log(card);
body.addEventListener('click', (e) => {
  // console.log(e);
  e.stopPropagation();
  console.log('Clicked body!');
  body.style.backgroundColor = 'hotpink';
});
cardGroup.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Clicked cardGroup!');
  cardGroup.style.backgroundColor = 'forestgreen';
});
// card.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Clicked card!');
//   card.style.backgroundColor = 'dodgerblue';
// });
// const nav = document.querySelector('nav');
// const navas = document.querySelector('.menu-item');
// nav.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Clicked navigation!');
//   nav.style.backgroundColor = 'forestgreen';
// });
// navas.addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log('Clicked navigation item!');
//   navas.style.backgroundColor = 'dodgerblue';
// });




















// const body = document.querySelector('body');
// body.addEventListener('click', (e) => {
//   console.log(e.target);
//   e.target.style.backgroundColor = 'black';
// });









// PREVENTDEFAULT
// const home = document.querySelector('a');
// console.log(home);
// home.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('Link did not fire!');
// });


const cards = document.querySelectorAll('.card');
cards.forEach((el, index) => {
  if(index === 0) {
    el.addEventListener('click', (e) => {
      console.log(e.target);
  });
  }
});