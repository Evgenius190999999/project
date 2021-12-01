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

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}


const ivan = new User('Ivan', 28);