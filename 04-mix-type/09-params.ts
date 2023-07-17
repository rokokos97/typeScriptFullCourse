export {}

function f1(arg:{a:number; b:string}){
    return arg.a+arg.b;
};

// утиліта ReturnType дозволяє визначити тип який повертає функція

type T0 = ReturnType<typeof f1>

// утиліта Parameters дозволяє визначити типи вхідних значень у вигляді кортежу з типами вхідних значень функції

type T2 = Parameters<typeof f1>

