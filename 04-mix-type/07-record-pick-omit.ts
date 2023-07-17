export {}

type PcBrands = 'dell'|'IBM'|'Lenovo'

type Names = Record<string, boolean>
// перший параметр говорить якого типу будуть ключі а другий якого типу будуть значення
const myPc:Names = {
    isAge: true
}
// такий запис буде не валідним так як ключ не number

type BrandName = Record<PcBrands,string>

const myComputers:BrandName = {
    dell: 'dell',
   // Lenovo: 22 //помилка так як значення ключас має бути рядком
}


interface IToDo {
    id: string
    title:string
    description:string
    completed:boolean
    createAt: Date
}

// Pick дозволяє нам вибрати певну структуру з обєкта

type SimpleToDo = Pick<IToDo, 'id'|'title'>

const myToDo: SimpleToDo = {
    id: '123',
    title: 'bag'
}

//Omit робить те саме тільки виключає вказану структуру

type SimpleToDo2 = Omit<IToDo, 'id'|'title'>

const myToDo2: SimpleToDo2 = {
    completed: true,
    createAt: new Date(2023,5,5),
    description: 'description'
}
