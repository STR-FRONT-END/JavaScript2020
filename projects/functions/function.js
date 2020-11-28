```A function is a bit of re-usable code. Just how we like to re-use 
CSS classes, we love to re-use code. Let's start with an example:
This isn't super useful but hopefully it shows you the mechanics of 
how a function works. We created a function called addTwo. This 
function takes in one parameter, number and it returns that number 
with 2 added to it. We can now use that addTwo function as much as we 
want! Let's make a something a bit more useful.```

function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer); //7



```Now we rather than have to repeate ourselves over-and-over again with that 
long string, we can just call greet with the appropriate parameters. Here we 
use four parameters. The order is important that we send in the parameters 
because this will be the order function receives these parameters. You can have 
as many or as few parameters as you like.```

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
```"Salutations Lord Holt! I’m extremely pleased you could join us, 
Brian! I hope you enjoy your stay, Lord Holt."```

console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
```"A-hoy Captain Sparrow! I’m extremely pleased you could join us, 
Jack! I hope you enjoy your stay, Captain Sparrow."```



```The way call a function is you add parens to the end of it, like this: 
someFunctionName(). If you see parens after a variable name, you instantly 
know that that's a function. Inside of the parens go the parameters. These 
variables will be passed to the function that is being called in the order 
that you put them there. Example:```

const myHomeCity = "Salt Lake City";
const myHomeState = "Utah";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry); // "You are from Salt Lake City, Utah USA."
logOutYourHome("Birmingham", "Alabama", "USA");// "You are from Birmingham, Alabama USA."


```SCOPE: Every time you call a function, it has its own scope. 
Other things can't peek into it; it just has its own little 
workspace for it work with. Once its done, any variable that you 
haven't explicitly held on to or returned at the end is discarded```

function addFive(number) {
  const someVariable = "you can't see me outside this function";
  console.log(someVariable)// This will work
  return number + 5;
}

addFive(10);
console.log(someVariable); //This is not going to work. someVariable is inside of the addFive scope and once addFive completes, it throws someVariable away since it's now out-of-scope.



const A = "A";
let F;

function doStuff(B) {
  console.log(B);// Works
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); //Does not work
  console.log(H); //Works
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // Works
  const G = "G";
}
console.log(E); //Works
console.log(G); //Does not work

doStuff("B");
console.log(B); //Does not work
console.log(C); //Does not work
console.log(F); //Works

```Builtins
Lots of functions already exist for you! Smart people have created this commonly-used 
functions for things we often need. For example, say you have a string and you want to 
make everything lowercase, you can do this:```

const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toLowerCase()); //"this has weird casing on it"

```
You can call Math.round(5.1) and it'll return that number rounded (in this, 5).  
We'll introduce them as we go but know there are a lot of them. 
You'll learn by doing.```
console.log(Math.round(5.1));//5

```You can use string.substr(indexToStart, howManyCharactersToInclude) to return part of a string.
(remember numbering starts at 0).```
const name = "Brian Holt";
console.log(name.substr(6, 3));//"Hol"

```Objects used in conjunction with functions they're very powerful```
const person1 = {
  name: "Brian",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk your crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);// "We think you\'ll like Daft Punk your crazy millenial."
suggestMusic(person2); //"You\'re obviously going to like Johnny Cash. He walks the line."



























// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     let duplicate = []
//     for (let num of nums) {
//         if(duplicate.includes(num)){ // if number is in the duplicate array
//             return true
//             } else(!duplicate.includes(num)) //if number is not in array
//                 duplicate.push(num)//add it to the duplicate array
//         }
//         return false
//     }

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

// let myFunction = () => {
//     console.log("Function was invoked!");
//     };
//     myFunction();
   
//     // let anotherFunction = function (param) {
//    //   return param;
//    // };
//    // anotherFunction("Example");
   
//     let anotherFunction = (param) => {
//       return param;
//     };
//     console.log(anotherFunction("Example"));
   
//     // let add = function (param1, param2) {
//    //   return param1 + param2;
//    // };
//    // add(1,2);
   
//     let add = (param1, param2) => param1 + param2;
//     console.log(add(1,2));
   
//     // let subtract = function (param1, param2) {
//    //   return param1 - param2;
//    // };
//    // subtract(1,2);
   
//     let subtract = (param1, param2) => param1 - param2;
//     console.log(subtract(1,2));
   
   
//    // Stretch
   
//    // exampleArray = [1,2,3,4];
//    // const triple = exampleArray.map(function (num) {
//    //   return num * 3;
//    // });
//    // console.log(triple);
   
//     exampleArray = [1,2,3,4];
//     const triple = exampleArray.map (num => num * 3);
//     console.log(triple);