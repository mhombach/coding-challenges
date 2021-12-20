const LETTER_A_ASCII_NUMBER = 65; // A = 65, Z = 90

createDiamond('I');

function createDiamond(letter) {
    letter = letter.toUpperCase();
    console.log('letter:', letter);

    const diamondSize = getDiamondSize(letter);
    console.log('diamondSize:', diamondSize);

    printDiamond(diamondSize);

}

function getDiamondSize(char) {
    return ((char.charCodeAt(0) - LETTER_A_ASCII_NUMBER + 1)*2)-1;
}

function printDiamond(size) {
    for (let i = 0; i < size; i++) {
        const currentChar = getCurrentCharacter(size, i);
        let line = createDottedLine(size);
        const middle = Math.round(size / 2);
        let offset = i;
        if(i >= middle) {
            offset = size - i - 1;
        }
        line = replaceAtIndex(line, middle-offset-1, currentChar);
        line = replaceAtIndex(line, middle+offset-1, currentChar);
        console.log(line);
    }
}

function replaceAtIndex(text, index, newValue) {
    return text.substr(0, index) + newValue + text.substr(index + newValue.length);
}

function createDottedLine(length) {
    let line = '';
    for (let i = 0; i < length; i++) {
        line += '.';
    }
    return line;
}

function getCurrentCharacter(diamondSize, currentLineNumber) {
    if(currentLineNumber < diamondSize/2) {
        return String.fromCharCode(LETTER_A_ASCII_NUMBER + currentLineNumber);
    } else {
        return String.fromCharCode(LETTER_A_ASCII_NUMBER + diamondSize - currentLineNumber - 1 );
    }
}