// Number
let x:number = 10;
let z:number = NaN;
// let y:bigint = 1234n є обмеження для використання синтаксису УВАГА!

// String

let str:string = "hello world";
let symb = Symbol('let')
// let text:string = str + symb такий синтаксис не можливий

// Boolean

let X:boolean = true;
let Y:boolean = false;

// X = 1 неможливо переназначити X як число так як у нього вже призначений тип буліан

// Nothing
let u:undefined = undefined
let n:null = null

// Literal

const lit = 108;
// при використанні const значення змінної і буде її єдиним типом і переназначити його буде неможливо. Такий тип називається літералом

// Universal
let any:any = "any";
any = 1;
any.toUpperCase()
any = []
// Цей тип є небезпечним так як відсутні вказівки на заданий тип тобто тип може бути змінений на будь-який і ми очкікуємо будь-який тип на виході

let unk:unknown = "unknown";
// unk.toUpperCase будь які операції з таким синтаксисому будуть не дозволені поки явно не буде вказано тип змінної
if (typeof unk === "string") unk.toUpperCase()