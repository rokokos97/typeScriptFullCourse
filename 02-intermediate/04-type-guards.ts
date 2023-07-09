type Jailfish = {swim: ()=> void} 
type Dog = {run: ()=> void}

// створюємо функцію gurd для перевірки типу. Якщо функція виконується як сказано в умові то ми отримаємо true
function isJailfish( pet: Jailfish | Dog):pet is Jailfish {
    return (pet as Jailfish).swim !== undefined
}
// відповідно надалі ми вже можемо використовувати цю функцію як параметр для іншої функції
function move(animal: Jailfish | Dog){
    if(isJailfish(animal)){
       return animal.swim()
    }
    return animal.run()
}