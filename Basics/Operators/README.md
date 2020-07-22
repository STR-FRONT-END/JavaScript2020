# Operators


## Arithmetic Operators
* Arithmetic operators are used to perform mathematical operations between numeric operands.
* `+, -, *, /, %, ++, --`
* + operator performs concatenation operation when one of the operands is of string type.

        var a = 5, b = "Hello ", c = "World!", d = 10;

        a + b; // "5Hello "

        b + c; // "Hello World!"

        a + d; // 15


## Comparison Operators
* operators that compare two operands and return Boolean value true or false
* `==, ===, !=, <, >, <=, >=`

## Logical Operators
*  combine two or more conditions
* `&&, ||, !`

## Assignment Operators
* assignment operators to assign values to variables with less key strokes.
* `=, +=, -=, *=, /=, %=
## Conditional Operators
#### Ternary operator
* special operator called ternary operator :? that assigns a value to a variable based on some condition. This is like short form of if-else condition.
* `<condition> ? <value1> : <value2>;`
* Ternary operator starts with conditional expression followed by ? operator. Second part ( after ? and before : operator) will be executed if condition turns out to be true. If condition becomes false then third part (after :) will be executed.

        var a = 10, b = 5;

        var c = a > b? a : b; // value of c would be 10
        var d = a > b? b : a; // value of d would be 5