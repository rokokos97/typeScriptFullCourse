export const x = 42
const isXNegative = x>=0 ? 'no' : 'yes'

interface IStringRecord {
    [key:string]:string
}

interface INumberRecord {
    [key:string]:number
}

type MyRecord<T> = T extends string ? IStringRecord : INumberRecord
// в залежності від того який дженерік буде заданий ми отримаємо і відповідний тип на виході
type Obj1 = MyRecord<string>
type Obj2 = MyRecord<number>