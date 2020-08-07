const firstCatPic = document.querySelector(".card-img-top");

// firstCatPic.addEventListener("click", (element) => {
//   console.log("Hello I am Cat!");
// })

const logoTitle = document.querySelector("#logo-title");

logoTitle.addEventListener("mouseover", (event) => {
  event.target.style.color = "hotpink";
})

logoTitle.addEventListener("mouseleave", (event) => {
  event.target.style.color = "white";
})



// const logo = document.querySelector(".logo");

// logo.addEventListener("click", (event) => {
//   event.target.style.display = "none";
// })



const firstselect = document.querySelector('.logo');
firstselect.addEventListener('click', (e) => {
  e.target.style.border = '20px solid yellow';
})


firstCatPic.addEventListener('mouseenter', () => {
    firstCatPic.style.transform = "scale(1.2)";
    firstCatPic.style.transition = "transform 1s";
  });
  firstCatPic.addEventListener('mouseleave', () => {
    firstCatPic.style.transform = "scale(1)";
  });
  
//   const logoTitle = document.querySelector('.logo');
//   logoTitle.addEventListener('dblclick', () => {
//     logoTitle.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png";
//   });
  
const allCatPics = document.querySelectorAll('.card-img-top');
// console.log(allCatPics);
window.addEventListener('resize', () => {
    allCatPics.forEach((pic) => {
      pic.src = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
    });
});