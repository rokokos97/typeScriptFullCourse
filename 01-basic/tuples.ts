// У випадку з кортежами може знадобитись явно вказати кількість і тип елементів кортежу 
// це робиться в перших дужках
const pairs: [string, string][] = [['hello','world'], ['1','2']]
const data:[number,string,boolean] = [1,'1',true]

const doc:[string,number,Date][] = []
// в такому випадку ми зможимо додати до кортежу елемент однак ТS буде слідкувати за 
// типами елементів 
doc.push(['Helen',1, new Date(2012,6,2)])
// doc.push(['Oleg','1',3]) некоректні типи будуть підсвічені

