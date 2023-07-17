export{}

type T = Exclude<'a'|'b'|'c','a'>
type T1 = Exclude<'a'|'b'|'c','a'|'c'>
// утиліта Exclude приймає два параметри де другий параметр віднімається від першого. При цьому якщо в другому параметрі є значення яких немає в першому це ніяк не буде впливати на результат.


// маємо юніон з рядка, числа і функції звідки виключаємо функцію
type T2 = Exclude<string|number|(()=>void),Function>

// утиліта Extract працює в зворотній бік і лишає тільки ті значення що зпівпадають з другим аргументом

type T11 = Extract<'a'|'b'|'c','a'>
type T111 = Extract<'a'|'b'|'c','a'|'c'|'d'>
type T21 = Extract<string|number|(()=>void),Function>


type Person = {
    name: string
    firstName: string
    lastName: string
    age: number
    sex: 'male'|'female'|'other'
}

type MyPerson = Exclude<keyof Person,'name'|'firstName'|'fullName'>


// утиліта NonNulllable прибирає з юніона пусті значення

type nonNull = NonNullable<string|number|undefined|null>