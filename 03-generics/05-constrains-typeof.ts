function prop<T, U extends keyof T> (key:U, obj:T):T[U]{
    return obj[key];
}

// іноді нам необхідно типізувати таку функцію. На першому етапі ми діємо як у випадках з дженеріком створюючи тип <T> a далі додаємо ще один дженерік <U> звужуючи цей тип до значень ключів обєкта який подається в функцію як аргумень 

// як результат у нас стає можливою наступна логіка

const obj1 = {a: 1, b:2, c:3}

prop('a', obj1) //запис валідний
// prop('d',obj1) запис не валідний так як в obj1 відсутній ключ 'd'

