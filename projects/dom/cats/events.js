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



// /*Objectives:
// - Explain what events are in the browser window, and how event listeners can listen for those events.
// - add event listeners and event handlers to elements.
// - recognize event propagation and the method used to prevent it.
// */



// // Step 1: Adding Events to Elements
// // addEventListener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// const catImage = document.querySelector(".card-img-top")

// // 1a. Add mouseenter event
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
// // NOTE: we can apply an addEventListener to a target or window. 
// catImage.addEventListener("mouseenter", () => {
//   // when "mouseenter" fires, the following styles are applied to the image. These are now
//   // on the image regardless of where our mouse is. You can confirm this by hovering over the image, 
//   // moving to a new part of the page and then looking at the <img> in inspector tools. 
//   // You'll see the below styles are still applied.
//   catImage.style.transform = "scale(1.2)"
//   catImage.style.transition = "all 0.3s"
// })

// // 1b. Add mouseleave event 
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event
// catImage.addEventListener("mouseleave", (event) => {
//   // when the "mouseleave" event occurs, the transform style is overwritten with "scale(1)"
//   event.target.style.transform = "scale(1)"
// })


// // 1c. Add dblclick event
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// const logo = document.querySelector('.logo-container img')
// logo.addEventListener('dblclick', () => {
//   // change image on dblclick
//   logo.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
// })


// // 1d. Add resize event
// // https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
// // NOTE: This is on the window since the event happens to the window, not the DOM
// // Add the addEventListener on whatever target (element, window, document) you are listening for the event (resize) to occur. 
// const dogsRule = document.getElementsByClassName('card-img-top')[1]
// window.addEventListener('resize', () => {
//   dogsRule.src = "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
// })

// // 1e: Event object
// const cardTitles = document.querySelectorAll('.card-title')


// // 1f: Add an event to each card-title that when you click, the text turns green.
// // THIS IS BAD CODE! We do not want to reference individual array indices to declare addEventListeners on each element
// // cardTitles[0].addEventListener('click', (event) => {
// //   event.target.style.color ='green'
// // })
// // cardTitles[1].addEventListener('click', (event) => {
// //   event.target.style.color ='green'
// // })
// // cardTitles[2].addEventListener('click', (event) => {
// //   event.target.style.color ='green'
// // })
// // cardTitles[3].addEventListener('click', (event) => {
// //   event.target.style.color ='green'
// // })

// // 1g: Refactor 1e to use forEach

// // can pull out the function into its on const
// // this would replace (event) => {}
// const onClick = event => event.target.style.color = 'green'

// // NodeList of cardTitles
// cardTitles.forEach(title => {
//   // for each title from NodeList, addEventListener for 'click' events
//   title.addEventListener('click', (event) => {
//     // when someone clicks a title, their specific addEventListener handler function fires
//     // event.target IS the title that was clicked
//     console.log(event.target)
    
//     // change title using event.target to green
//     // toggle colors based on current color of target
//     event.target.style.color = event.target.style.color === "green" ? "blue" : "green"
//   })
// })





// // Step 2: Event Propagation
// //

// // 2a. Example of event propagation
// // set up 
// const body = document.querySelector("body"); // this gets the <body> </body> of the application
// body.addEventListener("click", () => {
//   body.style.backgroundColor="papayawhip";
//   // NOTE that even though this is declared first in JS, it fires last because of the "bubbling phase"
//   console.log("end") 
// })

// const cardGroup = document.querySelector(".card-group");
// cardGroup.addEventListener('click', (event) => {
//   cardGroup.style.backgroundColor="rebeccapurple";
//   // stopPropagation stops the "bubbling phase" of propagation. This means that no parent of this cardGroup (body's click event) will fire
//   // 2b. stopPropagation 
//   // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
//   event.stopPropagation()

//   console.log("middle")
// });

// const card = document.querySelector(".card");
// card.addEventListener('click', (event) => {
//   card.style.backgroundColor="hotpink";
//     // NOTE that even though this is declared last in JS, it fires first because of the "bubbling phase"
//   // this will only fire when the card is clicked
//   console.log("start")
// });







// // Step 3: Default behaviors of elements and how to stop them

// // 3a. Show link default behavior with Home (no code - show as is)
// // 3b. use preventDefault to stop default behavior
// // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// // Gets all the links at the top of the page
// const links = document.querySelectorAll('.menu-item')

// links.forEach(link => {
//   // listen for 'click' on each link element
//   link.addEventListener('click', (event) => {
//     // witout stoppropagation, the body listener will fire because its the link parent and has a click event
//     event.stopPropagation();
//     console.log('stopped!')
//       link.style.color = 'blue'
//     // event.preventDefault stops the link from redirecting to the href attribute value declared in HTML
//         event.preventDefault();

//   })
// })



