 function test(x?:number | string){
    if (typeof x === 'string'){
        return x.toLocaleUpperCase()
    } else if (typeof x === 'number'){
        x.toString()
    } else if (typeof x === 'undefined'){
        console.log('x do not have value');  
    } else {
        x
    }
 }
// Коли ми перебрали всі можливі варіанти для x то автопідказка говорить нам що для наступного x лишився тип never

function test2(strs: string | string[] | null ){
    // (typeof strs === 'object') буде не коректно так як null в JS теж є обєктом   в такому випадку обєднаємо дві одночасні перевірки за допомогою логічних операторів
    if (strs && (typeof strs === 'object' || Array.isArray(strs))){
       return  strs.forEach((l,index)=>null)
    } else if ( typeof strs === 'string'){
        return strs.toLocaleUpperCase()
    } else {
        return strs
    }
}

// якщо ж нам треба перевірити чи є аргумент інстансом від классу то нам на допомогу приходить джаваскрипт
function test3(y: number[] | Date){
    if(y instanceof Date){
        y.getHours()
    } else {
        // другий варіант вже точно буде массивом
        y.concat()
    }
}

type Fish = {swim: () => void }
type Bird = {fly: ()=> void }

function move(animal: Fish | Bird){
    // в такій ситуації нам необхідно перевірити чи є в обєкті animal необхідне нам поле. Це робиться наступним чином.
    if('swim' in animal){
        return animal.swim()
    }
    // відповідно надалі в нас лишається лише другий варіант
    return animal.fly()
}

