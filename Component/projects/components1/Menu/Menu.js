
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menuRef.classList.toggle('menu--open');
// }

// // Start Here: Create a reference to the ".menu" class
// const menuRef = document.querySelector('.menu');
// //console.log(menuRef);

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button')
// //console.log(menuButton);
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', () => { toggleMenu()
//  // console.log('working')

// })

function menuMaker(arr){
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  arr.map((e) => {
   let ele = document.createElement('li')
   ele.innerText = e;
    ul.appendChild(ele);
  })
  menu.appendChild(ul);
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })
  return menu;
}
const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));