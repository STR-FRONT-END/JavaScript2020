
//Creating a Button
const entryPoint = document.querySelector('.buttons')

let button = document.createElement('button');

button.textContent = 'Creates One button';

button.classList.add('button');

button.addEventListener('click', (e) => {
    console.log('clicked!');
});

entryPoint.appendChild(button);




//Component Creator function

function buttonCreator(buttonText){
    const button = document.createElement('button');

    button.textContent = buttonText;

    button.classList.add('button');

    button.addEventListener('click', (e) => {
        console.log('clicked!');
    });

    return button;
}

let firstButton = buttonCreator('Create Button Function');

let secondButton = buttonCreator('Create Button Function');

entryPoint.appendChild(firstButton);
entryPoint.appendChild(secondButton);




const data = [
    "Array Button One",
    "Array Button Two",
    "Array Button Three",
    "Array Button Four"
]



//ForEach
data.forEach((arrayItem) => {
    let newButton = buttonCreator(arrayItem);
  
    entryPoint.appendChild(newButton);
  });

  //Map
  let newComponents = data.map((arrayItem) => {
    let newButton = buttonCreator(arrayItem);
  
    // Remember, we always need to return something when we use .map
    return newButton;
  });































  const panelData = [
    {
      title: "First Panel",
      content: "No, no, no. A vigilante is just a man lost in scramble for his own gratification. He can be destroyed or locked up. But if you make yourself more than just a man, if you devote yourself to an idel and if they can't stop you then you become something else entirely. Legend, Mr Wayne."
    },
    
    {
      title: "Second Panel",
      content: "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place."
    },
    {
      title: "Third Panel",
      content: "I had a vision of a world without Batman. The Mob ground out a little profit and the police tried to shut them down one block at a time. And it was so boring. I've had a change of heart. I don't want Mr Reese spoiling everything but why should I have all the fun? Let's give someone else a chance. If Coleman Reese isn't dead in 60 minutes then I blow up a hospital."
    },
    {
      title: "Fourth Panel",
      content: "I'm here to ensure the League of Shadow fulfills its duty to restore balance to civilization. You yourself fought the decadence of Gotham for years with all your strength, all your resources, all your moral authority. And the only victory you achieved was a lie. Now, you understand? Gotham is beyond saving and must be allowed to die."
    },
    {
      title: "fifth",
      content: "unpredictable"
    }
  ]
  
  // STEP 1: Remove panel from HTML
  // <!-- Remove this-->
  // <div class="panel">
  //   <div class="panel-bar">
  //     <h3>Title of Panel</h3>
  //     <div class="panel-buttons">
  //       <button class="panel-btn-open">&#9660</button>
  //       <button class="panel-btn-close hide-btn">Close</button>
  //     </div>
  //   </div>
  //   <div class="panel-content">
  //     Content of panel
  //   </div>
  // </div>
  // <!-- Remove this-->
  
  
  // STEP 2: Write createPanel function with test functionality - this will create and return panel DOM element in JS 
  // STEP 4: Update createPanel function to match HTML view
  // 4a - remove panel.textContent (that was only for testing that our panel displays on screen)
  // 4b - create all elements within panel
  // 4c - create structure of elements within tree
  // 4d - add class names to elements
  // 4e - add content to elements
  // STEP 7: Add event listener
  // STEP 8: Add toggle within event listener for buttons and text



// The purpose of this function is to create a panel component and return the DOM component (unattached to the DOM)
  const createPanel = (title, content) => {
    // create all the elements that are in the component. these are floating, unattached, elements.
    const panel = document.createElement('div')
    const panelBar = document.createElement('div')
    const panelTitle = document.createElement('h3')
    const panelButtons = document.createElement('div')
    const btnOpen = document.createElement('button')
    const btnClose = document.createElement('button')
    const panelContent = document.createElement('div')
  
    // create HTML structure by making some elements children of parent elements. parent elements can be a child of grandparent.
    panel.appendChild(panelBar)
    panel.appendChild(panelContent)
    panelBar.appendChild(panelTitle)
    panelBar.appendChild(panelButtons)
    panelButtons.appendChild(btnOpen)
    panelButtons.appendChild(btnClose)
    panelBar.style.color = "pink"
    
    // add classes to style your component. class names can also be used as descriptors for your element WITHOUT css. this is okay!
    panel.classList.add('panel')
    panelBar.classList.add('panel-bar')
    panelButtons.classList.add('panel-buttons')
    btnOpen.classList.add('panel-btn-open')
    btnClose.classList.add('panel-btn-close', 'hide-btn')
    panelContent.classList.add('panel-content')
    
    // add content inside of buttons & text elements
    const open = '\u25bc' // unicode triangle
    btnOpen.textContent = open
    
    const close = '\u25b2'
    btnClose.textContent = close
    
    panelTitle.textContent = title
    panelContent.textContent = content
    
    // this event listener is called on the panelButtons which contains both buttons. when you click, the buttons will toggle in display. aka if btnOpen is showing, then btnClose will show or visa versa. panel content by default is hidden in "panel-content" class but toggle-on, when applied, will overwrite the panel-content styles.
    panelButtons.addEventListener('click', () => {
      btnOpen.classList.toggle('hide-btn')
      btnClose.classList.toggle('hide-btn')
      panelContent.classList.toggle('toggle-on')
    })
    
    // returns the DOM element with all of its structure, classes, and its event listener
    return panel 
  }
  
  
  
  
  
  
  // STEP 3: Call createPanel & display on screen
  // const panelComponent = createPanel('test title', 'test content') // originally used as test content before using data 
  const accordion = document.querySelector('.accordion') // container or wrapper 
  
  
  // STEP 5: Update call to use data from panelData array with indexing 
  // WE DO NOT want to call data by index. this is not dynamic coding and not DRY.
  
  // accordion.appendChild(createPanel(panelData[0].title, panelData[0].content))
  // accordion.appendChild(createPanel(panelData[1].title, panelData[1].content))
  // accordion.appendChild(createPanel(panelData[2].title, panelData[2].content))
  // accordion.appendChild(createPanel(panelData[3].title, panelData[3].content))
  
  // accordion.appendChild(panelComponent) // originally used as test to add content to DOM
  
  
  
  // STEP 6: Refactor to iterate over data 
  
  // WHEN TO USE MAP -> When you want to transform your data. 
  // In this case we went from Array[{title: '', content: ''}] to Array[<div></div>]. Your code in the map should only be to transform the data inside of it to a new structure or new data type. You should not include "side effects" in your map code. It is unexpected to have alternative actions in addition to the transformation within your code. The purpose of your .map function is merely to transform the data. Nothing else.
  
  // const panels = panelData.map(data => {
  //   const panel = createPanel(data.title, data.content)
  //   // accordion.appendChild(panel) // SIDE EFFECT - NOT GOOOOOOD. This 'works', but is bad code!
  //   return panel
  // })
  
  
  // WHEN TO USE FOR EACH -> When you want to do or read something in every element of the array
  // In our case, we want to create a panel for every element and append it. This is okay in forEach :) 
  panelData.forEach(data => {
    accordion.appendChild(createPanel(data.title, data.content))
  })
  