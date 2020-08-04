console.log("oh yes 2");
let varNumber=1;
console.log("переменная ", varNumber, "имеет тип", typeof(varNumber));

const PURPLE = "#800080";
console.log("константа ", PURPLE, "имеет тип", typeof(PURPLE));

let oldVar = true;
let newVar ="123-78-90";
console.log("oldVar= ", oldVar, "имеет тип", typeof(oldVar));
console.log("newVar= ", newVar, "имеет тип", typeof(newVar));
console.log("меняем местами...");
let bufVar=newVar;
newVar=oldVar;
oldVar=bufVar;
console.log("oldVar= ", oldVar, "имеет тип", typeof(oldVar));
console.log("newVar= ", newVar, "имеет тип", typeof(newVar));
let x;
console.log("x= ", x, "имеет тип", typeof(x));
console.log("1/0= ", 1/0, "имеет тип", typeof(1/0));
console.log("a23/1= ","имеет тип", typeof("a23"/1));
let y=null;
console.log(`y= ${y} имет тип ${typeof(y)}`);



