#Data Types
* Data type indicates characteristics of data. It tells the compiler whether the data value is numeric, alphabetic, date etc., so that it can perform the appropriate operation.
* JavaScript includes primitive and non-primitive data types

#### Primitive Data Types
* String
* Number
* Boolean
* Null
* Undefined

### Strings
* immutable in JavaScript, it can be concatenated using plus (+) operator in JavaScript.
* `var str = 'Hello ' + "World " + 'from ' + 'TutorialsTeacher ';`
* If you want to include same quotes in a string value as surrounding quotes then use backward slash (\) before quotation mark inside string value.
* `var str1 = "This is \"simple\" string";`
* JavaScript allows you to create a String object using the new keyword `var str2 = new String('Hello World');` (JavaScript returns String object instead of primitive string type. It is recommended to use primitive string instead of String object.)

        var str1 = new String('Hello World');
        var str2 = new String('Hello World');
        var str3 = 'Hello World';
        var str4 = str1;

        str1 == str2; // false - because str1 and str2 are two different objects
        str1 == str3; // true
        str1 === str4; // true

        typeof(str1); // object
        typeof(str3); //string

* can be treated like zero index based character array

        var str = 'Hello World';

        str[0] // H
        str[1] // e
        str[2] // l
        str[3] // l
        str[4] // o

        str.length //  11

* string is character index, it can be accessed using for loop and for-of loop.
        var str = 'Hello World';

        for(var i =0; i< str.length; i++)
        console.log(str[i]);

        for(var ch of str)
            console.log(ch);


* JavaScript string (primitive or String object) includes default properties and methods which you can use for different purposes like `.length`

### Numbers




#### Non-primitive Data Type
* Object
* Date
* Array