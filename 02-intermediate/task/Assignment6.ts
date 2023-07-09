function head(value:string):string
function head(value:number[]):number
function head(value:boolean[]):boolean
function head(value: any):any
function head(value: string | number[] | boolean[]): string | number | boolean {
    return value[0];
  }
let b = head('hello')  
let y = head([1,2,3])
let a = head([true, true, false])
let s = head(1);

// head(1) такий варіант вже буде не доступним