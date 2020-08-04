//Функции
function prostoeChislo (a) {
  let i=2;
  let otvet="Число является простым";
  while (i<=a/2) {
    ost=a%i;
    //console.log(a, i, ost);
    if (ost === 0) {
      otvet="Число не является простым, делится по крайней мере на "+i;
      return otvet;
    }
    i++;
  }
  return otvet;
  }

let v=prompt("Введите число");
console.log(v, prostoeChislo(v));