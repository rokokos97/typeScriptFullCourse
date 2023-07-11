// Так як і в JS в TS працює з замиканнями і відбувається це наступним чином

export function createTupePair<T>(first:T){
    return function<U>(second:U):[T,U]{
        return [first, second]
    }
}

const func1 = createTupePair(1)
// TS одразу уточнює що оскільки перший параметр число то і перший елемент кортежу який поверне функція func1 буде число
const func2 = func1("hello world")
// після виклику func2 ми вже явно маємо підказку що кортеж буде складатись з числа і рядка

