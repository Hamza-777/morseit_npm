const letters = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '&': '.-...',
    "'": '.----.',
    '@': '.--.-.',
    '$': '···−··−',
    ')': '-.--.-',
    '(': '-.--.',
    ':': '---...',
    ',': '--..--',
    ';': '−·−·−·',
    '=': '-...-',
    '!': '-.-.--',
    '.': '.-.-.-',
    '-': '-....-',
    '_': '··−−·−',
    '+': '.-.-.',
    '"': '.-..-.',
    '?': '..--..',
    '/': '-..-.',
    ' ': '/',
    '\n': '.-.-'
};

const textPattern = /[\*~`#%^<>\{\}|\[\]\\]/;

function morseit(text) {
    if(text.length === 0) {
        return '';
    } else {
        let textVal = text.toLowerCase();
        if(textPattern.test(textVal)) {
            return "'*', '~', '`', '#', '%', '^', '<', '>', '{', '}', '|', '[', ']' and '\\' cannot be converted to morse code";
        } else {
            let result = toCode(textVal);
            return result;
        }
    }
}

const toCode = text => {
    let result = letters[text[0]];
    for(let i = 1; i < text.length; i++) {
        result += '   ' + letters[text[i]];
    }
    return result;
};

module.exports = morseit;