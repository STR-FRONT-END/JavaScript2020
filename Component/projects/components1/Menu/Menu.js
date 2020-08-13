
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menuRef.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menuRef = document.querySelector('.menu');
//console.log(menuRef);

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
//console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => { toggleMenu()
 // console.log('working')

})