/*jshint esversion: 6 */

let numberOfIlm;
const personalMovieDB = {
  count: numberOfIlm,
  movies: {},
  actors: {},
  genres: [],
  private: false
  };
  

//start();
//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();



function rememberMyFilms() {
  while(true)
{
    var isZargut = true;
    for(let i = 1; i <=2;i++)
    {
        
      let a = prompt('Один из последних просмотренных фильмов?','');
      let b = prompt('а сколько оцените его?','');
      if(a == '' || b == '' || b == null || a == null)
      {
          alert('Нельзя оставлять пустое поле. Попробуйте снова');
          isZargut = false;
          break;
      }
      if(a.length > 50)
      {
          alert('Слишком длинное название фильма. Попробуйте снова');
          isZargut = false;
          break;
      }
      personalMovieDB.movies[a] = b;
    }  
if(isZargut)
{
    break;
}  
}   
}


function start() {
while (numberOfIlm == '' || numberOfIlm == null || isNaN(numberOfIlm) ) {
  numberOfIlm = +prompt('Сколько фильмов вы уже посмотрели?','');
} 
  
}

function rememberMyFilms() {
  while(true)
{
    var isZargut = true;
    for(let i = 1; i <=2;i++)
    {
        
      let a = prompt('Один из последних просмотренных фильмов?','');
      let b = prompt('а сколько оцените его?','');
      if(a == '' || b == '' || b == null || a == null)
      {
          alert('Нельзя оставлять пустое поле. Попробуйте снова');
          isZargut = false;
          break;
      }
      if(a.length > 50)
      {
          alert('Слишком длинное название фильма. Попробуйте снова');
          isZargut = false;
          break;
      }
      personalMovieDB.movies[a] = b;
    }  
if(isZargut)
{
    break;
}  
}   
}


function detectPersonalLevel() {
  let count = parseInt(personalMovieDB.count);

  if (count < 10) {
    alert('Просмотрено довольно мало фильмов');
  }
  else if (count > 10 && count < 30) {
    alert('Вы классический зритель');
  } 
  else if (count > 30) {
    alert('Вы киноман');
  } else {
    alert('ВПроизошла ошибка');
  }


console.log(personalMovieDB); 
}

function showMyDB() {
    if (personalMovieDB.private == false) {
    console.log(personalMovieDB); 
  }
}

function showMyDB() {
  if (personalMovieDB.private == false) {
  console.log(personalMovieDB); 
}
}

function writeYourGenres() {
  for(let i = 1; i <=3;i++)
    {
        
      let a = prompt('Ваш любимый жанр под номером' + i,'');
    
      if(a == '' || a == null)
      {
          alert('Нельзя оставлять пустое поле. Попробуйте снова');
         
          continue;
      }
   
      personalMovieDB.genres[i] = a;
    } 
    console.log(personalMovieDB);
}

