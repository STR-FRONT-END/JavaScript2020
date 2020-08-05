const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  
  
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  
  //Updating Nav items
  let navItems = document.getElementsByTagName('a');
  navItems[0].textContent = siteContent["nav"]["nav-item-1"];
  navItems[1].textContent = siteContent["nav"]["nav-item-2"];
  navItems[2].textContent = siteContent["nav"]["nav-item-3"];
  navItems[3].textContent = siteContent["nav"]["nav-item-4"];
  navItems[4].textContent = siteContent["nav"]["nav-item-5"];
  navItems[5].textContent = siteContent["nav"]["nav-item-6"];
  
  //Stretch
  
  let greenNav = document.querySelectorAll('a');
  greenNav[0].style.color = "green";
  greenNav[1].style.color = "green";
  greenNav[2].style.color = "green";
  greenNav[3].style.color = "green";
  greenNav[4].style.color = "green";
  greenNav[5].style.color = "green";
  
  let newNav = document.querySelector("nav");
  let newNavItem = document.createTextNode('Im New');
  let newNavItem2 = document.createTextNode('Im New Too');
  newNav.appendChild(newNavItem2);
  newNav.prepend(newNavItem);
  newNav.style.color = 'green';
  
  
  
  
  //Updating cta-text...no way I could do this using the cta object
  let h1Tag = document.querySelector('h1');
  let lineBreak = document.createElement('br');
  let lineBreak2 = document.createElement('br');
  let isText = document.createTextNode('Is');
  let awesomeText = document.createTextNode('Awesome');
  h1Tag.textContent = 'DOM';
  h1Tag.appendChild(lineBreak);
  h1Tag.appendChild(isText);
  h1Tag.appendChild(lineBreak2);
  h1Tag.appendChild(awesomeText);
  
  
  //button
  let button = document.querySelector('button');
  button.textContent = siteContent["cta"]["button"];
  
  //header image
  let headerImage = document.getElementById("cta-img");
  headerImage.setAttribute('src', siteContent["cta"]["img-src"])
  
  
  //Top-Content
  let h4Tag = document.getElementsByTagName('h4');
  h4Tag[0].textContent = siteContent["main-content"]["features-h4"]
  h4Tag[1].textContent = siteContent["main-content"]["about-h4"]
  h4Tag[2].textContent = siteContent["main-content"]["services-h4"]
  h4Tag[3].textContent = siteContent["main-content"]["product-h4"]
  h4Tag[4].textContent = siteContent["main-content"]["vision-h4"]
  h4Tag[5].textContent = siteContent["contact"]["contact-h4"]
  //Top P
  let pTags = document.getElementsByTagName('p');
  pTags[0].textContent = siteContent["main-content"]["features-content"];
  pTags[1].textContent = siteContent["main-content"]["about-content"];
  
  //Image
  let middleImage = document.getElementById("middle-img");
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  pTags[2].textContent = siteContent["main-content"]["services-content"];
  pTags[3].textContent = siteContent["main-content"]["product-content"];
  pTags[4].textContent = siteContent["main-content"]["vision-content"];
  
  //Contact Section
  let lineBreak3 = document.createElement('br');
  let addressText = document.createTextNode('Somewhere, USA');
  pTags[5].textContent = '123 Way 456 Street';
  pTags[5].appendChild(lineBreak3);
  pTags[5].appendChild(addressText);
  pTags[6].textContent = siteContent["contact"]["phone"];
  pTags[7].textContent = siteContent["contact"]["email"];
  
  //Footer
  pTags[8].textContent = siteContent["footer"]["copyright"];
  
  //
  
  
  
  
  
  
  //Strecth
  //document.body.style.backgroundColor = 'yellow'
  
  
  