export interface IUser {
    login:string,
    email: string, 
    password: string,
    isOnline: boolean, 
    lastVisited: Date,
}

interface IAdmin {
    login:string,
    email: string, 
    password: string,
    isOnline: boolean, 
    lastVisited: Date,
    role: string
}

function login(user:{login:string, password:string}){
    if(user.login.length !== 0 && user.password.length !==0){
        console.log(`hello user ${user.login}`);
        
    }
}

let user:IUser = {
    login: 'Oleg',
    email: 'test@test',
    password: 'Test',
    isOnline: true,
    lastVisited: new Date(2023, 5, 29)
}

let admin:IAdmin = {
    login: 'Oleg1',
    email: 'test1@test',
    password: 'Test1',
    isOnline: true,
    lastVisited: new Date(2023, 5, 29),
    role: 'admin'
}
login(user),
login(admin)

