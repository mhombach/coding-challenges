const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});
let counter = 0;
let lastMeasurement;
reader.on('line', (line) => {
    const newMeasurement = Number(line);
    if(newMeasurement > lastMeasurement) { // comparison number<->undefined is valid and returns "false"
        counter++;
    }
    lastMeasurement = newMeasurement;
});
reader.on('close', () => {
    console.log(`increasing measurements: ${counter}`);
});
