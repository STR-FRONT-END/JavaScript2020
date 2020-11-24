// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const cityName = 'San Diego';
function whereDoYouLive() {
  const stateName = 'California';
  console.log(`I live in ${cityName}, ${stateName}.`);
};
whereDoYouLive();



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






/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0; // place holder with numerical value
  return function() {//will create a closure between the context of the variable count the new updated value,
      count = count + 1;// mutates the count
      return count;// returns the count
      //return ++count; can wipe out line 11 and 12 and will do the same thing
  }
};// increment wrapped in closure and is what keeps the memory of 1 being incremented

const newCounter = counter();// new counter set to the function invocation, equal to the counter function value, so newCounter is counter(), keeping track of this counter
console.log(newCounter());// invokes newCounter which also invokes counter()
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
