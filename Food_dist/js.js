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

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const date = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / date.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status
    // statusText
    // Response
    // readyState

});