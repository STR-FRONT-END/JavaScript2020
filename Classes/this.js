/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Golbal binding - 'this' points to and is bound to the window/console object, because the context is not set, so the value is the window/console object
* 2. Implicit Binding - when a function is called with a dot in front 'this' is bound to the object on the left side of the dot when invoked,
* 3. New Binding - using the new keyword to call a function that has created an object
* 4. Explicit Binding - using JS apply call or bind method to explicitly call the function to change constructor objects gets set to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myName (name) {
    console.log(this);
    return name
}
 myName("Shannon");

// Principle 2

// code example for Implicit Binding
const child = {
    age: 3,
    favcolor: 'blue',
    favshow: 'Paw Patrol',
    birthday: 'August 24',
    likes: function(name) {
        console.log(`${name} is ${this.age} years old, his favorite color is ${this.favcolor}.`)
    }
};
child.likes('Kitai');

// Principle 3

// code example for New Binding
function CashierIntro(name) {
    this.greeting = 'how may I help you?';
    this.name = name;
    this.sayHello = function() {
      console.log("My name is " + this.name + ", " + this.greeting);
      
    };
  }
  
  const rosie = new CashierIntro('Rosie');
  
  rosie.sayHello();
 

// Principle 4

// code example for Explicit Binding
function CashierIntro(name) {
    this.greeting = 'how may I help you?';
    this.name = name;
    this.sayHello = function() {
      console.log("My name is " + this.name + ", " + this.greeting);
      
    };
  }
  
  const tina = new CashierIntro('Tina');
  const kimberly = new CashierIntro('Kimberly and I am you cashier');
  
  tina.sayHello.call(kimberly);