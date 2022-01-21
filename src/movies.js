const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stivenDramas = movies.filter((movie) => {
    return (
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stivenDramas.length;
}
// console.log(howManyMovies(movies))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0) {
    return 0;
  }
  const sum = movies.reduce((acc, value) => {
    if (typeof value.score !== "number") {
      return acc + 0;
    } else {
      return acc + value.score;
    }
  }, 0);
  return Number((sum / movies.length).toFixed(2));
}
// console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramas = movies.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  const sumDrama = dramas.reduce((acc, value) => {
    if (typeof value.score !== "number") {
      return acc + 0;
    } else if (dramas.length == 0) {
      return 0;
    } else {
      return acc + value.score;
    }
  }, 0);
  return Number((sumDrama / dramas.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesCp = [...movies];
  let moviesCp2 = [...moviesCp]
  moviesCp.sort((a, b) => {
    if (a.year < b.year) return -1; // a is less than b
    if (a.year > b.year) return 1; // .year is greater than b
    if (a.year === b.year){
      moviesCp.sort((a,b) =>{
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0
      })
    }  
  })
  return moviesCp
}
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
