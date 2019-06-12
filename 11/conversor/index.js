function toBinary(n) {
    let rest = [];
    while (n > 0) {
        residuo = (n%2);
        rest.push(residuo);
        n = parseInt(n/2);
    }
    return rest.reverse().join();
}
module.exports.toBinary = toBinary;

function toHexadecimal(n) {
    let rest = [];
    while (n > 0) {
        residuo = (n%16);
        if (residuo === 10) {
            rest.push('A');
        } else if (residuo === 11) {
            rest.push('B');
        } else if (residuo === 12) {
            rest.push('C');
        } else if (residuo === 13) {
            rest.push('D');
        } else if (residuo === 14) {
            rest.push('E');
        } else if (residuo === 15) {
            rest.push('F');
        } else {
            rest.push(residuo);
        }
        n = parseInt(n/16);
    }
    return rest.reverse().join();
}
module.exports.toHexadecimal = toHexadecimal;

function toOctal(n) {
    let rest = [];
    while (n > 0) {
        residuo = (n%8);
        rest.push(residuo);
        n = parseInt(n/8);
    }
    return rest.reverse().join();
}
module.exports.toOctal = toOctal;