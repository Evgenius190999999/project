// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;


// function myAnimation() {
//     const elem = document.querySelector('box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

//  btn.addEventListener('click', myAnimation);



// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('ex');
//     i++;
// }


// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);

// }, 500);

// const now = new Date();

// console.log(now.getMonth());

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// // console.log(`${end - start}`);

// const box = document.querySelector('.box'),
//       btn = document.querySelector('.button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetheight;
// const height = box.offsetwidht;


// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect());

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// };

// log('basic','rest', 'operatot', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(3);


// const persone = {
//     name: 'alex',
//     tel: '+9999999',
//     parents: {
//         mom: 'olga',
//         dad: 'mike'
//     }
// };


// const clone = JSON.parse(JSON.stringify(persone));

// clone.parents.mom = 'Ann';

// console.log(persone);
// console.log(clone);

// const inputRub = document.querySelector('#rub'),
//       inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             // console.log(request.response);
//             const date = JSON.parse(request.response);
//             inputUsd.value = +inputRub.value / date.current.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так";
//         }
//     });

    // status
    // statusText
    // Response
    // readyState

// });


// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const prodeuct = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(prodeuct);   
//     }, 2000);
// });

// req.then((prodeuct) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             prodeuct.status = 'oreder';
//             resolve(prodeuct);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
    
// }).then((data) => {
//     console.log(data);
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));

// // Promise.all([test(1000), test(2000)]).then(() => {
// //     console.log('All');
// // });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// filter 

// const names = ['Ivan','Ann','Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);


// map

// const answer = ['IvAn', 'AnnA', 'Hello'];
// const result = answer.map(item =>  item.toLocaleLowerCase());
// console.log(result);


// every/some

// const some = [4, 5, 45];
// console.log(some.some(item => typeof(item) === "number"));
// console.log(some.every(item => typeof(item) === "number"));



// reduce

// const arr = [4,5,1,3,2,6];
// const result = arr.reduce((sum, current) => sum + current, 3);
// console.log(result);

// const arr = ['Apple', 'Pear', 'Plum'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);


// LOCAL STORAGE

// localStorage.setItem('number', '5');
// localStorage.getItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();
// const  checkbox = document.querySelector('#checkbox'),
//        form = document.querySelector('#form'),
//        change = document.querySelector('#color');

// if (localStorage.getItem('isChecked')) {
//     checkbox.checked = true;      
// }

// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundcolor = '#red';
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true);
// }); 

// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundcolor = '#fff';
//     } else {
//         localStorage.setItem('bg', 'changed');
//         form.style.backgroundcolor = 'red';
//     }
// }); 

// const persone = {
//     name: 'alex',
//     age: 25
// };

// const seralizePersone = JSON.stringify(persone);
// localStorage.setItem('alex', seralizePersone);

// console.log(JSON.parse(localStorage.getItem('alex')));


// REgular 

// new RegExp('pattern', 'flags');
// /pattren/f

// const ans = prompt('Введите ваше имя');

// const reg = /n/;
// i 
// g 
// m 

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*'));


// SET GET

// const persone = {
//     name: 'alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(persone.userAge = 30);
// console.log(persone.userAge);


// Incapsulation 

// class User{
// constructor(name, age) {
//     this.name = name;
//     this._age = age;
// }
//     surname = 'Petroscg';
//     say(){
//         console.log(`Имя пользователя ${this.name}${this.surname}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// ivan.say();



// Local Function

// const number = 1;

// (function(){
//     let number = 2;
//     console.log(number);
//     console.log(number + 3);
// }());

// console.log(number);

// const user = (function(){
//     const privat = function() {
//         console.log('I am privat!');
//     };

//     return {
//         sayHello: privat
//     };
// }());

// user.sayHello();
