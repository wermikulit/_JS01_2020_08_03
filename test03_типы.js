// явное преобразование

let x=String(234567);
console.log(x);
console.log(typeof(x));
//неявное строковое преобразование
console.log(true+"345");
//числовое преобразование
let y=Number("234.0h9");
console.log(y,typeof y, typeof(typeof y));
console.log("18"/"3"); //пытаемся выполнить арифметическую операцию

console.log(NaN,typeof NaN, typeof(typeof NaN));
console.log(null,typeof null, typeof(typeof null));
console.log(true,typeof true, typeof(typeof true));