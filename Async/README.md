# Concepts
* working with the DOM
* async Code
* Promises
[Axios Video](https://www.youtube.com/watch?v=XAMKKuJH7PY&feature=youtu.be)
[Axios Codepen](https://codepen.io/ShannonReed/pen/dyGjpGg)
[Axios Codepen Video](https://www.youtube.com/watch?v=w49aH-VVN14&feature=youtu.be)


# Asynchronous Code
* code that does not run instantly in line
* makes it possible for JS engine to do two thigs at the same time
* Usually a call to an external api for some data
* Async code crates a helper object, called a Promise
* Promises let the browser know that the second async task has finished

# [Promises](https://www.youtube.com/watch?time_continue=217&v=7I3TeN2Sj1k&feature=emb_logo)
* [Promise Chaining](https://javascript.info/promise-chaining)
* object with a few properties
* a Promise is instantiated with the **new** keyword
* We pass in a **callback** function that receives a **reslove** function and a **reject** function
* if the async function finishes and was **successful** we call the **reslove** function
* if the async function finishes and was **unsuccessful** we call the **reject** function
* when resloved or rejected, we use a promise object's methods **.then()** or **.catch()** to tell JS engine what to do next

        //Creating and returning a new Promise, wherever this function is used we canuse .then() and .catch()
        const asyncFunc = () => {
            return new Promise((reslove, reject) => {
                //perform som async action
            })
        }

# .then() .catch()
* methods on the promise object that receive a callback function as an argument
* when the async function is done running, the callback function is executed

        // this is called chaining methods
        asyncFunc()
        .then(() => {
            console.log('async stuff finished')
        })
        .catch(() => {
            console.log('async stuff rejected')
        })


**When we make api calls we usually invoke a function that will return a promise and handle calling reslove and reject under the hood**
* In these cases we do not have to create a new promise but we still have access to the **.then()** and **.catch()** functions

        axios.get("https://someapi/api")
            .then( res => {
                console.log("res")
            })
            .catch( err => {
                console.log("res")
            })


## [Axios](https://github.com/axios/axios)
