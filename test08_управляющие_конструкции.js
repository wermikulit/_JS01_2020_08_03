//управляющие конструкции
let a=36;
let i=1;
let otvet="Число является простым";
while (i<a) {
  ost=a%i;
  console.log(a, i, ost);
  if (ost == 0 && i!=1&&i!=a ) {
    otvet="Число не является простым, делится по крайней мере на "+i;
    break;
  }
  i++;
}
console.log(a, otvet);