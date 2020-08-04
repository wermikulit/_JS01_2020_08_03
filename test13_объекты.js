//Объекты
let cat={
    name: "Murzik",
    breed:"Manul",
    weight:10,
    isAngry:true
};

console.log(cat);
console.log(typeof cat);
let prop="breed";
console.log(prop in cat);
console.log(cat[prop]);

delete cat.isAngry;
console.log(cat);
console.log("==========");
for (let prop in cat) {
    console.log(prop, cat[prop]);
}
console.log("==========");
let num={rise:"Errr", 40:"Раз два три", 30:"5555", 10:456.90, weight: 34};
for (let prop in num) {
    console.log(prop, num[prop]);
};
console.log("==========");
let manul=cat;
let sphinx=cat;
let newAge=12.9;
sphinx.breed="Сфинкс";
manul.isAngry=true;
manul[newAge]="Сорок пять";
console.log("manul=", manul);
console.log("sphinx=", sphinx);
console.log(manul==sphinx);