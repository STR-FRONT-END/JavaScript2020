

//Using indexOf, returns the position of the first orrcurrance
//Using lastindexOf, returns the position of the last orrcurrance
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

// first_not_repeating_character("shannonshakeyakeithkeonkitai")

//lastIndex of is exspensive, so if i had maybe a large set of data i woul want to find another solution
//the solution is O(n^2), not O (n), because indexOf has the TC of O(n)



//O(n^2)


//try to find its complement by looping through the rest of array which takes O(n) time
//check all the combinations by looping through each element x and find if there is another value that equals to target ``target−x``.






function merge_packages(items, limit) {
    let addedLimit = []//aray to hold to two limits that we need to add
    //will iterate over the array of numbers, pulling out the number at index 0 first
   for (let i = 0; i < items.length; i++) {
     //iterate over the array starting at index 0, i is 0 on the 1st iteration, i is 1 on the 2nd iteration
     console.log('I:', i)
     // will iterate over the array starting at index 1 adding the number at index 0 and number at index 1
//if those two numbers do not equal the limit then, it adds the number at index 0 and number at index 2
//if those two numbers do not equal the limit then, it adds the number at index 0 and number at index 3
//and so on
     for (let j = i + 1; j < items.length; j++) {
       //iterate over the array starting at the index after i, j is 1 on the 1st iteration
       //once j is equal to the length of the array, meaning it has checked all the numbers
       //it goes back up into the first for loop(i) and i becomes index 1, then the j loop 
       //loops through the array again checking all the numbers again
       //this process continues until we get a nuber that eqauls the limit
       console.log('J:',j)
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

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
merge_packages(nums, 15)




