import { IUser } from "./Assignment2"
// массив чисел заданий неявно
const numbers = [1,2,3,4,5] 
// массив чисел і рядків заданий неявно
const arr = [1,2,'3',4]



// два способи явно завдати типовий масив
const arr1: number[] = [1,2,3,5]
const arr2: Array<string> = ['1','2','3']

// можливо задавати одразу масиви з обєкьтв що відповідають інтерфейсу
const usersArr: IUser[] = []
// додати в масив ми зможемо виключно елемент що відповідає інтерфейсу
usersArr.push({
    login: 'Oleg',
    email: 'test@test',
    password: 'Test',
    isOnline: true,
    lastVisited: new Date(2023, 5, 29)
}
)
// також ми можемо задавати як тип массив массивів. Виглядає це наступним чином
const arrOfArr: string[][] = [['hello'],['world']]

// у випвдку функцій ми також можемо використовувати массив як аргумент
function printArr(arr: unknown[]):void{
    arr.forEach((el, index, arr)=>{

    })
}