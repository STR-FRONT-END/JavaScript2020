# JavaScript
* loosely-typed client side scripting language
* executes in the user's browser, each browser includes different JavaScript engines
* interact with html elements (DOM elements) in order to make interactive web user interface.
* JavaScript implements [ECMAScript](https://www.tutorialsteacher.com/articles/what-is-ecmascript) standards, which includes core features based on [ECMA-262](https://www.ecma-international.org/ecma-262/5.1/) specification as well as other features which are not based on ECMAScript standards.
* JavaScript is different when compared to server side languages like Java and C#.
* JavaScript is easy to learn.
* eliminates server side processing because it executes on client's browser
* executes on any OS.
* can be used with any type of web page e.g. PHP, ASP.NET, Perl etc.
* Performance of web page increases due to client side execution.
* JavaScript code can be minified to decrease loading time from server.
* Many JavaScript based application frameworks are available in the market to create Single page web applications e.g. ExtJS, AngularJS, KnockoutJS etc.

## In order to work with JavaScript, you need to install a Browser and a editor
* You can install any browser as per your preference e.g. Internet Explorer,Chrome, FireFox, Safari, Opera etc. JavaScript works on any web browser on any OS.
* You can write JavaScript code using a simple editor like Notepad. However, you can also install any open source or licensed IDE in order to get IntelliSense support for JavaScript and syntax error/warning highlighter e.g. Visual Studio, Aptana, Eclipse etc. Prefer an editor which has built-in features of IntelliSense support and syntax error highlighter for speedy development.
* You can also use online editor to learn JavaScript e.g. plnkr.co, jsfiddle.net or jsbin.com.

## JavaScript Overview
* uses unicode characterset.
* case sensitive.
* strings must be enclosed in double quotation mark (") or single quotation mark (').
* numbers can store integer, float, hexadecimal value without enclosing it in quotation marks.
* a boolean value stores true or false.
* every statement in JavaScript can be separated using semicolon (;). 
* It is not mandatory but recommended to use semicolon at the end of each statement.
* ignores multiple white spaces.
* a multi line comment can be wrapped between /* and */. Single line comment can start with //.
* keywords are reserved words. Do not use them as variable or function names.

# Switch Statement
* A switch statement allows a program to evaluate an expression by attempting to match the expression's value to a case label. 
* If a match is found, the program jumps to the statement(s) associated with the matched label and continues executing at that point. 
* execution will continue sequentially through all the statements starting at the jump point unless there is a call to break;, which exits the switch statement. 

                switch (expression) {
            case label1:
                statement1;
                break;
            case label2:
                statement2;
                break;
            case label3:
                statement3;
                statement4;
                break;
            default:
                statement;
        }

* The program first looks for a case clause with a label matching the value of , 
* then transfers control to the matching clause and executes the associated statements. 
* If no matching label is found, the program looks for the optional default clause and, 
* if found, transfers control to that clause and executes the statements associated with it. 
* If no default clause is found, the program continues executing after the end of the switch statement.

###default Clause
*  the default clause is always listed last. This is because the statements are checked sequentially
* If the default case doesn't have a break statement, any statements in the case label immediately following it will be executed.

###The break; Statement
* The break statement is optional, but you'll typically see one at the end of each case clause to ensure that the program breaks out of the switch statement once the statements associated with a matched case are executed. 
* Once the flow of execution hits break;, it exits the switch statement and continues executing at the next line following the end of the switch statement; 
* if the break statement is omitted, the program continues executing the next statement in the switch statement — even if its case label doesn't match .



`.charAt(0)`

function getLetter(s) {
    let letter;
    letter = s.charAt(0)
    // Write your code here
//     switch(){
//       case A:
//         letter
//     }
    return letter;
}

getLetter("hello")