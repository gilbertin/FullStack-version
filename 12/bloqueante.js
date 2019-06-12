let myTime = Date.now();
const endTime = myTime + 3000;

function printTwo() {
    console.log(2);
}

console.log(1);
while (myTime < endTime) {
    myTime = Date.now();
}
printTwo();
console.log(3);