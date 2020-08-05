//счастливые билеты
let bilet=[];
let fromNum=0;
let toNum=1000000;

function isHappyBilet(x) {
    let result=false;
    let N1=Number.parseInt(x.slice(0,1))+Number.parseInt(x.slice(1,2))+Number.parseInt(x.slice(2,3));
    let N2=Number.parseInt(x.slice(3,4))+Number.parseInt(x.slice(4,5))+Number.parseInt(x.slice(5,6));
    if (N1 == N2) {
        result=true;
    }
    return result;
}


for (let i = fromNum; i < toNum; i++) {
    let y=String("000000"+i).slice(-6);
    bilet.push(y);
};

let happyBilet=bilet.filter(isHappyBilet);
console.log(happyBilet.length);
console.log(happyBilet);
