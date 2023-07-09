function sum(a:number, b:number):number {
    return a+b;
}
// Ми явно вказуємо тип для параметрів функції і обовязково вказуємо і тип данних для результату виконання функції 

function log(str:string):void{
    console.log(str)
}
// Явним чином вказуємо що функція не має return тобто не повертає нічого

function crash():never{
    throw new Error('Crash')
}
// Тип never говорить нам про те що функція ніколи не буде завершена

function sum1(a:number, b:number, c?:number):number {
    return a+b;
}
// sum1(7,6,9);
// sum1(10,11,"df");
// sum1(10,11,11,11)
// задавши параметр опціонально при викликанні функції він може додаватись опціонально

function averige(...spr: number[]){
    const sum = spr.reduce((current,total) => current+total, 0)
}
// для спред оператора за замовчанням значення завжди буде массивом. Важливо не забувати вказати що це буде за масив. Тобто типізувати елементи массива.