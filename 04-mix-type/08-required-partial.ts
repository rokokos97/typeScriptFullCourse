export {}

interface ITodo {
    readonly id: string
    title: string
    description?: string
    completed: boolean
    createdAt? : number
}

// утиліта Readonly робить всі поля типу readonly

type ROTodo = Readonly<ITodo>

// утиліта Partial робить всі поля типу опціональними

type PTodo = Partial<ITodo>

// утилиіта Required робить всі поля типу обовязковими 

type RTodo = Required<ITodo>