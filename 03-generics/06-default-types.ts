import { IUser } from './../01-basic/task/Assignment2';
// В деяких випадках ми можемо задати дефолтні значення для getConfigFileParsingDiagnostics

interface IAnyObj {
    [key: string]: unknown
}

// як і в попередніх прикладах ми створюємо дженерік, але додаємо що він за замовчанням буде дорівнювати інтерфейсу IAnyObj
export async function request<T = IAnyObj>(url:string): Promise<T>{
    const response = await fetch(url)
    return response.json()
}

export interface IUser{
    id: string
    name: string
    haveChild: boolean
}

// TS одразу підказує що дата буде Promise масиву IUser що значно полегшує подальшу роботу
const data = request<IUser[]>('')
