'use strict';
// Задание на урок 12

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

/*const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', ''); // плюс перед prompt для того чтобы возвращалось число

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};*/


/*const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
      ratingFilm = prompt('НА сколько оцените его', ''),
      lastSeeMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingFilm2 = prompt('НА сколько оцените его', '');
      // bestActor = prompt('Какой ваш любимый актер?', ''),// это ключ
      // howActorOld = +prompt('Сколько лет актеру?', ''); // значение*/


// ключ - значение
//добавление значений в обьект в виде ключ - значение
// personaMovieDB.movies[lastSeeMovie] = ratingFilm;
// personaMovieDB.movies[lastSeeMovie2] = ratingFilm2;
//personaMovieDB.actors[bestActor] = howActorOld;


// personaMovieDB.movies.lastSeeMovie = ratingFilm;
// personaMovieDB.movies.lastSeeMovie2 = ratingFilm2;
// console.log(personaMovieDB);
// console.log(personaMovieDB.movies);
//console.log(personaMovieDB.actors);


// *************************************************   Lesson 15 - practice ********************************************************

/*const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '2'); // плюс перед prompt для того чтобы возвращалось число

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


// 1.автоматизировать вопросы пользователю при помощи цикла
for (let i = 0; i <= 3; i++) {
    const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
           ratingFilm = prompt('НА сколько оцените его', '2');
// 2. сделать проверку на правильность ввода данными пользователем
    if ( lastSeeMovie == null || ratingFilm == null || lastSeeMovie === '' || ratingFilm === '' || lastSeeMovie > 10){
        alert('введите данные правильно');
        i = i - 1;
    } else {
        personaMovieDB.movies[lastSeeMovie] = ratingFilm;
    }
}*/

// 3. при помощи условий проверить сколько зритель смотрел фильмов
/*let num = personaMovieDB.count;
switch (num) {
    case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:
        alert('просмотрено мало фильмов');
        break;
    case 10: case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:
    case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:
        alert('Вы классический зритель');
        break;
    case 31 :
        alert('да вы киноман');
        break;
    default:
        alert('да вы киноман');
        break;
}*/
// жаль что нельзя в case передавать переменные

/*if ( personaMovieDB.count < 10){
    alert('просмотрено мало фильмов');
} else if (personaMovieDB.count >= 10 || personaMovieDB.count < 30){
    alert('Вы классический зритель');
} else if (personaMovieDB.count > 30) {
    alert('да вы киноман');
}else {
    alert('error 404');
}*/

//4. переписать двумя способами цикл
//while
/*let i = 1;
while ( i <= 3 ) {
    const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
        ratingFilm = prompt('НА сколько оцените его', '2');
// 2. сделать проверку на правильность ввода данными пользователем
    switch (lastSeeMovie) {
        case lastSeeMovie == null : case ratingFilm == null : case lastSeeMovie === '' : case ratingFilm === '' : case lastSeeMovie > 10:
            alert('введите данные правильно');
            i = i - 1;
            break;
        default:
            personaMovieDB.movies[lastSeeMovie] = ratingFilm;
            break;
    }
    i++;
}*/
//do..while
/*
let i = 1;
do {
    const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
        ratingFilm = prompt('НА сколько оцените его', '2');
// 2. сделать проверку на правильность ввода данными пользователем
    switch (lastSeeMovie) {
        case lastSeeMovie == null : case ratingFilm == null : case lastSeeMovie === '' : case ratingFilm === '' : case lastSeeMovie > 10:
            alert('введите данные правильно');
            i = i - 1;
            break;
        default:
            personaMovieDB.movies[lastSeeMovie] = ratingFilm;
            break;
    }
    i++;
}while ( i <= 3 );
*/


/*console.log(personaMovieDB);
console.log(personaMovieDB.movies);*/



// *********************************************************** lesson 018 Практика , ч3. Используем функции **********************************************************

// Задание на урок:
//1. первую часть задания повторить по уроку
//2. Создать функцию showMyDB, которая будет проверять свойтсво private , если оно false
// -- выводить в консоль главный обьект программы
//3. Создать функцию writeYourGenres в которой пользователь 3 раза будет отвечать
// на вопрос "Ваш любимый жанр под номером ${номер по порядку}", каждый ответ записывается в массив данных
// genres


//1.
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Так сколько же фильмов вы все же посмотрели?', '');
    }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i <= 3; i++) {
        const lastSeeMovie = prompt('Один из последних просмотренных фильмов?', ''),
            ratingFilm = prompt('НА сколько оцените его', '2');
        if ( lastSeeMovie == null || ratingFilm == null || lastSeeMovie === '' || ratingFilm === '' || lastSeeMovie > 10 || typeof(lastSeeMovie) !== 'string'){
            alert('введите данные правильно');
            i = i - 1;
        } else if (isNaN(ratingFilm)){
            alert('рейтинг нужно вводить числом!');
            i = i - 1;
        } else {
            personaMovieDB.movies[lastSeeMovie] = ratingFilm;
        }
    }
}

rememberMyFilms();


function detectPersonalLvl () {
    if ( personaMovieDB.count < 10){
        alert('просмотрено мало фильмов');
    } else if (personaMovieDB.count >= 10 || personaMovieDB.count < 30){
        alert('Вы классический зритель');
    } else if (personaMovieDB.count > 30) {
        alert('да вы киноман');
    }else {
        alert('error 404');
    }
}

detectPersonalLvl();


//3.

function writeYourGenres() {
   for (let i = 1; i < 4; i++){
      let filmsTypes = prompt(`Ваш любимый жанр под номером ${i}`);
       personaMovieDB.genres[`${i}`] = filmsTypes;
   }
}

writeYourGenres();


//2.
function showMyDB (privates) {
    if (privates === false) {
        console.log(personaMovieDB);
    }
}
showMyDB(personaMovieDB.private);



