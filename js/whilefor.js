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

const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};

option.makeTest();

const {border, background} = option.colors;
console.log(border);

console.log(Object.keys(option).length);

//console.log(option.name);

//delete option.name;

//console.log(option);
let counet = 0;
for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i}, имеет значение ${option[key][i]}`);
            counet++;
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${option[key]}`);
        counet++;
    }
    
}
console.log(counet);

const array = [1,2,3,4,5];

array.pop();
array.push(7);

for (let value of array) {
    console.log(value);
}


array.forEach(function(item, i, array) {
    console.log(`${i}: ${item} Внутри массива ${array}`);
});

const string = prompt('', '');
const products = string.split(', ');
products.sort();
console.log(products.join('; '));

function comperaNum(a, b) {
    return a-b;
}



function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numberss = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbres = copy(numberss);

newNumbres.a = 10;

console.log(newNumbres);
console.log(numberss);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numberss, add));

const oldArr = ['a','b','c'];
const newArr = oldArr.slice();

newArr[1] = 'dsakdl';
console.log(newArr);
console.log(oldArr);


