let userAge = +prompt('Введите свой возраст: ');

if(userAge > 0 && userAge <= 18){
    alert('Вы еще молоды, вам нужно учиться')
}else if(userAge > 18 && userAge <= 50){
    alert('Вам нужно работать');
}
else if(userAge > 50 && userAge <= 59){
    alert('Вам скоро на пенсию');
}
else if( userAge > 59 && userAge <= 100 ){
    alert('Вы пенсионер')
}else{
    alert('Что-то пошло не так')
}


let nextPage = confirm('Хотите перейти к следующей странице?');
      

if(nextPage === true){
    location.href='main.html';
}else{
    // alert('Ok')
    location.href='index.html';
}