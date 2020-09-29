### this in JavaScript
* points to a particular object. Now, which is that object is depends on how a function which includes 'this' keyword is being called.

## Global Scope
* If a function which includes 'this' keyword, is called from the global scope then this will point to the window object.

        var myVar = 100;

        function WhoIsThis() {
            var myVar = 200;

            alert("myVar = " + myVar); // 200
            alert("this.myVar = " + this.myVar); // 100
        }

        WhoIsThis();     

* In the above example, a function WhoIsThis() is being called from the global scope. The global scope means in the context of window object. We can optionally call it like window.WhoIsThis(). So in the above example, this keyword in WhoIsThis() function will refer to window object. So, this.myVar will return 100. However, if you access myVar without this then it will refer to local myVar variable defined in WhoIsThis() function. (In the strict mode, value of 'this' will be undefined in the global scope.)



_____
## Classes and function prototypes in JavaScript

A good random fact to know for your coding interviews is that Javascript is built on "prototype-based inheritance", a simpler version of the traditional class-based inheritance found in other languages like Java and C++. Though we're now used to seeing `class` terminology used in newer ES6 syntax, Javascript does handle things a bit differently under the hood, and it's worth understanding the differences. 

ES6 has changed things for the better, allowing inheritance without having to write a lot of messy, potentially confusing code. You'll almost always end up just writing ES6 classes because they're nicer and easier to understand, but just remember that your ES6 code compiles down to vanilla Javascript and it's the same prototype-based inheritance model at play. Let's take a look at how object-oriented programming works in JavaScript with and without ES6 classes, and try to demystify thigs a bit.

These are effectively the same:

```javascript
// plain old Javascript -- defining a constructor function
function Person(name, favoriteGenre) {
  this.name = name;
  this.genre = favoriteGenre;
}

// Define class methods on the prototype:
Person.prototype.listen = function() {
  console.log(this.genre);
}

josh = new Person("josh", "jazz");
josh.listen();
```

```javascript
// ES6
class Person {
  constructor(name, favoriteGenre) {
    this.name = name;
    this.genre = favoriteGenre;
  }
  
  // ES6 abstracts away the prototype complexity so we can just define a class method right here:
  listen = () => {
    console.log(this.genre);
  }
}
josh = new Person("josh", "jazz");
josh.listen();
```

ES6 provides a syntax for object-oriented programming that is more familiar to software developers from more traditional object-oriented languages (e.g., C++, Python, Ruby), but this syntax doesn't actually change the protoype-based inheritance model of JavaScript. 

In other languages, a class constructor creates an instance of the class, but a constructor in JavaScript is simply a function that returns an object. You've seen constructors like `String`, `Array` and `Object` that are built into JavaScript and we've also defined our own. The subtle differences between true class-based OOP and what we do in JavaScript won't make much difference for our purposes in React, but just know that Babel compiles your ES6 `class` down to a constructor function and definitions on its prototype.

In React, when we define a class component that `extends React.Component` we're basically just taking that pre-defined base component class and extending it with our own custom behavior.