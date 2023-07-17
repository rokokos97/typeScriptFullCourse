type Answer = never extends any ? true : false 
type Answer1 = any extends any ? true : false 
type Answe2 = 64 extends number ? true : false 
type Answer3 = number extends 64 ? true : false 
type Answer4 = string extends any[] ? true : false 
type Answer5= any[] extends string[] ? true : false 
type T3 = { getDay(): number } extends Date ? true : false
type T4 = (number | string) extends string ? true : false;