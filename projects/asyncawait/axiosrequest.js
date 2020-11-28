const dogCard = (imgUrl) => {// imgUrl is data from the dog API. 
    // create elements (these are not in parent <-> child relationships)
    const newCard = document.createElement('div')
    const newImage = document.createElement('img')
    const breed = document.createElement('h3')
    
    // add content to elements
    breed.textContent = "Breed: Mastiff"
    newImage.src = imgUrl // url string like "google.com"
    
    // add classes
    newImage.classList.add('dog-image')
    newCard.classList.add('dog-card')
    
    // make "newCard" the parent of newImage & breed elements
    newCard.appendChild(newImage)
    newCard.appendChild(breed)
    
    // add event listener for 'selected' effect. on first click, card will scale to be larger. on second click, card returns to normal size.
    newCard.addEventListener('click', () => {
      newCard.classList.toggle('selected') // class="a b c d" --> classList = ['a', 'b', 'c', 'd']
    })
    
    // return parent component that contains all of the dog card, newCard
    return newCard
  }



  const entryPoint = document.querySelector('.entry')
// Get data from API with axios GET request to: 
// "https://dog.ceo/api/breed/mastiff/images/random/12"
// axios.get sends a GET HTTP request to the URL provided as a parameter. 
 // it creates a Promise internally that manages the state of the request 
 //- pending, fulfilled, rejected
axios.get("https://dog.ceo/api/breed/mastiff/images/random/12")
//  when a GET request is fulfilled, a .then on the promise chain allows 
//  us to access the data returned from the API
    .then(res => {
        console.log('response:', res.data.message)
//array of urls is in "response.data.message". iterate over each url 
//and create a dogcard with each url
         res.data.message.forEach( url => {
         const newDogCard = dogCard(url) // create dog card component, and save to const "newDogCard"
         entryPoint.appendChild(newDogCard) // using the HTML parent element, attach newDogCard to the DOM
    })
    })
    // a final .then will be called regardless of state (fulfilled or rejected). it will be called after 
    //either the .then or the .catch.
    .catch(err => {
        console.log('something happened! ', err)
    })
      // a final .then will be called regardless of state (fulfilled or rejected). it will be called after 
      //either the .then or the .catch.
  .then(() => {
    console.log('yahoo!')
  })

