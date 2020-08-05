//Дата
try {
    let birthDate = new Date("06 September 1972");
    let toDay=new Date();
    console.log(birthDate, toDay);
    let diffTime=Math.abs(toDay-birthDate);
    let diffDays=Math.ceil(diffTime/(1000*60*60*24));
    console.log(diffDays);
    
    let x=16000;
    let myAnnivers = new Date();
    myAnnivers.SetDate(birthDate.getDate()+1);
    //birthDate.setDate(birthDate.getDate()+x);
    console.log(myAnnivers);
    //console.log(birthDate);    
} catch (error) {
    console.log(error);
}

len=-10;
try {
    if (len<0) {
        throw new Error("Длина не может быть отрицательной") }
} catch (error) {
    console.log(error);
}
