'use strict';
//FOR-OF
let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}


// function main(input) {
//     var i = 1;

//     for (; i <= input; i++) {
//         //do something
//     }
// }

// function main(input) {

//     for (var i = 1;; i++) {
//         if (i > input) {
//             break;
//         }

//         //do something
//     }
// }

// function main(input) {
//     var i = 1;

//     for (;;) {
//         if (i > input) {
//             break;
//         }

//         //do something
//         i++;
//     }
// }

function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}

main("hello bye yes now why")

























'use strict';
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
      let vowel;
    for (let letter of s) {
//       console.log(letter)
      switch(letter){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          console.log(letter)
        break;
        default:
          vowel = "none"
      }
      
    }
  
  for (let letter of s) {
//       console.log(letter)
      switch(letter){
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
          console.log(letter)
        break;
        default:
          vowel = "none"
      }
      
    }
  
  
}


vowelsAndConsonants("bow down bitches")