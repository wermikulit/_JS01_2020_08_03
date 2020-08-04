//управляющие конструкции
let a=9;
let otvet="";
switch (a) {
  case 12:
  case 1:
  case 2:
    otvet="зим";
    break;
  case 3:
  case 4:
  case 5:
    otvet="весен";
    break;
  case 6:
  case 7:
  case 8:
    otvet="лет";
    break;
  default:
    otvet="осен"
    break;
}

console.log(a+" - это "+ otvet+ "ний месяц");
console.log(`${a} - это ${otvet}ний месяц`);