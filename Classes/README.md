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