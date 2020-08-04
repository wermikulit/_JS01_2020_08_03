//Функции
function Fibonnacchi(n) {
  return n<=1? n: Fibonnacchi(n-1)+Fibonnacchi(n-2);
}

let v=prompt("Введите число");
console.log("Фибонначчи",  v, Fibonnacchi(v));