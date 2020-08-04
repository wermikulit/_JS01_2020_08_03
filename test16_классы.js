class Animal{
    constructor(name,what2say){
        this.name=name;
        this.hasTail=true;
        this.sayWords=what2say;
    }
    say(){console.log(this.name, this.sayWords)};
}
class Cat extends Animal{
    constructor(name,what2say,breed){
        super(name,what2say);
        this.breed=breed;
    }
    say(){console.log("Кошка говорит Мяу!")};
}
class Dog extends Animal{
    constructor(name,what2say,breed){
        super(name,what2say);
        this.breed=breed;
    }
    say(){console.log("Собака говорит Гав!")};
}
class Horse extends Animal{
    constructor(name,what2say,breed){
        super(name,what2say);
        this.breed=breed;
    }
    
}
let c=new Cat("Васька","беспородный");
let d=new Dog;
let h=new Horse("Бурушка","просто что-то говорит","тяжеловес");
c.say();
d.say();
h.say();