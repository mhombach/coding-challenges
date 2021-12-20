const fs = require('fs');

const input = fs.readFileSync('input.txt', 'UTF-8');
const allLines = input.split(/\r?\n/);

const allFissures = allLines.map(entry => createFissureEntry(entry));
console.log('all fissures:', allFissures);

const nonDiagonalFissures = filterDiagonals(allFissures);
console.log('non-diagonal fissures:', nonDiagonalFissures);

const result = checknonDiagonalFissures

function check(fissures) {
    for (const fissure1 of fissures) {
        for (const fissure2 of fissures) {
            const result = checkOverlapping(fissure1, fissure2);
        }
    }
}

function filterDiagonals(fissures) {
    return fissures.filter(fissure => fissure.x1 === fissure.x2 || fissure.y1 === fissure.y2 );
}

function checkOverlapping(fissure1, fissure2) {
    if(x1 === x2) {

    } else {

    }
}

function checkCrossing() {

}

function createFissureEntry(line) {
    const twoPoints = line.split(' -> ');
    const [x1, y1] = twoPoints[0].split(',');
    const [x2, y2] = twoPoints[1].split(',');
    return { x1, y1, x2, y2 };
}