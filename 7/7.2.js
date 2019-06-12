const asistenaciasArray = [true, true, true, true, false];
var asistencias = 0;

for (let index = 0; index < asistenaciasArray.length; index++) {
    if (asistenaciasArray[index]) {
        asistencias += 1;   
    }
}

console.log('Tu porcentaje de asistencias es : ' + ((asistencias / asistenaciasArray.length)  * 100) + '%');