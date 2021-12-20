const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});
let counter = 0;
let last3Measurements = [undefined, undefined, undefined];
reader.on('line', (line) => {
    const newMeasurement = Number(line);
    if(newMeasurement + last3Measurements[1] + last3Measurements[2] > last3Measurements[0] + last3Measurements[1] + last3Measurements[2]) { // comparison number<->undefined is valid and returns "false"
        counter++;
    }
    last3Measurements.shift();
    last3Measurements.push(newMeasurement);
});
reader.on('close', () => {
    console.log(`increasing measurement windows: ${counter}`);
});
