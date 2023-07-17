function fromPair(pair:[string, string]){
    const [key, value] = pair;

    return {
        [key]:value
    }
}

let myPair = ['myKey', 'myValue']

// fromPair(myPair) тут виникає помилка і її можна вирішити якщо явно сказати (myPair as [string,string])
// infern допоможе нам витягнути з функції тип першого аргумента що буде передаватись.

type IFirstArg<T> =T extends (first: infer First,...arg:any[])=> any ? First : never

myPair = ['myKey', 'myValue']

