let str =  'hello world'
type x = typeof str

import { getJSDocReturnType } from 'typescript'
// В такому випадку x буде дорівнювати типу змінної str а не літералу. При зміні типу str буде змінюватись і тип x 

// найчастіше це може знадобитись для роботи з функціям. Ми легко можемо дізнатись тип імпортованої функції 
import  {avarige}  from '../01-basic/function'

type NewType = typeof avarige

const max:NewType = (...numbers) => Math.max(...numbers)

max(1,2,4);
// max('1','2') відповідно буде помилка 

// Часто нам може знадобитись дізнатись що саме повертає функція і для цього існує getJSDocReturnType

type DifType = ReturnType<typeof avarige>