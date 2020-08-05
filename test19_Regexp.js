
let stroka="ABC_D3E_4F0A-BCA-=B+CDEAA=BBCD.DAEFAAEE";
let clearStroka=stroka.replace(/[-+=.a]/gi,"");
console.log(stroka);
console.log(clearStroka);
//console.log(stroka.match(/[a{2}-z{2}]/gi));
console.log(stroka.startsWith("AB"));
