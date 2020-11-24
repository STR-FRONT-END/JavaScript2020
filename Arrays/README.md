 ## ARRAYS
 
 * Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

 * Create an Array `var a = ['first', 'second'];`
 * Access (Index Into) an Array Item
    * `let first = a[0]; // first = 'first'`
    * `let last = a[a.length - 1]; // last = 'second'`
*  Loop Over an Array

            a.forEach(function(e, i, array) {
                // 'i' is the index
                // 'e' is the element
                console.log(i + ' ' + e);
            });
* Copy an array `let b = a.slice();`
* Sort an Array `a.sort();`

            
        // Sort in descending lexicographical order using a compare function
        a.sort(function(x, y) { return x < y; } );
        a.sort((x, y) => x < y);
        b.sort(function(x, y) { return x < y; } );

* Append to the End of an Array `a.push('third');`
* Remove From the end of an Array `let removed = a.pop();`
* Remove From the Front of an Array `let removed = a.shift();`
* Add to the Front of an Array `a.unshift('fourth');`
* Find the Index of an Item in the Array `let position = a.indexOf('second');`
* Remove an Item by Index Position

        let position = 1;
        let elementsToRemove = 2;
        // Remove 'elementsToRemove' element(s) starting at 'position'
        a.splice(position, elementsToRemove);

* Iterate Over an Array
            
        for (let e of a) {
            console.log('e:', e);
        }


[Remove Duplicates](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)