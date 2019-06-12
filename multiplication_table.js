const number = 8;
const flag = 10;

// for (let index = 1; index <= flag; index++){
//     console.log(number + ' X ' + index + ' = ' + (number * index));
// }

// let index = 1;
// while (index <= flag) {
//     console.log(number + ' X ' + index + ' = ' + (number * index));
//     index = index + 1;
// }

let index = 1;
do {
    console.log(number + ' X ' + index + ' = ' + (number * index));
    index = index + 1;
} while (index <= flag);