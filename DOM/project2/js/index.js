// Your code goes here
//1. A alert box with a message pops whenpage loads
window.addEventListener('load', (event) => {
  alert('THANKS FOR VISITING THE FUN BUS WEBSITE, GET READY FOR A RIDE YOU WILL NEVER FORGET');
});

//2. Background color changes when a key is pressed
document.addEventListener('keydown', ev => {
  ev.target.style.backgroundColor = 'black';
  ev.target.style.color = '#FFFFFF'
});

//3.Background, border, and logo color changes on hover and 

//Step 1. find the elment to put eventlistener on and store it in a variable
const changeNavBg = document.querySelector('.main-navigation');
//Step2.Create the function that will respond to the event
changeNavBg.addEventListener('mouseenter',(ev) =>{
  ev.target.style.backgroundColor = '#FEBB4E';
  ev.target.style.borderColor = 'black';
  ev.target.style.color = '#FFFFFF';
});

//4. Header Backgground color changes back to original color when mouse is removed
changeNavBg.addEventListener('mouseleave',(ev) =>{
  ev.target.style.backgroundColor = '#FFFFFF';
  ev.target.style.color = '#212529';
});

//5. Changes the size and color of nav items on hover and 
const changeNavTextSize = document.querySelectorAll('nav a');
changeNavTextSize.forEach(a => {
  a.addEventListener('mouseenter', (ev) => {
      ev.target.style.fontSize = '3rem';
      ev.target.style.color = '#FFFFFF';

  });
});


//preventDeafult
const preDefault = document.querySelectorAll('nav a');
preDefault.forEach(a => {
  a.addEventListener('click', (ev) => {
      ev.target.preventDefault();

  });
});

//6. Changes the size and color of navigation items back to original when mouse is moved off*/
changeNavTextSize.forEach(a => {
  a.addEventListener('mouseleave', (ev) => {
      ev.target.style.fontSize = '1.6rem';
      ev.target.style.color = '#212529';
  });
});




//7. message appers when 'Lets Go' is clicked
const messageBox = document.createElement('span');
messageBox.textContent = 'ARE YOU READY TO JOIN THE FUN BUS';
messageBox.style.fontSize ='3.5rem'
messageBox.style.backgroundColor ='#FEBB4E'
messageBox.style.borderRadius ='50%'
messageBox.style.padding ='20px'
messageBox.style.margin ='0 0 25px 60px'
const message = document.querySelector('.content-section');
message.addEventListener('click', () => {
  message.prepend(messageBox);
});




const newButton = document.querySelectorAll('.btn');

//8. Button color changes on hover 
newButton.forEach(btn => {
btn.addEventListener('mouseenter',(ev) =>{
  ev.target.style.backgroundColor = 'red';
  ev.target.style.color = '#212529';
})
});

//9. Button color changes when mouse leaves
newButton.forEach(btn => {
btn.addEventListener('mouseleave',(ev) =>{
  ev.target.style.backgroundColor = '#FEBB4E';
  ev.target.style.color = '#212529';
})
});


//10. Button Color changes when clicked
newButton.forEach(btn => {
  btn.addEventListener('click', ev =>{
      ev.target.style.backgroundColor = 'purple';
      ev.stopPropagation();
  });
});

//11. The backgorund of the text(FUN IN SUN, MOUNTAIN EXCURSION, ISLAND GETAWAY) near the button changes on click
const buttonArea = document.querySelectorAll('.destination h4');
buttonArea.forEach(btn => {
  btn.addEventListener('click', ev =>{
      ev.target.style.backgroundColor = '#FEBB4E';
      ev.target.style.color = 'black'
      ev.target.style.borderRadius = '50%'
      ev.target.style.fontSize = '2rem'
      ev.target.style.padding = '10px 0 5px 50px'
  });
});



//CODE I COULD NOT GET TO WORK
const picBorder = document.querySelectorAll('.destination');
picBorder.addEventListener('click', ev => {
  ev.target.style.border = '2px solid #FEBB4E';
  
});

const newFooter = document.querySelector('footer');
newFooter.addEventListener('click',(ev) =>{
  ev.target.style.backgroundColor = '#FFFFFF';
  ev.target.style.color = '#212529';
  
});
