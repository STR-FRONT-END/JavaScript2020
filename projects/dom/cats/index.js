// learn how to select DOM elements with getElementById() and querySelector()
// these are our singular selectors

// console.log(document);
// const logoTitle = document.getElementById('logo-title');
// console.log(logoTitle);
const cardTitle1 = document.querySelector('.card-title');
const logoTitle = document.querySelector('#logo-title');
const header = document.querySelector('header');
// console.log(logoTitle);
// console.log(cardTitle1);
// console.log(header);

// things that return HTMLCollections
// getElementsByTagName(), getElementsByClassName()

const aTags = document.getElementsByTagName('a');
// console.log(aTags);

const menuATags = document.getElementsByClassName('menu-item');
// console.log(menuATags);

// stuff that returns a Nodelist
// querySelectorAll()

const cardTitles = document.querySelectorAll('.card-title');
// console.log(cardTitles);

// looping with Nodelists and HTMLCollections
cardTitles.forEach((element) => {
  // console.log(element);
});

Array.from(menuATags).forEach((element) => {
  // console.log(element);
});

// DOM manipulation
const dogImg = document.querySelector('.card-img-top');
// console.log(dogImg);

dogImg.src = 'https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
dogImg.alt = 'dogs are better :)';

const title = document.querySelector('h2');
title.textContent = 'Dogs are super cool!';

// DOM styling
const subtitles = document.querySelectorAll('.card-subtitle');
// console.log(subtitles[1]);
subtitles.forEach((subtitle) => {
  subtitle.style.color = 'dodgerblue';
});

// classList manipulation
const lastCard = document.querySelector('.card-text--last');
// console.log(lastCard);
lastCard.classList.remove('extra-stuff');
// lastCard.classList.add('extra-stuff');
lastCard.classList.toggle('extra-stuff');

// creating DOM elements and adding them to the DOM
const newContent = document.createElement('footer');
newContent.textContent = "Website by Keiran :)";
const bodyTag = document.querySelector('body');
bodyTag.append(newContent);
// bodyTag.prepend(newContent);

console.log(newContent);