// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
    return callback(stringList[0])
  }
  
  // ⭐️ Example Challenge END ⭐️
  
  
  ///// M V P ///////
  
  /* Task 1: `counterMaker`
   * Study the code for counter1 and counter2. Answer the questions below.
   * 
   * 1. What is the difference between counter1 and counter2?
   *  counter 1 is creating the count variable in scope while counter 2 has the count variable set to global.
   * 
   * 2. Which of the two uses a closure? How can you tell?
   *  counter 1 utilizes closure. it calls a function that has a function nested inside of it.
   * 
   * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
   *   counter1: the benefits of using the first function is that you could assign it to a variable and have different variables run the same function simultaneously - let count is protected
   *   counter2: could be used in the case of many functions needing access to the count variable (global)
   *
  */
  
  // counter1 code
  function counterMaker() {
    let count = 0;
  
    return function counter() {
      return count++;
    }
  
  }
  
  const counter1 = counterMaker();
  
  console.log(counter1());
  console.log(counter1());
  
  // counter2 code
  let count = 0;
  
  function counter2() {
    return count++;
  }
  
  
  /* Task 2: inning() 
  Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
  
  function inning(/*Code Here*/) {
    return Math.floor(Math.random() * Math.floor(3));
  }
  console.log("Task 2:", inning())
  
  
  /* Task 3: finalScore()
  Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
  For example, 
  finalScore(inning, 9) might return: 
  {
    "Home": 11,
    "Away": 5,
  }
  */
  
  function finalScore(inningCB, inningsNum) {
    let homeScore = 0;
    let awayScore = 0;
    for (let i = 0; i < inningsNum; i++) {
      homeScore = homeScore + inningCB();
      awayScore = awayScore + inningCB();
    }
    return {
      Home: homeScore,
      Away: awayScore
    }
  }
  
  console.log("Task 3:", finalScore(inning, 9))
  
  /* Task 4: 
  Create a function called `scoreboard` that accepts the following parameters: 
  (1) Callback function `getInningScore`
  (2) Callback function `inning`
  (2) A number of innings
  and returns the score at each pont in the game, like so:
  1st inning: awayTeam - homeTeam
  2nd inning: awayTeam - homeTeam
  3rd inning: awayTeam - homeTeam
  4th inning: awayTeam - homeTeam
  5th inning: awayTeam - homeTeam
  6th inning: awayTeam - homeTeam
  7th inning: awayTeam - homeTeam
  8th inning: awayTeam - homeTeam
  9th inning: awayTeam - homeTeam
  Final Score: awayTeam - homeTeam */
  
  function getInningScore(inningCB) {
    return {
      Home: inningCB(),
      Away: inningCB()
    }
  }
  // console.log(getInningScore(inning))
  
  function scoreboard(inningscoreCB, inningCB, inningsNum) {
    const scoreByInning = [];
  
    let homeScore = 0;
    let awayScore = 0;
  
  
    for (let i = 0; i < inningsNum; i++) {
      const currentInning = inningscoreCB(inningCB)
      homeScore = homeScore + currentInning.Home
      awayScore = awayScore + currentInning.Away
      scoreByInning.push(`Inning ${i + 1}: Away ${currentInning.Away} - Home ${currentInning.Home}`)
    }
  
    if (homeScore === awayScore) {
      scoreByInning.push(`This game will require extra innings: Away ${awayScore} - Home ${homeScore}`);
    } else {
      scoreByInning.push(`Final Score: Away ${awayScore} - Home ${homeScore}`);
    }
  
  
    return scoreByInning;
  }
  
  
  console.log("Task 4:", scoreboard(getInningScore, inning, 9));