const { spawn } = require('child_process');
const result = spawn('git show-branch');

result.stdout.on('data', (data) => {
console.log(`stdout: ${data}`);
});

result.stderr.on('data', (data) => {
console.log(`stderr: ${data}`);
});

result.on('close', (code) => {
console.log(`child process exited with code ${code}`);
});