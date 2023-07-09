type Union1 = 'a' | 'b' | 'c'
type Union2 = 'c' | 'd' | 'e'

type Union3 = Union1 | Union2 // all variants

// таким чином зробивши юніон юніонів ми додамо в новий тип всі можливі варіанти з базових типів

type Union4 = Union1 & Union2 // only duplicate options
// також важливо відмітити що при наступному виді запису результат буде протилежним
type Union5 = {a:string, b:string} & {a: string, c:string, d:string}
// Union5 буде мати всі поля 

type User = {
    readonly login: string
    password: string
    name: string
}

type Employment = {
    phone?: number
    readonly firstName: string
} & User

// У випадку з аліасами аби наслідувати типи ми використовуємо аберсанд після створення нового типу
// ії також можна додавати необмежену кількість




