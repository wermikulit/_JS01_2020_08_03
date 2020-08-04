//циклы
//Числа Фибоначчи
let i=3;
let A=0;
let B=1;
let C;
do {
    C = A+B;
    console.log(i, C);
    A=B;
    B=C;
    i++;
} while (i<27);