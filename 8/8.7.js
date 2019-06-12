const temperaturas = [19, 24, 25, 30, 10];
let max = 0;

for (let i = 0; i < temperaturas.length; i++) {
    if (max < temperaturas[i]) {
        max = temperaturas[i];
    }
}

console.log('La temperatura mas alta es : ' + max + 'º');