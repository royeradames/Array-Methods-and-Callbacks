import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// // (a) Home Team name for 2014 world cup final
// const homeName2014FinalTeamName = fifaData.filter(function(item){
//     let checkFor2014AndFinalState = ((item.Year === 2014) && ( item.Stage === "Final"));
//     return checkFor2014AndFinalState;
//   })[0]["Home Team Name"];
// console.log(homeName2014FinalTeamName)

// // (b) Away Team name for 2014 world cup final
// const awayName2014FinalTeamName = fifaData.filter(function(item){
//     let checkFor2014Final = ((item.Year === 2014) && ( item.Stage === "Final"));
//     return checkFor2014Final;
//   })[0]["Away Team Name"];
// console.log(awayName2014FinalTeamName)

// // (c) Home Team goals for 2014 world cup final
// const homeGoals2014FinalTeamName = fifaData.filter(function(item){
//     let checkFor2014AndFinalState = ((item.Year === 2014) && ( item.Stage === "Final"));
//     return checkFor2014AndFinalState;
//   })[0]["Home Team Goals"];
// console.log(homeGoals2014FinalTeamName)

// // (d) Away Team goals for 2014 world cup final
// const awayGoals2014FinalTeamName = fifaData.filter(function(item){
//     let checkFor2014AndFinalState = ((item.Year === 2014) && ( item.Stage === "Final"));
//     return checkFor2014AndFinalState;
//   })[0]["Away Team Goals"];
// console.log(awayGoals2014FinalTeamName)

// // (e) Winner of 2014 world cup final 
// const Final2014 = fifaData.filter(function(item){
//     let checkFor2014AndFinalState = ((item.Year === 2014) && ( item.Stage === "Final"));
//     return checkFor2014AndFinalState;
//   });
// function whatTeamWon(game){
//     const homeWon = game[0]["Home Team Goals"] > game[0]["Away Team Goals"];
//     const awayWon = game[0]["Home Team Goals"] < game[0]["Away Team Goals"];
//     const homeTeamName = game[0]['Home Team Name'];
//     const awayTeamName = game[0]['Away Team Name'];
    
//     if(homeWon){
//         return `${homeTeamName} team won`;
//     } else if(awayWon){
//         return `${awayTeamName}Away team won`;
//     }else{
//        return "It's a tie game.";
//     }
// }

// console.log(whatTeamWon(Final2014));

// console.log(`The winner of 2014 world cup final is ${FinalWinner2014}`)


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    /* code here */
    return data.filter(function(item){
        return item['Stage'] === "Final";
    })
};
const fifaFinals = getFinals(fifaData);
console.log(fifaFinals);
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {

    /* code here */
    const years = []; 
    data.forEach(element => {
        
         years.push(element["Year"]);
    });
    return years;
    
};

const fifaFinalsYears = getYears(fifaFinals);
console.log(fifaFinalsYears);

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(game) {

    /* code here */
    const winners = [];
    game.forEach(function(items){

        let homeTeamName = items['Home Team Name'];
        let awayTeamName = items['Away Team Name'];
        
        let homeWon = items["Home Team Goals"] > items["Away Team Goals"];
        let awayWon = items["Home Team Goals"] < items["Away Team Goals"];
        
        if(homeWon){
            winners.push(homeTeamName);
        } else if(awayWon){
            winners.push(awayTeamName);
        }
    });
    
    return winners;
    
};

console.log(getWinners(fifaFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(finalsData, winnersCountry, yearsWon) {
    const results = finalsData.map(function(element){
        let homeTeamName = items['Home Team Name'];
        let awayTeamName = items['Away Team Name'];
        
        let homeWon = items["Home Team Goals"] > items["Away Team Goals"];
        let awayWon = items["Home Team Goals"] < items["Away Team Goals"];
        
        if(homeWon){
            winners.push(homeTeamName);
        } else if(awayWon){
            winners.push(awayTeamName);
        } 
    });
}
getWinnersByYear(fifaFinals, getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
