"use strict";

const numberOfFlilms = +prompt('Сколько фильмов вы уже посмотрели','');

const personalMovieDB = {
    count: numberOfFlilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из послених просмотреных фильмов', '');
const b = prompt('На сколько оценили его', '');
const c = prompt('Один из послених просмотреных фильмов', '');
const d = prompt('На сколько оценили его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
