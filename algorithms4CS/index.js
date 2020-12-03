//CODESINGAL Algorithms
```
Find the first repeating character in a string,
If there is no such character, return "_”,
if there are 2 non-repeating characters in the string,
return the character that appears first in the string.
Steps:
1.  iterate through the data, the number of iterations that need to be made is the length of the string
2. hold on to the iterated character’s index within the string
3. identify the first non-repeating character, can use indexOf for this, which returns the position of 
   the first occurrence of a specified value in a string
```
//Soultion 1
function first_not_repeating_character(s) {
      // iterate over the s, s.length times
      for (let i = 0; i < s.length; i++){
        let letter = s[i];//sets lettter to the current character
      //using indexOf to get the index of the current letter
    if (s.indexOf(letter) == i && s.indexOf(letter, i + 1) == -1) {
        return letter;
      }
    }
    return "_";
  }

  
const word = 'mnmnopoplilikjhjhgfgfz'
first_not_repeating_character(word)



//Soultion 2(used)
function first_not_repeating_character(s) {
    // iterate over the s, s.length times
    for (let i = 0; i < s.length; i++){
      let letter = s[i];//sets lettter to the current character
    // //using indexOf and lastIndexOf to see if the first index and lastindex are the same
  if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return letter;
    }
  }
  return "_";
}


const word2 = 'abcaefgabcdgthefdth'
first_not_repeating_character(word2)



```
Given a package with a weight limit limit and an array of integers items of where each integer represents the weight of an item, 
implement a function merge_packages that finds the first two items in the items array whose sum of weights equals the given weight limit limit.

Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, 
return an empty array.
Examples:

Input: items = [4, 6, 10, 15, 16], limit = 21
Output: [3, 1]
Explanation: The weight of the items at indices 3 and 1 sum up to the specified limit.
Input: items = [1, 3, 15, 5, 7, 16, 9, 5, 22], limit = 10
Output: [4, 1]
Explanation: There are two possible answers for this one. The expected answer is `[4, 1]` instead of `[6, 0]` since 7 and 3 add up to 10 before we reach 9 in the array.
[execution time limit] 4 seconds (js)
``


//Solution

function merge_packages(items, limit) {
    let addedLimit = []
   for (let i = 0; i < items.length; i++) {
  //    console.log('I:', i)
     for (let j = i + 1; j < items.length; j++) {
      //  console.log('J:',j)
      if(items[i] + items[j] === limit) {
          const firstNum = i
          const secondNum = j
          addedLimit.push(secondNum)
          addedLimit.push(firstNum)
              if(addedLimit.length == 2){
                  return addedLimit

              }
      }
    }

  }
      return addedLimit
  
}
```



//https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
function merge_packages(items, limit) {
    // iterate over the s, s.length times
    let addedLimit = new Array()
       for (let i = 0; i < items.length; i++) {
         // console.log('I:', i)
         for (let j = i + 1; j < items.length; j++) {
           // console.log('J:',j)
         if(items[i] + items[j] === limit) {
           const firstNum = i
           const secondNum = j
           addedLimit.push(firstNum)
           addedLimit.push(secondNum)
           if(addedLimit.length === 2){
                 return addedLimit
  
           }
         }
       }
        
  
     }
    return addedLimit
  }
  
  
  
  
  const limit = 10
  const arr = [1, 3, 15, 5, 7, 16, 9, 5, 22]
  merge_packages(arr, limit)
//___________________________________________________________________



//indexOf, returns the position of the first orrcurrance
//lastindexOf, returns the position of the last orrcurrance
//if the first orrcurance and the last orrcurance are the same then the character only appears once
//charAt returns a new string, of the character at a particular index
function first_not_repeating_character(s) {
  for (let i = 0; i < s.length; i++){// iterates over each charatcer
      let letter = s[i]// saves the character
//Using i which is the index of letter, charAt would give me the letter
      //Could have used letter instead of `s.charAt(i)`
      //if the first orcurrance is equal to the lats orrcurrance then return the letter
      if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
          return letter;
      }
  }
  return '_'; //otherwise return _
}
first_not_repeating_character("shannonshakeyaKeithKeonKitai")