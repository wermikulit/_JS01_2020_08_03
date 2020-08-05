//массивы
let cats=new Array();
let dogs=[];

let cats2=new Array();
cats2[1]="Васька1";
cats2[4]="Хромой";

console.log("======CATS2");
console.log(cats2);

cats=cats2;
cats[0]="Мурка";
cats[3]="Ильза"
console.log("======CATS");
console.log(cats);

console.log("======CATS2");
console.log(cats2);

console.log("======ANOTHER_CATS2");
let anotherCats=cats2.slice(1,2);
anotherCats[3]="Не Хромой";
console.log(anotherCats);

console.log("======CATS2");
console.log(cats2);


console.log("======ANOTHER_CATS2");
anotherCats[6]="Шестой";
anotherCats[7]="Седьмой";
anotherCats[10]="Восьмой";
anotherCats.push("Ну-ка");
anotherCats.unshift("Просто кот");
for (let i = 0; i < anotherCats.length; i++) {
    if (anotherCats[i]==undefined) {
        anotherCats.splice(i,1);
        i--;
    }
    
}
console.log(anotherCats);

console.log("======JOIN CONCAT SORT");
let concatCats=cats2.concat(anotherCats);
console.log(concatCats);
let numbers=[10,20,34];
let concatStuff=numbers.concat(anotherCats);
console.log(concatStuff);
let catJoin=cats2.join("| |");
console.log(catJoin);
let sortCats2=cats2.sort();
console.log(sortCats2);
console.log("======INDEXOF");
console.log(concatCats.indexOf("Васька1"));
console.log(concatCats.lastIndexOf("Васька1"));
console.log(concatCats.indexOf("Васька2"));

console.log("======FILTER");
function condition(value) {
    let result=false;
    if (value.indexOf('а')>-1) {
        result=true;
    }
   return result; 
}
let filteredCats=cats2.filter(condition);
console.log(cats2);
console.log(filteredCats);

filteredCats.forEach(console.log);
filteredCats.forEach((item,index,array)=>{console.log(`${item} имеет позицию ${index}`)});