//Объекты
function Cat(name, breed, color, hungerThreshold) {
    this.name=name;
    this.breed=breed;
    this.color=color;
    this.hungerThreshold=hungerThreshold;
    this.eat=function (qEat) {
        if (qEat<this.hungerThreshold) {
            console.log(this.color,this.breed,this.name,"съев",qEat,"(порций), голоден и хочет еще. Мяу!");
        } else {
            console.log(this.color,this.breed,this.name,"съев",qEat,"(порций), сыт и идет спать. Мяу!");
        }
        
    }
}

let manul = new Cat("Эдуард","манул","белый", 10);
let mkun  = new Cat("Барсик","мейн-кун","рыжий", 20);
let sphinx = new Cat("Коробчик","сфинкс","серый", 5);

manul.eat(4);
mkun.eat(21);
sphinx.eat(5);

Cat.prototype.sayMyau=function(){console.log(this.name, "говорит Мяу!")};
sphinx.sayMyau();
mkun.sayMyau();