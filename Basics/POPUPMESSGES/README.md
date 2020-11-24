# Display Popup Message Box

* JavaScript provides different built-in functions to display popup messages for different purposes e.g. to display a simple message or display a message and take user's confirmation on it or display a popup to take a user's input value.


### Alert Box
* Use alert() function to display a popup message to the user

        alert("This is alert box!");  // display string message

        alert(100); // display number 

        alert(true); // display boolean

### Confirm Box
* Sometimes you need to take the user's confirmation to proceed. For example, you want to take user's confirmation before saving updated data or deleting existing data. In this scenario, use JavaScript built-in function confirm(). The confirm() function displays a popup message to the user with two buttons, OK and Cancel. You can check which button the user has clicked and proceed accordingly.

**The following example demonstrates how to display a confirm box and then checks which button the user has clicked.**

        var userPreference;

        if (confirm("Do you want to save changes?") == true) {
            userPreference = "Data saved successfully!";
        } else {
            userPreference = "Save Cancelled!";
        }

### Prompt Box
* Sometimes you may need to take the user's input to do further actions in a web page. For example, you want to calculate EMI based on users' preferred tenure of loan. For this kind of scenario, use JavaScript built-in function prompt().
* The prompt function returns a user entered value. If user has not entered anything then it returns null. So it is recommended to check null before proceeding.

**Prompt function takes two string parameters. First parameter is the message to be displayed and second parameter is the default value which will be in input text when the message is displayed.**
`prompt([string message], [string defaultValue]);`

    var tenure = prompt("Please enter preferred tenure in years", "15");
    
    if (tenure != null) {
        alert("You have entered " + tenure + " years" );
    }


**The alert, confirm and prompt functions are global functions. So it can be called using window object like window.alert(), window.confirm() and window.prompt().**


* Popup message can be shown using global functions - alert(), confirm() and prompt().
* `alert()` function displays popup message with 'Ok' button.
* `confirm()` function display popup message with 'Ok' and 'Cancel' buttons. Use confirm() function to take user's confirmation to proceed.
* `prompt()` function enables you to take user's input with 'Ok' and 'Cancel' buttons. prompt() function returns value entered by the user. It returns null if the user does not provide any input value.