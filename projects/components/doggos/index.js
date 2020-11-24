
// component
function DogCard(imgUrl) {
    const newCard = document.createElement('div');
    const newImg = document.createElement('img');
    const breedTitle = document.createElement('h3');
    
    // set up the textContent for breedTitle
    breedTitle.textContent = 'Breed: Mastiff';
    // set the src for newImg
    newImg.src = imgUrl;
    // add appropriate classes
    newCard.classList.add('dog-card');
    newImg.classList.add('dog-image');
    // append properly to make a aesthetically pleasing card
    newCard.appendChild(breedTitle);
    newCard.appendChild(newImg);
  
    // add an eventListener to the newCard that will toggle the 'selected' class
    newCard.addEventListener('click', () => {
      newCard.classList.toggle('selected');
    });
   
    return newCard;
  }
  
  const entrypoint = document.querySelector('.entry');
  
  // how to write a GET request
  const breed = 'mastiff';
  let resArray = [];
  axios
    .get(`https://dog.ceo/api/breed/${breed}/images/random/12`)
    .then((res) => {
      // if the call is successful, it runs this callback
      console.log('Here is the res: ', res);
      resArray = res.data;
      
      res.data.message.forEach((url) => {
      entrypoint.append(DogCard(url));
      });
    })
    .catch((err) => {
      // if the call is unsuccessful, it runs this callback
      console.log('Here is the err: ', err);
    });
  
  // LEARN HOW TO READ TECHNICAL DOCUMENTATION CHALLENGE
  // request a list of all the dog breeds
  // request one random picture from the all dogs list
  // request all images of samoyed breed
  // request 12 random pictures of mastiff breed
  // list all sub-breeds
  // list 12 images of the sub-breed basset hound
  