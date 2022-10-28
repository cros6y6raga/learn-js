// let admin;
// let name;
// name='John';
// admin=name;
// alert(admin);

// let eart;
// let nameuser;

// let name=prompt('Ваше имя?','Владимир')
// alert(`Ваше имя ${name}`)

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
//
// alert(a + b); // 12

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year == 2015) {
//     alert('Вы правы!');
// } else {
//     alert('Не верно!');
// }

// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
//
// if (year == 2015) {
//     alert( 'Да вы знаток!' );
// } else {
//     alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }
// let age = prompt('Сколько вам лет?', '');
// let accessAllowed = age > 18;
// alert(accessAllowed);

// if ("0") {
//     alert( 'Привет' );
// }

// let name = prompt('Какое «официальное» название JavaScript?')
// if (name==='ECMAScript') {
//     alert('Верно!');
// }
// else {
//     alert('Не знаете? ECMAScript!');
// }

// let value = prompt('Выведет число', 0)
// if (value > 0) {
//     alert(1)
// }
// if (value < 0) {
//     alert(-1)
// }
// else if (value == 0) {
//     alert(0)
// }

// let result;
//
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

// let result = a + b < 4 ? 'Мало' : 'Много';
// alert(result)

// let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );

// let login = prompt('Какой у вас логин?')
// let password
// if (login === 'Админ') {
//     password = prompt('Какой у вас пароль?')
// }
// if (login === '' || login === null) {
//     alert('Я вас не знаю')
// }
// if (password === 'Я главный') {
//     alert('Здравствуйте')
// } else if (password !== 'Я главный') {
//     alert('Неверный пароль')
// } else {
//     alert('Отменено')
// }

// let userName = prompt("Кто там?", '');
//
// if (userName === 'Админ') {
//
//     let pass = prompt('Пароль?', '');
//
//     if (pass === 'Я главный') {
//         alert( 'Здравствуйте!' );
//     } else if (pass === '' || pass === null) {
//         alert( 'Отменено' );
//     } else {
//         alert( 'Неверный пароль' );
//     }
//
// } else if (userName === '' || userName === null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }

// let i = 3;
//
// while (i) {
//     alert( i-- );
// }

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 11; i++) {
//
//     if (i % 3) {
//         alert( i );
//     }
//
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert( i );
//     }
// }

// let i = 0;
// while ( i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// let browser = prompt('Какой у вас браузер?');
// if (browser==='Edge') {
//     alert( "You've got the Edge!" );
// }
// else if (browser==='Chrome'||'Firefox'||'Safari'||'Opera') {
//     alert( 'Okay we support these browsers too' );
// }
// else {alert( 'We hope that this page looks ok!' );} //неправильно

// let browser = prompt('Какой у вас браузер?');
// if(browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// } // правильно

// const number = +prompt('Введите число между 0 и 3', '');
//
// if (number === 0) {
//     alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     let result = age > 18 ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     let result = age > 18 ? true : confirm('Родители разрешили?');
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//     ask(
//         "Вы согласны?",
//         function () {
//             alert("Вы согласились.");
//         },
//         function () {
//             alert("Вы отменили выполнение.");
//         }
//     );
// }
//
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

