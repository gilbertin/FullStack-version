const process = require('process');

if (process.pid) {
    console.log('This process is your pid ' + process.pid);
    console.log(process.memoryUsage());
    console.log(process.execPath);
    console.log(process.env);
}

const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }