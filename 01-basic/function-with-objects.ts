function printCar( car: {name:string, model:string}):void{
    console.log(`You buy a car ${car.name} model: ${car.model}`);   
}

// При роботі з функціями поля оголошені при ініціалізаціЇ являються мінімальними але не вичерпними тобто у функцію при її виклику можна передати більше параметрів ніж було оголошено


const VW = {
    name:'VW',
    model:'T100'}
printCar(VW)

const Mazda = {
    name:'Mazda',
    model:'3',
    color:'black'
}
printCar(Mazda) 


function printCarInfo(car: {name:string; model?:string}):void{
    console.log(`car name:`, car.name.toLocaleUpperCase);
    // в такому випадку маємо проблему з опціональністю другого компонента так як в тілі функції так як він обовязково нам потрібен при виконанні відповідно нам треба додати попередню перевірку його найвності
    if(car.model){
        console.log(`car model:`, car.model.toLocaleUpperCase);}
}
// після перевірки проблема пропалає 

printCarInfo(Mazda);