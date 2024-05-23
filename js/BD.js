// Octave 1
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

// Octave 2
const DO_2 = null // new Audio('son/DO_2.mp3');
const RE_2 = null // new Audio('son/RE_2.mp3');
const MI_2 = null // new Audio('son/MI_2.mp3');
const FA_2 = null // new Audio('son/FA_2.mp3');
const SOL_2 = null // new Audio('son/SOL_2.mp3');
const LA_2 = null // new Audio('son/LA_2.mp3');
const SI_2 = null // new Audio('son/SI_2.mp3');

const DO__2 = null // new Audio('son/DO__2.mp3')
const RE__2 = null // new Audio('son/RE__2.mp3');
const FA__2 = null // new Audio('son/FA__2.mp3');
const SOL__2 = null // new Audio('son/SOL__2.mp3');
const LA__2 = null // new Audio('son/LA__2.mp3');

// Octave 3
const DO_3 = null // new Audio('son/DO_3.mp3');
const RE_3 = null // new Audio('son/RE_3.mp3');
const MI_3 = null // new Audio('son/MI_3.mp3');
const FA_3 = null // new Audio('son/FA_3.mp3');
const SOL_3 = null // new Audio('son/SOL_3.mp3');
const LA_3 = null // new Audio('son/LA_3.mp3');
const SI_3 = null // new Audio('son/SI_3.mp3');

const DO__3 = null // new Audio('son/DO__3.mp3')
const RE__3 = null // new Audio('son/RE__3.mp3');
const FA__3 = null // new Audio('son/FA__3.mp3');
const SOL__3 = null // new Audio('son/SOL__3.mp3');
const LA__3 = null // new Audio('son/LA__3.mp3');

// Octave 4
const DO_4 = null // new Audio('son/DO_4.mp3');
const RE_4 = null // new Audio('son/RE_4.mp3');
const MI_4 = null // new Audio('son/MI_4.mp3');
const FA_4 = null // new Audio('son/FA_4.mp3');
const SOL_4 = null // new Audio('son/SOL_4.mp3');
const LA_4 = null // new Audio('son/LA_4.mp3');
const SI_4 = null // new Audio('son/SI_4.mp3');

const DO__4 = null // new Audio('son/DO__4.mp3')
const RE__4 = null // new Audio('son/RE__4.mp3');
const FA__4 = null // new Audio('son/FA__4.mp3');
const SOL__4 = null // new Audio('son/SOL__4.mp3');
const LA__4 = null // new Audio('son/LA__4.mp3');

// Octave 5
const DO_5 = null // new Audio('son/DO_5.mp3');
const RE_5 = null // new Audio('son/RE_5.mp3');
const MI_5 = null // new Audio('son/MI_5.mp3');
const FA_5 = null // new Audio('son/FA_5.mp3');
const SOL_5 = null // new Audio('son/SOL_5.mp3');
const LA_5 = null // new Audio('son/LA_5.mp3');
const SI_5 = null // new Audio('son/SI_5.mp3');

const DO__5 = null // new Audio('son/DO__5.mp3')
const RE__5 = null // new Audio('son/RE__5.mp3');
const FA__5 = null // new Audio('son/FA__5.mp3');
const SOL__5 = null // new Audio('son/SOL__5.mp3');
const LA__5 = null // new Audio('son/LA__5.mp3');



const TOUCHES = [
    // Octave 1
    //["Digit1", ["1", "1"], ""],
    ["Digit2", ["2", "2"], "DO#_1"],
    ["Digit3", ["3", "3"], "RE#_1"],
    ["Digit4", ["4", "4"], ""],
    ["Digit5", ["5", "5"], "FA#_1"],
    ["Digit6", ["6", "6"], "SOL#_1"],
    ["Digit7", ["7", "7"], "LA#_1"],
    ["Digit8", ["8", "8"], ""],

    ["KeyQ", ["A", "Q"], "DO_1"],
    ["KeyW", ["Z", "W"], "RE_1"],
    ["KeyE", ["E", "E"], "MI_1"],
    ["KeyR", ["R", "R"], "FA_1"],
    ["KeyT", ["T", "T"], "SOL_1"],
    ["KeyY", ["Y", "Y"], "LA_1"],
    ["KeyU", ["U", "U"], "SI_1"],

    // Octave 2
    ["Digit9", ["9", "9"], "DO#_2"],
    ["Digit0", ["0", "0"], "RE#_2"],
    ["Minus", ["°", ""], ""],
    ["Equal", ["+", ""], "FA#_2"],
    ["KeyA", ["Q", "A"], "SOL#_2"],
    ["KeyS", ["S", "S"], "LA#_2"],
    ["KeyD", ["D", "D"], ""],

    ["KeyI", ["I", "I"], "DO_2"],
    ["KeyO", ["O", "O"], "RE_2"],
    ["KeyP", ["P", "P"], "MI_2"],
    ["BracketLeft", ["¨", ""], "FA_2",],
    ["BracketRight", ["£", ""], "SO_2"],
    ["KeyZ", ["W", "Z"], "LA_2"],
    ["KeyX", ["X", "X"], "SI_2"],

    // Octave 3
    ["KeyF", ["F", "F"], "DO#_3"],
    ["KeyG", ["G", "G"], "RE#_3"],
    ["KeyH", ["H", "H"], ""],
    ["KeyJ", ["J", "J"], "FA#_3"],
    ["KeyK", ["K", "K"], "SOL#_3"],
    ["KeyL", ["L", "L"], "LA#_3"],
    ["Semicolon", ["M", ""], ""],
    //["Quote", ["%", ""], ""],
    //["Backslash", ["µ", ""], ""],

    ["KeyC", ["C", "C"], "DO_3"],
    ["KeyV", ["V", "V"], "RE_3"],
    ["KeyB", ["B", "B"], "MI_3"],
    ["KeyN", ["N", "N"], "FA_3"],
    ["KeyM", ["?", "M"], "SO_3"],
    ["Comma", [".", ""], "LA_3"],
    ["Period", [".", ""], "SI_3"],
    //["Slash", ["/", ""], ""],
    //["", ["§", ""], ""],
];

const SONS = [
    // Octave 1
    //null,
    DO__1,
    RE__1,
    null,
    FA__1,
    SOL__1,
    LA__1,
    null,

    DO_1,
    RE_1,
    MI_1,
    FA_1,
    SOL_1,
    LA_1,
    SI_1,

    // Octave 2
    DO__2,
    RE__2,
    null,
    FA__2,
    SOL__2,
    LA__2,
    null,

    DO_2,
    RE_2,
    MI_2,
    FA_2,
    SOL_2,
    LA_2,
    SI_2,

    // Octave 3
    DO__3,
    RE__3,
    null,
    FA__3,
    SOL__3,
    LA__3,
    null,
    //null,
    //null,

    DO_3,
    RE_3,
    MI_3,
    FA_3,
    SOL_3,
    LA_3,
    SI_3,
    //null,
    //null,

    // Octave 4
    DO__4,
    RE__4,
    null,
    FA__4,
    SOL__4,
    LA__4,
    null,

    DO_4,
    RE_4,
    MI_4,
    FA_4,
    SOL_4,
    LA_4,
    SI_4,

    // Octave 5
    DO__5,
    RE__5,
    null,
    FA__5,
    SOL__5,
    LA__5,
    null,

    DO_5,
    RE_5,
    MI_5,
    FA_5,
    SOL_5,
    LA_5,
    SI_5,
];
