# Variables
* Variable means anything that can vary. JavaScript includes variables which hold the data value and it can be changed anytime.
* C# or Java has strongly typed variables. It means variable must be declared with a particular data type, which tells what type of data the variable will hold.
* JavaScript variables are loosely-typed which means it does not require a data type to be declared. You can assign any type of literal values to a variable e.g. string, integer, float, boolean etc..

### Variable Declaration & Initialization
* **Declaration:** The variable is registered using a given name within the corresponding scope
* **Initialization:** When you declare a variable it is automatically initialized, which means memory is allocated for the variable by the JavaScript engine.
* **Assignment:** This is when a specific value is assigned to the variable.
* while var has been available in JavaScript since its initial releast, letand const are only available in ES6 (ES2015) and up.
* if you forget to write var, let or const before an assignment, the variable will automatically be global.
*  To avoid accidentally declaring global variables you can use strict mode.
* Multiple variables can also be declared in a single line separated by comma
* `var one = 1, two = 'two', three;`
#### var
* Variables declared with var are available in the scope of the enclosing function. If there is no enclosing function, they are available globally.

        var x; // Declaration and initialization
        x = "Hello World"; // Assignment

        // Or all in one
        var y = "Hello World";

#### let
* the descendant of var in modern JavaScript. Its scope is not only limited to the enclosing function, but also to its enclosing block statement. A block statement is everything inside { and }, (e.g. an if condition or loop). The benefit of let is it reduces the possibility of errors, as variables are only available within a smaller scope.

        var name = "Peter";
        if(name === "Peter"){
        let hello = "Hello Peter";
        console.log(hello);
        } else {
        let hello = "Hi";
        console.log(hello);
        }

#### const
* Technically a constant isn’t a variable. The particularity of a constant is that you need to assign a value when declaring it and there is no way to reassign it. A const is limited to the scope of the enclosing block, like let.
* Constants should be used whenever a value must not change during the applications running time


## Hoisting and the Temporal Dead Zone
*  A variable declaration will always internally be hoisted (moved) to the top of the current scope.

        
        console.log(hello);
        var hello;
        hello = "I'm a variable";

    
**HOISTED**

        var hello;
        console.log(hello);
        hello = "I'm a variable";

* accessing a var variable before its declaration will return undefined as this is the value JavaScript assigns when initializing it.
* But accessing a let/const variable before its declaration will throw an error. This is due to the fact that they aren’t accessible before their declaration in the code.
* The period between entering the variable’s scope and reaching their declaration is called the Temporal Dead Zone – i.e. the period in which the variable isn’t accessible.
* To reduce susceptibility to errors you should use const and let whenever possible. If you really need to use var then be sure to move declarations to the top of the scope, as this avoids unwanted behavior related to hoisting.



#Variables
* stores a single data value that can be changed later.
* can be defined using var keyword. Variables defined without var keyword become global variables.
* must be initialized before using.
* multiple variables can be defined in a single line. e.g. var one = 1, two = 2, three = "three";
* in JavaScript are loosely-typed variables. It can store value of any data type through out it's life time.