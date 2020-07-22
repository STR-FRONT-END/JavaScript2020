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