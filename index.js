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
 * 
 * counter1's variable is inside the function scope wile counter2's variable is in the global scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 has a closure because you have to return outside of the count to outside of the "counter function" so 
 * that the "countermaker" can access it.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * You could use counter2 to reuse in your browser but if count has only one use you would use counter1
 * because its within the function and once youre done with the function you wouldnt need the variable anymore.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return(Math.round(Math.random()*2))

}
console.log("scored "+inning()+" points");

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback,numberOfInnings){
   let home=0;
   let away=0;
  for(i = 0; i < numberOfInnings; i++){
   home += inning();
   away += inning();
  };
  return {
    "Home":home,
    "Away":away
  };
}
console.log(finalScore(inning,9));
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */
function totalScore(scores){
return scores.reduce((totalScore,score)=>totalScore+score,0)
}
function scoreboard(inning,numberOfInnings) {
const homeTeam=[];
const awayTeam=[];

for(let i=1; i<=numberOfInnings; ++i){
  homeTeam.push(inning())
  awayTeam.push(inning())
}
return `Final Score: ${totalScore(homeTeam)} - ${totalScore(awayTeam)}`;
}

console.log(scoreboard(inning,9));


