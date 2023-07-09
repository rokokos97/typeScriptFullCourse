type Level = 'junior' | 'middle' | 'senior';
 
interface Developer {
  login: string,
  skills: string[],
  level: Level, 
}
 
// create a function that change level of incoming developer
function gradeDeveloper(dev:Developer): Developer{
    if(dev.level === 'junior'){
        dev.level = 'middle'
    } else if (dev.level === 'middle'){
        dev.level = 'senior'
    }
    return dev
}

const juniorDeveloper: Developer = {
    login: 'Jun',
    skills: ['HTML','CSS', 'JS', 'React'],
    level: 'junior'
}

const middleDeveloper: Developer = {
    login: 'Jun',
    skills: ['HTML','CSS', 'JS', 'React'],
    level: 'middle'
}

const seniorDeveloper: Developer = {
    login: 'Jun',
    skills: ['HTML','CSS', 'JS', 'React'],
    level: 'senior'
}

console.log(gradeDeveloper(juniorDeveloper));
console.log(gradeDeveloper(middleDeveloper));
console.log(gradeDeveloper(seniorDeveloper));
