// також є можливість створення кастомних типів самостійно за допомогою слова type
type MyType  = boolean | string;
// це дозволяє зменшити нагромадження коду
type Pair = [string, string];
type Pairs = Pair[]
// таким чином ми спрощуємо читаність запису [string, string][]

// цей тип запису так само може бути застосований і для обєктів

type Car =  {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean, 
    // так само як і у функій у обєктів може бути опціональний параметр
}
