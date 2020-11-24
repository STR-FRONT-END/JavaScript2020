# Loops
* a quick and easy way to repeatedly perform a series of instructions, and they are typically run a finite number of times. 
JavaScript has the following types of loops:
* for
* while
* do-while
* for-in
* for-of


### for loop
* for loops creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by one or more statements that will be executed in the loop.

        for (initialization; condition; finalExpression) {
            statement(s);
        }


* head of a for loop typically looks like `for (var i = 0; i < maxValue; i++)`, where maxValue is the maximum value you wish to iterate until.
* initialization, condition, finalExpression are optional, but are generally always used.
* **initialization:** An expression or variable declaration that is typically used to initialize a counter variable.
* **condition:** This is the termination condition, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to true, then  is executed. If the expression evaluates to false, execution jumps to the first line of code after the end of the loop. If this statement is omitted, then  always evaluates to true.
* **finalExpression:** An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of .
* **statement:** The statement (or statements) that is executed each time  evaluates to true.


## while loop
* The while statement creates a loop that executes its internal statement(s) as long as the specified condition evaluates to true. The condition is evaluated before executing the statement.

        while (condition) {
            statement(s);
        }

* **condition:** This is the termination condition, which is an expression that's evaluated before each pass through the loop. If this expression evaluates to true, then statement is executed; if it evaluates to false, execution jumps to the first line of code after the end of the loop.
* **statement:** The statement (or statements) that is executed each time condition evaluates to true.

## do-while
* The do-while statement creates a loop that executes its internal statement(s) until the specified  evaluates to false. 
* The condition is evaluated after executing the internal statement(s), so the contents of the loop always execute at least once.

        do {
            statement(s);
        } while (condition);

* **condition:** This is the termination condition, and it's evaluated after each pass through the loop (meaning the loop will always run at least once). Once the statement(s) inside the loop is executed,  condition is evaluated. If this expression evaluates to true, then statement is executed again; if it evaluates to false, execution jumps to the first line of code after the end of the loop.
* **statement:** The statement (or statements) that is executed each time condition evaluates to true.

## for-in
* This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, allowing statements to be executed for each distinct property.

                for (var variable in object) {
            // insert code that uses variable here
        }

* **variable:** A variable that refers to a different property name during each iteration of the loop. You can declare this with var or let.
* **object:** The object whose enumerable properties are being iterated through.

            var actress = {
            firstName: "Julia",
            lastName: "Roberts",
            dateOfBirth: "October 28, 1967",
            nationality: "American",
            firstMovie: "Satisfaction"
        };

        for (var property in actress) {
            console.log("actress." + property + " = " + actress[property]);
        }


## for-of
* This loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc. It essentially iterates over the value of each distinct property in the structure, such as each letter in a word or each element in an array.

        for (let variable of iterable) {
            statement(s);
        }

* **variable:** A variable that refers to a different property name during each iteration of the loop. You can declare this with var or let.
* **object:** The object whose enumerable properties are being iterated through.