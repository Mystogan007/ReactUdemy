/*jshint esversion: 6 */

const numberOfIlm = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
count: numberOfIlm,
movies: {},
actors: {},
genres: [],
private: false
};
const a = prompt('Один из последних просмотренных фильмов?','');
const b = prompt('а сколько оцените его?','');
const c = prompt('Один из последних просмотренных фильмов?','');
const d = prompt('а сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);