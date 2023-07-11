// Також часто часто використовується оператор keyof який дозволяжє створити деякий юніон значень
type WindowProp = keyof Window
const myWindow: WindowProp = "addEventListener"
// в даному випадку серед можливих значень для myWindow будуть всі методи доступні для обєкта Window. 

interface IMyComputer {
    os: string
    year: number
}
// створюємо новий тип у якого типами будуть ключі від інтерфейсу IMyComputer
type myPC = keyof IMyComputer //os and year

const homePC: myPC = "year"


// ще одна з можливих форм запису для keyof яка часто зустрічається це подібна
type NewT = keyof [string, number]

const value: NewT = "0"
// тепер для вибору будуть доступні індекси елементів массиву і всі методи массивів 


