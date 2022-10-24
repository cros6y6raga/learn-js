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