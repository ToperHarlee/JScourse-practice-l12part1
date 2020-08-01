'use strict';
// Задание на урок

// 1) Создать переменную numberOfFilms и в нее поместить ответ пользовател на впорос
// "сколько фильмов вы уже посмотрели?"
// 2) Создать обьект personaMovieDB и в него поместить такие свойства:
//  - count - сюда передается ответ на первый вопрос
//  - movies - в это свойство поместить пустой обьект
//  - actors - тоже поместить пустой обьект
//  - genres - сюда поместить пустой массив
//  - private - в это свойство поместить boolean значение false
//
// 3) Задайте пользователю по два раза вопросы:
// - 'Один из последних просмотренных фильмов?'
// - 'НА сколько оцените его?'
//
// Ответы поместить в отдельные переменные
//
// Записать ответы в обьект movies в формате:
// movies: {
//     'logan': '8.1'
// }
// проверить  на ошибки в консоли

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', ''); // плюс перед prompt для того чтобы возвращалось число

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
      ratingFilm = prompt('НА сколько оцените его', ''),
      lastSeeMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingFilm2 = prompt('НА сколько оцените его', '');
      // bestActor = prompt('Какой ваш любимый актер?', ''),// это ключ
      // howActorOld = +prompt('Сколько лет актеру?', ''); // значение

// ключ - значение
//добавление значений в обьект в виде ключ - значение
personaMovieDB.movies[lastSeeMovie] = ratingFilm;
personaMovieDB.movies[lastSeeMovie2] = ratingFilm2;
//personaMovieDB.actors[bestActor] = howActorOld;


// personaMovieDB.movies.lastSeeMovie = ratingFilm;
// personaMovieDB.movies.lastSeeMovie2 = ratingFilm2;
console.log(personaMovieDB);
console.log(personaMovieDB.movies);
//console.log(personaMovieDB.actors);


