// Коли ми працюємо з функціями нам необхідно явно задати для функції поведінку
function sum(a:number, b:number):number
function sum(a:string, b:string):string
function sum(a:any, b:any):any {
    return a+b
}
// сама реализация функции всегда записывается последней после всех вариантов
sum(1,1)

// рассмотрим вариант с опциональниыми параметрами
type asyncCb = (res: number) => number
function asyncSum(a:number, b:number): Promise<number>
function asyncSum(a:number, b:number, cb:asyncCb):number
function asyncSum(a:number, b:number, cb?:asyncCb):any{
    const result = a+b
    if(cb){
        cb(result)
    }
    return Promise.resolve(result)
}
// після описання всіх сценаріїв ми отримуємо коректні підказки від IDE при виклиці функції
asyncSum(1,2)
