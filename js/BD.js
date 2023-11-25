const DO_1 = new Audio('son/DO_1.mp3');
const RE_1 = new Audio('son/RE_1.mp3');
const MI_1 = new Audio('son/MI_1.mp3');
const FA_1 = new Audio('son/FA_1.mp3');
const SOL_1 = new Audio('son/SOL_1.mp3');
const LA_1 = new Audio('son/LA_1.mp3');
const SI_1 = new Audio('son/SI_1.mp3');

const DO__1 = new Audio('son/DO__1.mp3')
const RE__1 = new Audio('son/RE__1.mp3');
const FA__1 = new Audio('son/FA__1.mp3');
const SOL__1 = new Audio('son/SOL__1.mp3');
const LA__1 = new Audio('son/LA__1.mp3');



const TOUCHES = [
    // Octave 1
    //["Digit1", ["1", "1"], "", null],
    ["Digit2", ["2", "2"], "DO#_1", DO__1],
    ["Digit3", ["3", "3"], "RE#_1", RE__1],
    ["Digit4", ["4", "4"], "", null],
    ["Digit5", ["5", "5"], "FA#_1", FA__1],
    ["Digit6", ["6", "6"], "SOL#_1", SOL__1],
    ["Digit7", ["7", "7"], "LA#_1", LA__1],
    ["Digit8", ["8", "8"], "", null],

    ["KeyQ", ["A", "Q"], "DO_1", DO_1],
    ["KeyW", ["Z", "W"], "RE_1", RE_1],
    ["KeyE", ["E", "E"], "MI_1", MI_1],
    ["KeyR", ["R", "R"], "FA_1", FA_1],
    ["KeyT", ["T", "T"], "SOL_1", SOL_1],
    ["KeyY", ["Y", "Y"], "LA_1", LA_1],
    ["KeyU", ["U", "U"], "SI_1", SI_1],

    // Octave 2
    ["Digit9", ["9", "9"], "DO#_2", null],
    ["Digit0", ["0", "0"], "RE#_2", null],
    ["Minus", ["°", ""], "", null],
    ["Equal", ["+", ""], "FA#_2", null],
    ["KeyA", ["Q", "A"], "SOL#_2", null],
    ["KeyS", ["S", "S"], "LA#_2", null],
    ["KeyD", ["D", "D"], "", null],

    ["KeyI", ["I", "I"], "DO_2", null],
    ["KeyO", ["O", "O"], "RE_2", null],
    ["KeyP", ["P", "P"], "MI_2", null],
    ["BracketLeft", ["¨", ""], "FA_2", null],
    ["BracketRight", ["£", ""], "SO_2", null],
    ["KeyZ", ["W", "Z"], "LA_2", null],
    ["KeyX", ["X", "X"], "SI_2", null],

    // Octave 3
    ["KeyF", ["F", "F"], "DO#_3", null],
    ["KeyG", ["G", "G"], "RE#_3", null],
    ["KeyH", ["H", "H"], "", null],
    ["KeyJ", ["J", "J"], "FA#_3", null],
    ["KeyK", ["K", "K"], "SOL#_3", null],
    ["KeyL", ["L", "L"], "LA#_3", null],
    ["Semicolon", ["M", ""], "", null],
    //["Quote", ["%", ""], "", null],
    //["Backslash", ["µ", ""], "", null],

    ["KeyC", ["C", "C"], "DO_3", null],
    ["KeyV", ["V", "V"], "RE_3", null],
    ["KeyB", ["B", "B"], "MI_3", null],
    ["KeyN", ["N", "N"], "FA_3", null],
    ["KeyM", ["?", "M"], "SO_3", null],
    ["Comma", [".", ""], "LA_3", null],
    ["Period", [".", ""], "SI_3", null],
    //["Slash", ["/", ""], "", null],
    //["", ["§", ""], "", null],
];
