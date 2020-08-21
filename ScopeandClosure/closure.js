// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// nested function can access internal because it is available on the parent scope - the inheritance chain goes down but now back up meaning that children can inherit from their parent function

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let count = 0;
  for(let i=1; i<=number; i++) {
    count += i;
  }
  return count;
}
console.log(summation(4));