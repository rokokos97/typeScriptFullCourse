// Важливо відмітити що інтерейси можна розширювати

interface IUser {
    readonly login: string
    password: string
    name: string
}

interface IUser {
    // name: number
    birthday: Date
}

// в такому випадку поля інтерфейсу будуть додаватись. При спробі записати поле з вже існуючим імям й іншим типом виникне помилка

const user1:IUser = {
    login: 'rokokos',
    password: 'test1234',
    name: 'Ros',
    birthday: new Date(1986,2,11)
}

// така властивість може бути дуже корисна у випадках коли треба доповнити вже існуючий в додатку інтерфейс новими полями

// також ми можемо обєднувати або наслідувати інтерфейси
interface IEmployment extends IUser {
    phone?: number
    readonly firstName: string
}
// таким чином новий інтерфейс буде включати всі поля з наслідуваного інтерфейсу + всі свої поля
// наслідувати можна необмежену кількість інтерфейсів






