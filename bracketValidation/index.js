function validateBrackets(input) {
    let bracketStateStack = '';
    for (const bracket of input) {
        if(isOpeningBracket(bracket)) {
            bracketStateStack += bracket;
        } else {
            const lastStackBracket = bracketStateStack[bracketStateStack.length-1];
            if(lastStackBracket !== getOpeningBracket(bracket)) {
                return false;
            }
            bracketStateStack = stringWithoutLastChar(bracketStateStack);
        }
    }
    return bracketStateStack.length === 0;
}

function stringWithoutLastChar(fullString) {
    return fullString.substring(0, fullString.length-1);
}

function isOpeningBracket(bracket) {
    return bracket === '(' || bracket === '[' || bracket === '{';
}

function getOpeningBracket(closingBracket) {
    switch (closingBracket) {
        case ')':
            return '(';
        case ']':
            return '[';
        case '}':
            return '{';
    }
}

console.log('([{}])', validateBrackets('([{}])'));
console.log('([[[[{{}{}{(())}}()]]()]()])()', validateBrackets('([[[[{{}{}{(())}}()]]()]()])()'));
console.log('([[[[{{}{}{(())}}()]()]()])()', validateBrackets('([[[[{{}{}{(())}}()]()]()])()'));
console.log('[[[[{{}{}{(())}}()]]()]()])()', validateBrackets('[[[[{{}{}{(())}}()]]()]()])()'));
console.log('([[[[{{}{}{(())}}()]]()]()])(', validateBrackets('([[[[{{}{}{(())}}()]]()]()])('));