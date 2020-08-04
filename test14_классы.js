//Классы
class Cat {
    constructor(name, breed, color, hungerThreshold) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.hungerThreshold = hungerThreshold;
        }
        eat(qEat) {
            if (qEat < this.hungerThreshold) {
                console.log(this.color, this.breed, this.name, "съев", qEat, "(кг), голоден и хочет еще. Мяу!");
            }
            else {
                console.log(this.color, this.breed, this.name, "съев", qEat, "(кг), сыт и идет спать. Мяу!");
            }

        }
        sayMyau() { console.log(this.name, "говорит Мяу!"); }
    }


let manul = new Cat("Эдуард","манул","белый", 10);
let mkun  = new Cat("Барсик","мейн-кун","рыжий", 20);
let sphinx = new Cat("Коробчик","сфинкс","серый", 5);

manul.eat(4);
mkun.eat(21);
sphinx.eat(5);

sphinx.sayMyau();
mkun.sayMyau();