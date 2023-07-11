// При використанні дженеріків нам може знадобитись накласти якісь обмеження на типи які будуть задаватись

function len<T extends {length:number}>(arg:T):number{
    return arg.length
}

// в такому випадку TS не дозволить нам вносити як аргумент елементи що немають властивості length або ж 

len('str')
len([1, 2,'d'])
// len(1) у випадку з числом у нас відсутні і параметр length і відповідно зявляється помилка