"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

//function calc(a, b) {
//    return (a + b);
//}

//console.log(calc(4,3));
//console.log(calc(5,5));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("hello");
};

logger();


const calc = (a, b) => {
    console.log('1');
    return a + b;
};


const str = 'test';
const arr = [1, 2, 3];

console.log(arr.length);

const logg = "Hello world";

console.log(logg.slice(6));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));


const numb = 12.2;
console.log(Math.round(numb));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));


function squareOfSum(a, b) {
    let summsqrd = (a**2) + (2 * a * b) + (b**2);
    return summsqrd;
}

squareOfSum(2,3);