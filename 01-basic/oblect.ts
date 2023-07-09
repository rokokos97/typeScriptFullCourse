interface ICar {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean, 
    // так само як і у функій у обєктів може бути опціональний параметр
}

let BMW: ICar = {
    wheels: 4,
    brand: 'BMW',
    type: 'pickup',
    isNew: false
}

let Audi: ICar = {
    wheels: 4,
    brand: 'Audi',
    type: 'sedan'
}

// якщо опціональний параметр не вказаний то помилка не виникає

// при спробі переназначити тип для поля обєкта теж буде виникати помилка
// BMW.wheels = "4"

interface IBike {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,
    [key: string]: unknown 
    // подібний запис дозволить нам додавати до обєкта з даним інтерфейсом необмежену кількість ключів типу рядок з невизначеним значенням
} 

let willier: IBike = {
    wheels: 2,
    brand: 'Willier',
    type: 'Road',
    isNew: false
}

willier.color = 'red/blue'
// динамічні властивості часто записують в квадратних дужках для того аби явно їх виділити
willier['year'] = 2020  